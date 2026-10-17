# Alexander753 Portafolio

Web estática en español, adaptable a celulares. No necesita npm, compilación ni base de datos.

## Vista rápida
Abre `index.html` o ejecuta `python -m http.server 8080` dentro de esta carpeta y visita http://localhost:8080.

## Editar tu información
1. Abre `config.js`: cambia nombre, Discord, biografía, comienzo y proyectos.
2. `discordUsuario` ya contiene AlexGamer753. Para abrir tu perfil directamente, reemplaza `discordUrl` por `https://discord.com/users/TU_ID_NUMERICO` o usa una invitación `https://discord.gg/TU_INVITACION`. Un nombre de usuario no permite generar ese enlace de perfil.
3. Los proyectos actuales son ejemplos visuales, no trabajos realizados. Sustitúyelos por los tuyos y cambia `ejemplo: true` a `false`.
4. Cada proyecto admite `url` e `imagen`. Crea una carpeta `assets` para imágenes y usa, por ejemplo, `imagen: "assets/mi-web.webp"`.
5. Edita `index.html` para cambiar servicios o textos adicionales. Colores, tipografías y diseño están en `styles.css`. Si cambias la marca, actualiza también el título, descripción, cabecera y pie en index.html.

## Subir a GitHub Pages
1. Crea un repositorio en GitHub. Si lo llamas `TUUSUARIO.github.io`, será tu web principal; cualquier otro nombre también sirve.
2. Sube el contenido de esta carpeta a la raíz del repositorio: index.html, styles.css, config.js, app.js y .nojekyll. No subas el ZIP.
3. En Settings → Pages selecciona Deploy from a branch, rama main, carpeta /(root), y guarda.
4. GitHub mostrará tu dirección cuando termine de publicar. Para un repositorio normal será https://TUUSUARIO.github.io/NOMBRE-REPOSITORIO/.
5. Para actualizar, edita y guarda los archivos en GitHub; Pages volverá a publicar.

## Incluye
Navegación por secciones, barra de desplazamiento e indicador de avance, servicios, filtros de proyectos, historia, habilidades, enlace a Discord y botón para copiar el usuario. La copia requiere un navegador compatible y contexto seguro (HTTPS o localhost); si no está disponible se muestra el usuario para copiarlo manualmente.

Las fuentes de Google son opcionales y tienen alternativas locales. No se incluyen estadísticas, reseñas ni experiencia inventada.

## Referencias con Ver más
Cada tarjeta abre referencia.html?proyecto=IDENTIFICADOR. Edita sus detalles en config.js: contexto (introducción), puntos (lista de funciones) y extra (párrafo adicional). Mantén detalle único en cada referencia. InfinixMc es el proyecto personal; las demás tarjetas son referencias de servicio.

## Edición privada
El editor se entrega por separado y no se incluye en el sitio público. Abre editor.html desde la carpeta editor-privado en tu computadora. Descarga config.js y súbelo al repositorio para publicar cambios. No subas editor-privado a GitHub Pages. Solo quienes tengan acceso de escritura a tu repositorio podrán publicar modificaciones.
