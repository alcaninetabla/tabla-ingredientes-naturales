# Brochure interactivo PlastiCycle

PDF tamaño Carta con navegación interactiva:
- Índice con enlaces a cada servicio; portada con accesos directos.
- Pie de página en cada hoja: "Índice", "Anterior", "Siguiente".
- Botón "Solicitar cotización" por servicio (abre WhatsApp con mensaje prellenado; si no hay WhatsApp, correo; si no hay ninguno, va a Contacto).
- Contacto con enlaces clicables (WhatsApp, teléfono, correo, web, mapa).

## Editar contenido
Todo el texto está en `content.json`. Imágenes y logo van en `assets/` y se referencian por ruta
(`"logo": "assets/logo.png"`, `"imagen": "assets/tarimas.jpg"` en una sección o en un item).
Colores de marca: variables al inicio de `styles.css`.

## Generar
    node build.js            # plasticycle-brochure.pdf (final, oculta campos vacíos)
    node build.js --borrador # plasticycle-brochure-borrador.pdf (marca lo pendiente en amarillo)
