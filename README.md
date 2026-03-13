# 🎵 Rolling Loud Chile — Landing Page

> Proyecto frontend inspirado en el festival **Rolling Loud**, con la motivación personal de que algún día Chile pueda ser sede de este icónico festival de música urbana. Esta landing page recrea fielmente la experiencia visual del evento.

---

## 🖥️ Vista previa

La página incluye las siguientes secciones:

- **Hero con video de fondo** — Video en loop con overlay y llamada a la acción
- **Sobre el Festival** — Descripción del evento con imagen optimizada (AVIF/WebP)
- **Line Up** — Artistas y horarios por escenario para Viernes 21 y Sábado 22
- **Galería** — Sección de imágenes del evento
- **Boletos** — Pases disponibles con precios (1 día / 2 días)

---

## 🛠️ Stack Tecnológico

| Tecnología | Uso |
|---|---|
| **HTML5** | Estructura semántica (header, section, nav, footer) |
| **SCSS / Sass** | Estilos con variables, mixins y arquitectura modular (base + layout) |
| **JavaScript** | Interacciones dinámicas y manipulación del DOM |
| **Gulp 4** | Build tool: compilación Sass, minificación CSS/JS, optimización de imágenes |
| **Browser Sync** | Servidor de desarrollo con recarga automática |
| **PostCSS + Autoprefixer** | Compatibilidad cross-browser automática |
| **CSSNano** | Minificación de CSS para producción |
| **gulp-webp / gulp-avif** | Generación de imágenes en formatos modernos |
| **gulp-terser-js** | Minificación de JavaScript |
| **Montserrat** | Tipografía via Google Fonts |

---

## 📁 Estructura del Proyecto

```
Festival-musica/
└── FestivalMusica_inicio/
    ├── src/
    │   ├── scss/
    │   │   ├── app.scss          # Archivo principal SCSS
    │   │   ├── base/             # Reset, variables, mixins, tipografía
    │   │   └── layout/           # Estilos por sección (header, lineup, galería, etc.)
    │   ├── js/                   # JavaScript fuente
    │   └── img/                  # Imágenes originales (se optimizan con Gulp)
    ├── build/                    # 📦 Carpeta generada por Gulp (no editar)
    │   ├── css/app.css           # CSS compilado y minificado
    │   ├── js/app.js             # JS minificado
    │   └── img/                  # Imágenes optimizadas (WebP + AVIF)
    ├── video/                    # Video de fondo del hero (concierto.mp4)
    ├── index.html                # Página principal
    ├── gulpfile.js               # Configuración de tareas Gulp
    └── package.json              # Dependencias del proyecto
```

---

## 🚀 Cómo correr el proyecto localmente

### Requisitos previos

- [Node.js](https://nodejs.org/) v14 o superior
- npm (incluido con Node.js)

### Pasos

#### 1. Clona el repositorio

```bash
git clone https://github.com/lucciano12/Festival-musica.git
cd Festival-musica/FestivalMusica_inicio
```

#### 2. Instala las dependencias

```bash
npm install
```

#### 3. Inicia el entorno de desarrollo

```bash
npm run dev
```

Esto ejecuta Gulp con Browser Sync, compilará el SCSS automáticamente y abrirá el proyecto en tu navegador en:

```
http://localhost:3000
```

> ⚠️ El proyecto utiliza un **video de fondo** (`video/concierto.mp4`). Si no tienes el archivo de video, el hero se mostrará sin fondo de video pero el resto de la página funcionará correctamente.

---

## 📜 Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Inicia Gulp completo: SCSS, JS, imágenes + Browser Sync |
| `npm run css` | Compila solo el SCSS a CSS |
| `npm run js` | Minifica solo el JavaScript |
| `npm run sass` | Watch de Sass sin Gulp |

---

## ⚙️ Pipeline de Gulp

El `gulpfile.js` automatiza las siguientes tareas:

- **CSS**: Compila SCSS → PostCSS (Autoprefixer) → CSSNano (minificación) → Source Maps
- **JavaScript**: Minificación con Terser + Source Maps
- **Imágenes**: Compresión con imagemin + generación de versiones **WebP** y **AVIF**
- **Watch**: Observa cambios en `src/` y recompila automáticamente
- **Browser Sync**: Recarga el navegador en cada cambio

---

## 🎨 Diseño y Secciones

### Header
Navegación fija con links de ancla a las secciones principales: Line Up, Galería y Boletos.

### Hero — Video de fondo
Video en loop con overlay oscuro, título del festival y fecha del evento.

### Line Up
Dos días de festival con dos escenarios cada uno:

| Día | Escenario Carozzi | Escenario VTR |
|---|---|---|
| **Viernes 21** | Ye, Playboi Carti, Lil Durk, Don Toliver... | Future, Lil Uzi Vert, DaBaby, Gucci Mane... |
| **Sábado 22** | Kendrick Lamar, Lil Baby, Kodak Black... | A$AP Rocky, 21 Savage, Rick Ross... |

### Boletos

| Pase | Precio | Incluye |
|---|---|---|
| **1 Día** | $33.000 CLP | Acceso ambos escenarios + Comida y Bebida |
| **2 Días** | $90.000 CLP | Todo anterior + Camisa del evento + Acceso VIP |

---

## 💡 Motivación

Este proyecto nació del deseo de que Chile pueda algún día ser sede del **Rolling Loud**, uno de los festivales de música urbana más importantes del mundo. La idea fue recrear su identidad visual — tipografía bold, paleta oscura, energía del trap y el hip-hop — en una landing page funcional y optimizada.

---

## 👤 Autor

**Lucciano Prado**
- GitHub: [@lucciano12](https://github.com/lucciano12)
- LinkedIn: [lucciano-prado-estivill](https://www.linkedin.com/in/lucciano-prado-estivill-813973156/)
- Email: prado.lucciano@gmail.com

---

## 📄 Licencia

Este proyecto fue desarrollado por **Lucciano Prado**. El código fuente es de uso educativo y personal. El nombre y marca **Rolling Loud** pertenecen a sus respectivos propietarios.
