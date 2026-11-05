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

module.exports = (k) =>
  ILUS[k] ? `<svg viewBox="0 0 160 100" xmlns="http://www.w3.org/2000/svg">${ILUS[k]}</svg>` : '';
