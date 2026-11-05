// Genera el brochure interactivo de PlastiCycle (HTML -> PDF con Chromium/Playwright).
// Uso:  node build.js            -> PDF final (oculta campos vacíos)
//       node build.js --borrador -> PDF con marcas de "información pendiente"
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const DIR = __dirname;
const BORRADOR = process.argv.includes('--borrador');
const data = JSON.parse(fs.readFileSync(path.join(DIR, 'content.json'), 'utf8'));
const { empresa, contacto, secciones } = data;

const esc = (s = '') =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const pendiente = (txt = 'Información pendiente') =>
  BORRADOR ? `<div class="pend">${esc(txt)}</div>` : '';

// Imágenes locales -> data URI para que queden embebidas en el PDF
function img(rel) {
  if (!rel) return '';
  const p = path.join(DIR, rel);
  if (!fs.existsSync(p)) return '';
  const ext = path.extname(p).slice(1).toLowerCase().replace('jpg', 'jpeg').replace('svg', 'svg+xml');
  return `data:image/${ext};base64,${fs.readFileSync(p).toString('base64')}`;
}

// Iconos de trazo simples (24x24)
const ICONS = {
  recycle: '<path d="M7 19H4.8a1.8 1.8 0 0 1-1.6-2.7L7.2 9.5"/><path d="M11 19h8.2a1.8 1.8 0 0 0 1.6-2.7l-1.2-2.1"/><path d="m14 16-3 3 3 3"/><path d="M8.3 13.6 7.2 9.5 3.1 10.6"/><path d="m9.3 5.6 1.1-1.9a1.8 1.8 0 0 1 3.1 0l3.9 6.8"/><path d="m13.4 9.6 4.1 1.1 1.1-4.1"/>',
  pallet: '<rect x="2" y="15" width="20" height="3" rx=".5"/><path d="M4 18v3M12 18v3M20 18v3M2 21h20"/><rect x="4" y="5" width="7" height="10"/><rect x="13" y="8" width="7" height="7"/>',
  box: '<path d="M21 8 12 3 3 8v8l9 5 9-5z"/><path d="m3 8 9 5 9-5M12 13v8"/>',
  roll: '<ellipse cx="7" cy="12" rx="4" ry="8"/><ellipse cx="7" cy="12" rx="1.3" ry="2.6"/><path d="M7 4h11v13l-3-1-3 1-3-1-2 3"/>',
  rag: '<path d="M4 6c3-2 5 1 8-1s5 0 8-1v12c-3 1-5-1-8 1s-5-1-8 1z"/><path d="M8 9.5c2-.8 3 .4 5-.4M8 13c2-.8 3 .4 5-.4"/>',
  spray: '<path d="M8 10h6v11H8zM9 10V7h4v3M13 7h3l2-2M9 7l-2-2h6"/><path d="M19 9h2M19 12h2M18.5 6l1.5-1.5"/>',
  cart: '<circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M2 3h3l2.7 12.4a1.5 1.5 0 0 0 1.5 1.1h8.6a1.5 1.5 0 0 0 1.5-1.1L21 7H6"/>',
  truck: '<path d="M2 5h12v11H2zM14 9h4l4 4v3h-8z"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="18" r="2"/>',
  warehouse: '<path d="M2 21V8l10-5 10 5v13"/><path d="M6 21v-9h12v9M6 15h12M6 18h12"/>',
  drop: '<path d="M12 2.7S5 10 5 14.5a7 7 0 0 0 14 0C19 10 12 2.7 12 2.7z"/><path d="M9 15a3 3 0 0 0 3 3"/>',
  sun: '<circle cx="12" cy="7" r="3"/><path d="M12 1.5v1M6.5 7h-1M18.5 7h-1M8.2 3.2l.7.7M15.8 3.2l-.7.7"/><path d="M4 21l2-9h12l2 9zM5 16.5h14M10 12l-1 9M14 12l1 9"/>',
  leaf: '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10Z"/><path d="M2 21c0-3 1.9-5.4 5.2-6.1C9.6 14.4 12 13 13 12"/>',
  phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
  web: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/>',
  pin: '<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
  clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  wa: '<path d="M3 21l1.6-4.7A9 9 0 1 1 8 19.6z"/><path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.6-2-1-1 1a5 5 0 0 1-2.9-2.9l1-1-1-2z"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  home: '<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  back: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
};
const icon = (name, cls = '') =>
  `<svg class="ic ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${ICONS[name] || ICONS.leaf}</svg>`;

// ---------- Enlaces de contacto ----------
const digits = (s) => String(s || '').replace(/\D/g, '');
// Números MX de 10 dígitos -> agrega lada de país 52
const intl = (s) => (digits(s).length === 10 ? '52' + digits(s) : digits(s));
function cotizarHref(servicio) {
  const msg = `Hola ${empresa.nombre}, me interesa cotizar: ${servicio}`;
  if (contacto.whatsapp) return `https://wa.me/${intl(contacto.whatsapp)}?text=${encodeURIComponent(msg)}`;
  if (contacto.email)
    return `mailto:${contacto.email}?subject=${encodeURIComponent('Cotización: ' + servicio)}&body=${encodeURIComponent(msg)}`;
  return '#contacto';
}
const contactRows = [
  ['wa', 'WhatsApp', contacto.whatsapp, contacto.whatsapp && `https://wa.me/${intl(contacto.whatsapp)}`],
  ['phone', 'Teléfono', contacto.telefono, contacto.telefono && `tel:+${intl(contacto.telefono)}`],
  ['mail', 'Correo', contacto.email, contacto.email && `mailto:${contacto.email}`],
  ['web', 'Sitio web', contacto.web, contacto.web && (/^https?:/.test(contacto.web) ? contacto.web : `https://${contacto.web}`)],
  ['pin', 'Dirección', contacto.direccion, contacto.direccion && `https://maps.google.com/?q=${encodeURIComponent(contacto.direccion)}`],
  ['clock', 'Horario', contacto.horario, ''],
];

// ---------- Páginas ----------
const logoSrc = img(empresa.logo);
const iconoSrc = img(empresa.logoIcono);
const brand = (cls = '') =>
  logoSrc
    ? `<img class="logo ${cls}" src="${logoSrc}" alt="${esc(empresa.nombre)}">`
    : `<div class="wordmark ${cls}">${iconoSrc ? `<span class="mark"><img src="${iconoSrc}" alt=""></span>` : icon('recycle')}<span>${esc(empresa.nombre)}</span></div>`;

// Secciones visibles en índice (las de continuación usan "enIndice": false)
const enIndice = secciones.filter((s) => s.enIndice !== false);
const numDe = (s) => enIndice.indexOf(s) + 1;
const pad = (n) => String(n).padStart(2, '0');

const pages = [];
const total = secciones.length + 3;

function footer(n, prevId, nextId) {
  return `<footer class="foot">
    <a class="nav" href="#indice">${icon('home')}Índice</a>
    <span class="pg">${String(n).padStart(2, '0')} / ${String(total).padStart(2, '0')}</span>
    <span class="navs">
      ${prevId ? `<a class="nav" href="#${prevId}">${icon('back')}Anterior</a>` : ''}
      ${nextId ? `<a class="nav" href="#${nextId}">Siguiente${icon('arrow')}</a>` : ''}
    </span>
  </footer>`;
}

// 1. Portada
pages.push(`<section class="page cover" id="portada">
  <div class="cover-bg"></div>
  <div class="cover-in">
    ${brand('big')}
    <h1>Soluciones integrales de reciclaje,<br>empaque y servicios industriales</h1>
    ${empresa.lema ? `<p class="lema">${esc(empresa.lema)}</p>` : pendiente('Lema / frase de la empresa')}
    <div class="chips">${enIndice.map((s) => `<a href="#${s.id}" class="chip">${esc(s.titulo)}</a>`).join('')}</div>
    <a class="cta big" href="#indice">Ver servicios ${icon('arrow')}</a>
  </div>
</section>`);

// 2. Índice
pages.push(`<section class="page index" id="indice">
  <header class="ph"><h2>Nuestros servicios</h2><p>Toca cualquier servicio para ir directo a su sección.</p></header>
  ${empresa.descripcion ? `<p class="about">${esc(empresa.descripcion)}</p>` : pendiente('Descripción breve de la empresa (quiénes somos)')}
  <div class="grid-idx">
    ${enIndice
      .map(
        (s, i) => `<a class="idx" href="#${s.id}">
        <span class="num">${pad(i + 1)}</span>
        <span class="idx-ic">${icon(s.icono)}</span>
        <span class="idx-t"><b>${esc(s.titulo)}</b>${s.subtitulo ? `<small>${esc(s.subtitulo)}</small>` : ''}</span>
        <span class="go">${icon('arrow')}</span>
      </a>`
      )
      .join('')}
  </div>
  <a class="cta" href="#contacto">${icon('phone')} Contáctanos</a>
  ${footer(2, 'portada', secciones[0].id)}
</section>`);

// 3..n Secciones
secciones.forEach((s, i) => {
  const n = i + 3;
  const prev = i === 0 ? 'indice' : secciones[i - 1].id;
  const next = i === secciones.length - 1 ? 'contacto' : secciones[i + 1].id;
  const foto = img(s.imagen);
  const cardsHtml = (list) =>
    list
      .map(
        (it) => `<div class="card">
        ${it.imagen && img(it.imagen) ? `<img src="${img(it.imagen)}" alt="">` : ''}
        <h4>${icon('check')}${esc(it.nombre)}</h4>
        ${it.detalle ? `<p>${esc(it.detalle)}</p>` : ''}
      </div>`
      )
      .join('');
  const grupos = s.grupos || ((s.items || []).length ? [{ titulo: '', items: s.items }] : []);
  const items = grupos
    .map((g) => `${g.titulo ? `<h3 class="gt">${esc(g.titulo)}</h3>` : ''}<div class="cards">${cardsHtml(g.items)}</div>`)
    .join('');
  const bloques = (s.bloques || [])
    .map((b) => `<div class="blk"><h3 class="gt">${esc(b.titulo)}</h3><p>${esc(b.texto)}</p></div>`)
    .join('');
  const lista = s.lista
    ? `<div class="why"><h3>${esc(s.lista.titulo)}</h3><ul>${s.lista.items.map((t) => `<li>${icon('check')}${esc(t)}</li>`).join('')}</ul></div>`
    : '';
  const cont = s.enIndice === false;
  pages.push(`<section class="page svc" id="${s.id}">
    <header class="band">
      <span class="bnum">${cont ? '' : pad(numDe(s))}</span>
      <span class="bic">${icon(s.icono)}</span>
      <div><h2>${esc(s.titulo)}</h2>${s.subtitulo ? `<p>${esc(s.subtitulo)}</p>` : ''}</div>
    </header>
    ${foto ? `<img class="hero" src="${foto}" alt="">` : ''}
    <div class="body">
      ${s.descripcion ? `<p class="desc">${esc(s.descripcion)}</p>` : cont ? '' : pendiente('Descripción del servicio')}
      ${(s.destacados || []).length ? `<div class="badges">${s.destacados.map((d) => `<span class="badge">${icon('check')}${esc(d)}</span>`).join('')}</div>` : ''}
      ${bloques ? `<div class="blks">${bloques}</div>` : ''}
      ${items || (cont ? '' : pendiente('Productos / variantes del servicio'))}
      ${lista}
      <a class="cta" href="${esc(cotizarHref(s.titulo))}">${icon(contacto.whatsapp ? 'wa' : 'mail')} Solicitar cotización</a>
    </div>
    ${footer(n, prev, next)}
  </section>`);
});

// Contacto
pages.push(`<section class="page contact" id="contacto">
  <div class="cover-bg"></div>
  <div class="cover-in">
    ${brand('big')}
    <h2>Hablemos de tu proyecto</h2>
    <div class="clist">
      ${contactRows
        .map(([ic, label, val, href]) => {
          if (!val) return BORRADOR ? `<div class="crow off">${icon(ic)}<span><small>${label}</small>pendiente</span></div>` : '';
          const inner = `${icon(ic)}<span><small>${label}</small>${esc(val)}</span>`;
          return href ? `<a class="crow" href="${esc(href)}">${inner}</a>` : `<div class="crow">${inner}</div>`;
        })
        .join('')}
    </div>
    ${empresa.razonSocial ? `<p class="legal">${esc(empresa.razonSocial)}${empresa.rfc ? ` · RFC: ${esc(empresa.rfc)}` : ''}</p>` : ''}
    <a class="cta big light" href="#indice">${icon('home')} Volver al índice</a>
  </div>
  ${footer(total, secciones[secciones.length - 1].id, null)}
</section>`);

const html = `<!doctype html><html lang="es"><head><meta charset="utf-8">
<title>${esc(empresa.nombre)} – Brochure de servicios</title>
<style>${fs.readFileSync(path.join(DIR, 'styles.css'), 'utf8')}</style></head>
<body>${pages.join('\n')}</body></html>`;

(async () => {
  const outName = BORRADOR ? 'plasticycle-brochure-borrador' : 'plasticycle-brochure';
  fs.writeFileSync(path.join(DIR, `${outName}.html`), html);
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'load' });
  await page.pdf({
    path: path.join(DIR, `${outName}.pdf`),
    format: 'Letter',
    printBackground: true,
    preferCSSPageSize: true,
    tagged: true,
    outline: true,
  });
  await browser.close();
  console.log(`OK -> ${outName}.pdf (${total} páginas)`);
})();
