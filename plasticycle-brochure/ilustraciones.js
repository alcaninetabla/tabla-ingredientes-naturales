// Ilustraciones vectoriales de productos (viewBox 160x100). Sustituibles por fotos reales
// usando "imagen" en el item de content.json.
const K = '#c99a5b', K2 = '#a97b40', K3 = '#e6c28e'; // cartón / kraft
const G = '#1f9d55', L = '#6cd36b', D = '#3f3a33';   // marca
const C = '#d7ecf2', C2 = '#a9d3e0';                  // plástico transparente
const W = '#ffffff', S = '#f1efe4';                   // blanco / sombra
const sombra = '<ellipse cx="80" cy="92" rx="56" ry="5" fill="#000" opacity=".08"/>';

const ILUS = {
  playo: `${sombra}
    <path d="M38 30h78v50H38z" fill="${C}"/>
    <ellipse cx="116" cy="55" rx="10" ry="25" fill="${C2}"/>
    <ellipse cx="116" cy="55" rx="4" ry="10" fill="${K}"/><ellipse cx="116" cy="55" rx="2" ry="5" fill="${K2}"/>
    <ellipse cx="38" cy="55" rx="10" ry="25" fill="${C2}"/>
    <path d="M38 80c-10 2-20 6-26 10l2-30c6-3 14-5 24-5z" fill="${C}" opacity=".9"/>
    <path d="M50 36h56M50 46h56M50 64h56M50 74h56" stroke="${W}" stroke-width="2" opacity=".7"/>`,
  bolsaEmpaque: `${sombra}
    <rect x="48" y="14" width="64" height="76" rx="3" fill="${C}"/>
    <rect x="48" y="14" width="64" height="12" fill="${C2}"/>
    <path d="M48 26h64" stroke="${G}" stroke-width="2.5"/>
    <path d="M58 34l8 50M100 34l-6 40" stroke="${W}" stroke-width="3" opacity=".7"/>
    <rect x="58" y="60" width="44" height="18" rx="2" fill="${W}"/>
    <path d="M64 66h20M64 72h30" stroke="${C2}" stroke-width="2"/>`,
  bolsaBasura: `${sombra}
    <path d="M52 30c-6 20-8 44-2 58h60c6-14 4-38-2-58z" fill="${D}"/>
    <path d="M70 30l-4-14 8 6 6-10 6 10 8-6-4 14z" fill="#2a2621"/>
    <path d="M66 30h28" stroke="${L}" stroke-width="3" stroke-linecap="round"/>
    <path d="M62 44c-2 14-2 28 0 38" stroke="#5a544b" stroke-width="3" fill="none"/>
    <path d="M118 40l12-6v50h-12z" fill="${D}" opacity=".85"/>`,
  cinta: `${sombra}
    <circle cx="70" cy="54" r="34" fill="${K}"/><circle cx="70" cy="54" r="28" fill="${K3}"/>
    <circle cx="70" cy="54" r="16" fill="${S}"/><circle cx="70" cy="54" r="12" fill="${W}"/>
    <path d="M104 54v30h34V70" fill="${K}" opacity=".9"/>
    <path d="M100 52a30 30 0 0 1 4 6" stroke="${K2}" stroke-width="2"/>`,
  dobleCara: `${sombra}
    <circle cx="70" cy="54" r="30" fill="${W}" stroke="#ddd" stroke-width="2"/>
    <circle cx="70" cy="54" r="24" fill="${S}"/>
    <circle cx="70" cy="54" r="15" fill="${K}"/><circle cx="70" cy="54" r="11" fill="${W}"/>
    <path d="M100 54h40v14H100z" fill="${W}" stroke="#ddd" stroke-width="2"/>
    <path d="M118 68h22v6h-22z" fill="#d9534f"/>`,
  fleje: `${sombra}
    <ellipse cx="72" cy="56" rx="38" ry="30" fill="none" stroke="${G}" stroke-width="10"/>
    <ellipse cx="72" cy="56" rx="26" ry="19" fill="none" stroke="${L}" stroke-width="8"/>
    <ellipse cx="72" cy="56" rx="14" ry="9" fill="${S}"/>
    <path d="M108 66l30 18" stroke="${G}" stroke-width="8" stroke-linecap="round"/>
    <rect x="122" y="70" width="14" height="10" rx="2" fill="#9aa0a6" transform="rotate(30 129 75)"/>`,
  caja: `${sombra}
    <path d="M30 40l50-14 50 14v40l-50 12-50-12z" fill="${K}"/>
    <path d="M80 54v38l50-12V40z" fill="${K2}"/>
    <path d="M30 40l50 14 50-14" fill="none" stroke="${K2}" stroke-width="1.5"/>
    <path d="M30 40l-12-14 50-10 12 10z" fill="${K3}"/>
    <path d="M130 40l12-14-50-10-12 10z" fill="${K3}"/>
    <path d="M44 62h22M44 68h14" stroke="${K2}" stroke-width="2"/>`,
  trapo: `${sombra}
    <rect x="30" y="66" width="100" height="20" rx="6" fill="#e9e4d4"/>
    <rect x="34" y="48" width="94" height="20" rx="6" fill="#9cc3e6"/>
    <rect x="28" y="30" width="98" height="20" rx="6" fill="#f2b8a6"/>
    <rect x="38" y="14" width="88" height="18" rx="6" fill="${W}" stroke="#e2ddcc" stroke-width="2"/>
    <path d="M40 76h80M44 58h76M38 40h80" stroke="${W}" stroke-width="2" stroke-dasharray="4 4" opacity=".7"/>`,
  limpieza: `${sombra}
    <rect x="40" y="40" width="30" height="50" rx="6" fill="${L}"/>
    <path d="M46 40v-10h18v10" fill="${G}"/><path d="M46 30h22l8-6h-30z" fill="${D}"/>
    <rect x="45" y="56" width="20" height="16" rx="2" fill="${W}"/>
    <path d="M88 36h40c4 0 6 3 6 6v44c0 3-2 4-4 4H86c-2 0-4-1-4-4V42c0-3 3-6 6-6z" fill="#7cc4e8"/>
    <rect x="98" y="26" width="16" height="10" fill="#2f86b8"/>
    <rect x="92" y="54" width="34" height="20" rx="2" fill="${W}"/>`,
  seguridad: `${sombra}
    <path d="M38 70c0-26 18-44 42-44s42 18 42 44z" fill="#f4c20d"/>
    <path d="M72 26h16v40H72z" fill="#e0ae00"/>
    <path d="M28 70h104v10H28z" fill="#e0ae00" rx="3"/>
    <path d="M52 48c4-8 10-12 16-14" stroke="${W}" stroke-width="4" stroke-linecap="round" opacity=".6"/>`,
  plasticos: `${sombra}
    <rect x="34" y="38" width="92" height="52" rx="4" fill="${C}"/>
    <g fill="${C2}"><rect x="40" y="44" width="14" height="40" rx="6"/><rect x="58" y="48" width="14" height="36" rx="6"/><rect x="76" y="44" width="14" height="40" rx="6"/><rect x="94" y="48" width="14" height="36" rx="6"/><rect x="110" y="44" width="10" height="40" rx="5"/></g>
    <path d="M34 54h92M34 74h92" stroke="${G}" stroke-width="3"/>
    <path d="M60 14c8 0 10 6 10 12h10l-14 12-14-12h10c0-6-4-10-2-12z" fill="${L}"/>`,
  textiles: `${sombra}
    <g><ellipse cx="48" cy="70" rx="14" ry="18" fill="#2f86b8"/><rect x="48" y="52" width="70" height="36" fill="#4ba3d6"/><ellipse cx="118" cy="70" rx="14" ry="18" fill="#3b8fc0"/><ellipse cx="118" cy="70" rx="4" ry="5" fill="${D}"/></g>
    <g><ellipse cx="58" cy="34" rx="12" ry="16" fill="#c0504d"/><rect x="58" y="18" width="56" height="32" fill="#d9665f"/><ellipse cx="114" cy="34" rx="12" ry="16" fill="#cc5a54"/><ellipse cx="114" cy="34" rx="4" ry="5" fill="${D}"/></g>`,
  madera: `${sombra}
    <rect x="22" y="66" width="116" height="10" fill="${K}"/><rect x="22" y="80" width="116" height="10" fill="${K2}"/>
    <rect x="30" y="50" width="16" height="16" fill="${K2}"/><rect x="72" y="50" width="16" height="16" fill="${K2}"/><rect x="114" y="50" width="16" height="16" fill="${K2}"/>
    <rect x="22" y="40" width="116" height="10" fill="${K3}"/><rect x="22" y="26" width="116" height="10" fill="${K3}"/>
    <rect x="30" y="36" width="16" height="4" fill="${K}"/><rect x="72" y="36" width="16" height="4" fill="${K}"/><rect x="114" y="36" width="16" height="4" fill="${K}"/>`,
  metales: `${sombra}
    <g fill="#b8bec4" stroke="#8a9198" stroke-width="2"><circle cx="46" cy="78" r="12"/><circle cx="72" cy="78" r="12"/><circle cx="98" cy="78" r="12"/><circle cx="59" cy="56" r="12"/><circle cx="85" cy="56" r="12"/><circle cx="72" cy="34" r="12"/></g>
    <g fill="#8a9198"><circle cx="46" cy="78" r="6"/><circle cx="72" cy="78" r="6"/><circle cx="98" cy="78" r="6"/><circle cx="59" cy="56" r="6"/><circle cx="85" cy="56" r="6"/><circle cx="72" cy="34" r="6"/></g>
    <path d="M112 90l26-40 8 6-24 34z" fill="#d08b3c"/><path d="M118 90l26-40" stroke="#a96a26" stroke-width="2"/>`,
};


// ---------- Unidades de transporte (vista lateral, viewBox 240x90) ----------
const piso = '<path d="M0 80h240" stroke="#d9d6c8" stroke-width="2"/>';
const rueda = (x) => `<circle cx="${x}" cy="72" r="8" fill="${D}"/><circle cx="${x}" cy="72" r="3.5" fill="#b8bec4"/>`;
const tracto = (x) => `<path d="M${x} 68V36h30l22 16v16z" fill="${G}"/><path d="M${x + 6} 40h21l13 10h-34z" fill="${C}"/><rect x="${x - 4}" y="64" width="58" height="5" fill="${D}"/>${rueda(x + 12)}${rueda(x + 42)}`;
const TRUCKS = {
  pickup: `${piso}<path d="M50 68V48h70V34h32l18 14h14c4 0 6 3 6 6v14z" fill="${G}"/><path d="M126 38h24l12 10h-36z" fill="${C}"/><path d="M50 48h70" stroke="${L}" stroke-width="3"/>${rueda(78)}${rueda(166)}`,
  torton: `${piso}<rect x="24" y="16" width="128" height="50" rx="2" fill="${W}" stroke="#d9d6c8" stroke-width="2"/><path d="M24 54h128" stroke="${L}" stroke-width="4"/><path d="M154 68V34h28l20 16v18z" fill="${G}"/><path d="M160 38h20l12 10h-32z" fill="${C}"/>${rueda(186)}<rect x="24" y="64" width="130" height="5" fill="${D}"/>${rueda(44)}${rueda(64)}`,
  semi: `${piso}<rect x="6" y="14" width="160" height="50" rx="2" fill="${W}" stroke="#d9d6c8" stroke-width="2"/><path d="M6 52h160" stroke="${L}" stroke-width="4"/><rect x="6" y="62" width="160" height="4" fill="${D}"/>${rueda(120)}${rueda(140)}${tracto(176)}<text x="86" y="40" text-anchor="middle" font-family="Inter,sans-serif" font-weight="800" font-size="16" fill="${G}">53'</text>`,
  full: `${piso}<rect x="2" y="22" width="88" height="42" rx="2" fill="${W}" stroke="#d9d6c8" stroke-width="2"/><rect x="96" y="22" width="88" height="42" rx="2" fill="${W}" stroke="#d9d6c8" stroke-width="2"/><path d="M2 54h88M96 54h88" stroke="${L}" stroke-width="4"/><rect x="2" y="62" width="182" height="4" fill="${D}"/>${rueda(20)}${rueda(70)}${rueda(112)}${rueda(162)}${tracto(190).replace('M190 68V36h30l22 16v16z','M190 68V36h28l20 16v16z')}<text x="46" y="46" text-anchor="middle" font-family="Inter,sans-serif" font-weight="800" font-size="13" fill="${G}">FULL</text><text x="140" y="46" text-anchor="middle" font-family="Inter,sans-serif" font-weight="800" font-size="13" fill="${G}">53'</text>`,
  contenedor: `${piso}<rect x="8" y="18" width="156" height="44" fill="#c0504d"/>${[...Array(12)].map((_, i) => `<path d="M${18 + i * 12} 22v36" stroke="#a63f3c" stroke-width="3"/>`).join('')}<rect x="6" y="62" width="160" height="4" fill="${D}"/>${rueda(120)}${rueda(140)}${tracto(176)}`,
  plataforma: `${piso}<rect x="6" y="56" width="160" height="7" fill="${D}"/><rect x="14" y="30" width="34" height="26" fill="${K}"/><rect x="52" y="36" width="34" height="20" fill="${K2}"/><rect x="90" y="26" width="34" height="30" fill="${K}"/><rect x="128" y="38" width="32" height="18" fill="${K3}"/><path d="M14 40h34M90 38h34" stroke="${K2}" stroke-width="2"/>${rueda(120)}${rueda(140)}${tracto(176)}`,
};

// ---------- Escenas anchas (viewBox 320x100) ----------
const ESCENAS = {
  ecommerce: `<rect x="20" y="20" width="76" height="50" rx="4" fill="${D}"/><rect x="25" y="25" width="66" height="40" fill="${W}"/><path d="M12 72h92l-6 6H18z" fill="#5a544b"/>
    <path d="M42 36h4l4 16h18l4-12H50" stroke="${G}" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/><circle cx="54" cy="58" r="2.5" fill="${G}"/><circle cx="66" cy="58" r="2.5" fill="${G}"/>
    <path d="M114 50h30m-8-7 8 7-8 7" stroke="${L}" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M160 46l24-8 24 8v26l-24 8-24-8z" fill="${K}"/><path d="M184 54v26l24-8V46z" fill="${K2}"/><path d="M160 46l24 8 24-8" fill="none" stroke="${K2}" stroke-width="1.5"/><rect x="176" y="40" width="16" height="4" fill="${K3}"/>
    <path d="M222 50h30m-8-7 8 7-8 7" stroke="${L}" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M262 82V44l14-10v10l14-10v10l14-10v48z" fill="${G}"/><rect x="270" y="58" width="8" height="8" fill="${W}"/><rect x="284" y="58" width="8" height="8" fill="${W}"/><rect x="270" y="70" width="22" height="12" fill="${D}"/>
    <text x="58" y="96" text-anchor="middle" font-family="Inter,sans-serif" font-size="10" font-weight="700" fill="${D}">Pedido</text><text x="184" y="96" text-anchor="middle" font-family="Inter,sans-serif" font-size="10" font-weight="700" fill="${D}">Entrega</text><text x="283" y="96" text-anchor="middle" font-family="Inter,sans-serif" font-size="10" font-weight="700" fill="${D}">Tu empresa</text>`,
  almacen: `<path d="M40 88V36l120-24 120 24v52z" fill="${D}"/><path d="M60 88V44h200v44z" fill="${S}"/>
    ${[0, 1, 2, 3].map((r) => `<rect x="${72 + r * 48}" y="48" width="4" height="40" fill="${G}"/><rect x="${108 + r * 48}" y="48" width="4" height="40" fill="${G}"/>` + [0, 1, 2].map((n) => `<rect x="${72 + r * 48}" y="${58 + n * 12}" width="40" height="2.5" fill="${G}"/><rect x="${78 + r * 48}" y="${50 + n * 12}" width="${12 + (n % 2) * 6}" height="8" fill="${K}"/><rect x="${94 + r * 48}" y="${51 + n * 12}" width="12" height="7" fill="${C2}"/>`).join('')).join('')}
    <path d="M30 90h260" stroke="#d9d6c8" stroke-width="2"/>`,
  energia: `<circle cx="270" cy="26" r="14" fill="#f4c20d"/><path d="M270 4v6M270 42v6M248 26h6M286 26h6M255 11l4 4M281 37l4 4M285 11l-4 4M259 37l-4 4" stroke="#f4c20d" stroke-width="3" stroke-linecap="round"/>
    <path d="M30 90V56l70-20 70 20v34z" fill="${S}"/><path d="M24 58l76-24 76 24" stroke="${D}" stroke-width="5" fill="none"/>
    <g transform="skewX(-20)"><rect x="70" y="40" width="34" height="16" fill="#2f5d8a"/><rect x="108" y="40" width="34" height="16" fill="#2f5d8a"/><path d="M70 48h72M87 40v16M125 40v16" stroke="#9cc3e6" stroke-width="1"/></g>
    <rect x="86" y="68" width="28" height="22" fill="${K}"/>
    <rect x="196" y="40" width="64" height="40" rx="4" fill="${W}" stroke="#d9d6c8" stroke-width="2"/><path d="M232 46l-12 18h10l-4 12 14-20h-10l4-10z" fill="${G}"/>
    <path d="M176 70h20" stroke="${D}" stroke-width="3" stroke-dasharray="4 3"/><path d="M20 90h280" stroke="#d9d6c8" stroke-width="2"/>`,
};

// ---------- Plataformas (mosaicos con el nombre, no son logotipos oficiales) ----------
const tile = (bg, fg, txt, size = 22) => `<rect x="8" y="14" width="144" height="72" rx="12" fill="${bg}"/><text x="80" y="58" text-anchor="middle" font-family="Inter,sans-serif" font-weight="800" font-size="${size}" fill="${fg}">${txt}</text>`;
const PLATAFORMAS = {
  amazon: tile('#232f3e', '#ffffff', 'Amazon'),
  mercadolibre: tile('#ffe600', '#2d3277', 'MercadoLibre', 18),
  otras: tile(S, D, 'y más…'),
};

const svg = (vb, body) => `<svg viewBox="${vb}" xmlns="http://www.w3.org/2000/svg">${body}</svg>`;
module.exports = (k) =>
  ILUS[k] ? svg('0 0 160 100', ILUS[k])
  : PLATAFORMAS[k] ? svg('0 0 160 100', PLATAFORMAS[k])
  : TRUCKS[k] ? svg('0 0 240 90', TRUCKS[k])
  : ESCENAS[k] ? svg('0 0 320 100', ESCENAS[k])
  : '';

