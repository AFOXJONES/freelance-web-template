# 🍽️ Plantilla Web - Restaurante / Bar

## Guía rápida para personalizar por cliente

### 📋 Archivos a modificar (en este orden)

| # | Archivo | Qué contiene |
|---|---------|--------------|
| 1 | `src/app/core/config/restaurant.config.ts` | **TODO lo principal**: nombre, contacto, horarios, redes, imágenes, historia, SEO |
| 2 | `src/app/data/menu-data.ts` | Carta completa: categorías, platos, precios, fotos, menús del día |
| 3 | `src/app/data/team-data.ts` | Equipo: nombre, cargo, bio, foto de cada miembro |
| 4 | `src/app/data/gallery-data.ts` | Galería: fotos del local, platos, eventos |
| 5 | `src/styles/_variables.scss` | Colores y tipografía de la marca |
| 6 | `src/index.html` | Título SEO (etiqueta `<title>`) y fuentes de Google Fonts |

---

### 🎯 Prompt tipo para personalizar

```
Necesito personalizar esta plantilla de restaurante para un nuevo cliente:

DATOS DEL NEGOCIO:
- Nombre: [nombre del negocio]
- Tipo: [bar de tapas / restaurante / cafetería / etc.]
- Eslogan: [frase corta]
- Dirección: [calle, nº, CP, ciudad]
- Teléfono: [+34 xxx xxx xxx]
- Email: [email@dominio.com]
- Coordenadas: [lat, lng] (buscar en Google Maps)
- Instagram: [url]
- Facebook: [url]
- Año de fundación: [año]

HORARIOS:
- Lunes a Viernes: [horario]
- Sábado: [horario]
- Domingo: [horario o "Cerrado"]

HISTORIA (para la página Nosotros):
- [Breve historia del negocio, quién lo fundó, qué lo hace especial]
- Cita del dueño: "[frase]"
- Timeline: [eventos importantes con año]

EQUIPO:
- [Nombre] - [Cargo] - [Bio breve]
- [Nombre] - [Cargo] - [Bio breve]

CARTA:
- [Categorías y platos con precio y descripción]

COLORES:
- Color principal: [hex] (el color de su marca/local)
- Color acento: [hex] (color secundario/complementario)
- Fuente títulos: [nombre de la fuente]
- Fuente textos: [nombre de la fuente]

IMÁGENES: (adjuntar o proporcionar URLs)
- Hero landing (1920px ancho)
- Interior del local (800px)
- Fotos de platos (600px cada una)
- Fotos del equipo (400px cada una)
- Galería (800px cada una, mínimo 8-12 fotos)
```

---

### 🖼️ Imágenes - Tamaños recomendados

| Uso | Ancho mínimo | Dónde se configura |
|-----|-------------|-------------------|
| Heroes / fondos de página | 1920px | `restaurant.config.ts → images` |
| Fotos de platos (carta) | 600px | `menu-data.ts → items[].image` |
| Fotos del equipo | 400px | `team-data.ts → members[].image` |
| Galería | 800px | `gallery-data.ts → items[].src` |
| Historia / preview | 800px | `restaurant.config.ts → images` |

---

### 🎨 Colores - Cómo elegir

Archivo: `src/styles/_variables.scss`

```scss
--color-primary: #XXXXXX;       // Color principal de la marca
--color-primary-light: #XXXXXX; // Versión más clara
--color-primary-dark: #XXXXXX;  // Versión más oscura
--color-accent: #XXXXXX;        // Color de acento/botones
--color-accent-light: #XXXXXX;  // Versión más clara del acento
--color-background: #XXXXXX;    // Fondo general (claro)
--color-background-alt: #XXXXXX; // Fondo alternativo (secciones)
```

**Tip:** Usa [coolors.co](https://coolors.co) para generar paletas.

---

### 🔤 Fuentes - Cómo cambiar

1. Elige fuentes en [Google Fonts](https://fonts.google.com)
2. Copia el `<link>` y pégalo en `src/index.html` (reemplaza el existente)
3. Actualiza `src/styles/_variables.scss`:
```scss
--font-heading: 'NuevaFuente', Georgia, serif;
--font-body: 'OtraFuente', system-ui, sans-serif;
```

---

### 🏗️ Comandos

```bash
npm install          # Instalar dependencias (solo la primera vez)
npx ng serve         # Servidor de desarrollo (http://localhost:4200)
npx ng build         # Build de producción (carpeta dist/)
```

---

### 📁 Estructura de archivos clave

```
src/
├── app/
│   ├── core/
│   │   └── config/
│   │       └── restaurant.config.ts    ← ⭐ CONFIGURACIÓN PRINCIPAL
│   ├── data/
│   │   ├── menu-data.ts               ← 📋 Carta / Menú
│   │   ├── team-data.ts               ← 👥 Equipo
│   │   └── gallery-data.ts            ← 📸 Galería
│   ├── features/
│   │   ├── home/                      ← Landing principal
│   │   ├── menu/                      ← Página de carta
│   │   ├── about/                     ← Nosotros
│   │   ├── gallery/                   ← Galería
│   │   ├── contact/                   ← Contacto (sin formulario, solo teléfono/email)
│   │   └── legal/                     ← Legales (se actualizan automáticamente con config)
│   └── shared/                        ← Componentes reutilizables
├── styles/
│   └── _variables.scss                ← 🎨 COLORES Y FUENTES
└── index.html                         ← 📄 Título SEO + Google Fonts
```
