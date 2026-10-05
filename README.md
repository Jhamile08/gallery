# Zonas Culturales

Sitio de galerías y museos de Medellín, migrado de HTML/CSS estático a **React 19 + TypeScript + Vite 8 + Tamagui 2**.

## Requisitos

Node.js 20 o superior.

## Uso

```sh
npm install
npm run dev        # servidor de desarrollo
npm run build      # typecheck + build de produccion en dist/
npm run preview    # sirve dist/
npm run typecheck  # solo tsc
```

## Estructura

```
index.html                  entrada de Vite
public/IMG/                 imagenes (servidas en /IMG/...)
src/
  main.tsx                  TamaguiProvider + LanguageProvider
  App.tsx                   composicion de secciones
  tamagui.config.ts         tokens de color, fuentes y temas
  components/
    Header.tsx              logo, menu y boton de idioma
    Hero.tsx                portada a pantalla completa
    Gallery.tsx             collage de obras (CSS Grid)
    gallery.css             grilla del collage
    PlaceSection.tsx        tarjeta reutilizable imagen + texto
    places.css              borde, sombra, hover y aparicion de las tarjetas
    useRevealOnEnter.ts     revela un elemento al entrar en pantalla
    useOrbitOnEnter.ts      orbita del collage al entrar en pantalla
    Footer.tsx              pie de pagina en tres columnas
    ui.tsx                  NavLink / OutlineLink / FooterLink
  data/
    galleryItems.ts         obras del collage con su celda de grilla
    places.ts               lugares, imagen, color de panel y enlaces
  i18n/
    translations.ts         textos en español e ingles
    LanguageContext.tsx     idioma activo + persistencia
  styles/global.css         reset e imagenes de fondo
```

## Decisiones

- **Tamagui 2** cubre layout (`XStack`/`YStack`), tipografía (`H1`–`H3`, `Paragraph`)
  y los tokens de color de la paleta original. Se usa la config `v5` con
  `onlyAllowShorthands: false`, para poder escribir props en forma larga
  (`alignItems`) y no solo los atajos (`ai`).
- **Breakpoint**: `$compact` (máx. 800 px) es un media query propio declarado en
  `tamagui.config.ts`, para conservar exactamente el corte del CSS original.
- Tamagui 2 es web-first: ya no depende de `react-native` ni de
  `react-native-web`. El prop para elegir el elemento HTML es `render`
  (`render="header"`), no `tag`, y los atributos de accesibilidad van como
  `aria-*`, no como `accessibility*`.
- **Animacion de entrada**: al entrar la galeria en pantalla, las obras describen
  una vuelta completa de orbita y aterrizan en su sitio
  (`useOrbitOnEnter.ts` + `@keyframes collage-orbit`). El aterrizaje es exacto
  porque una vuelta entera deja la matriz de transformacion en la identidad, no
  por fijar un estado final. Se desactiva bajo 800 px y con
  `prefers-reduced-motion`.
- **Lugares en tarjetas**: cada lugar es una card con borde, radio, sombra y
  hover (elevacion + sombra mas marcada + zoom de la foto), y aparece al entrar
  en pantalla (`useRevealOnEnter.ts` + `places.css`). La aparicion va en el
  contenedor exterior y el hover en la tarjeta, para que no se peleen por
  `transform`. El parallax (`background-attachment: fixed`) se quito: un
  `transform` en la tarjeta crea un bloque contenedor y lo anula, y dentro de
  una card ese efecto ya no aporta; lo sustituye el zoom al pasar el raton.
- **CSS plano** se usa solo donde Tamagui no llega: el collage con CSS Grid, las
  imágenes de fondo y el efecto parallax (`background-attachment: fixed`).
- **Idioma**: antes eran dos HTML duplicados (`index.html` / `culturaEnglish.html`).
  Ahora hay un solo árbol de componentes y un diccionario en `src/i18n`; el
  idioma se guarda en `localStorage` y se detecta del navegador la primera vez.
