import { animationsCSS } from '@tamagui/config/v5-css'
import { defaultConfig } from '@tamagui/config/v5'
import { createFont, createTamagui } from 'tamagui'

/** Escala tipografica compartida por las fuentes del sitio. */
const sizes = {
  1: 11,
  2: 12,
  3: 13,
  4: 14,
  true: 14,
  5: 16,
  6: 18,
  7: 20,
  8: 23,
  9: 25,
  10: 28,
  11: 30,
  12: 35,
  13: 40,
  14: 48,
  15: 60,
  16: 72,
}

const scale = (fn: (px: number) => number) =>
  Object.fromEntries(
    Object.entries(sizes).map(([token, px]) => [token, fn(px)])
  ) as typeof sizes

/** Titulares: la display font original del sitio. */
const headingFont = createFont({
  family: '"Fredericka the Great", Georgia, serif',
  size: sizes,
  lineHeight: scale((px) => Math.round(px * 1.15)),
  weight: { 4: '400' },
  letterSpacing: { 4: 0 },
})

/** Cuerpo de texto: sans del sistema, como en el CSS original. */
const bodyFont = createFont({
  family:
    'system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  size: sizes,
  lineHeight: scale((px) => Math.round(px * 1.4)),
  weight: { 4: '400', 7: '700', 8: '800' },
  letterSpacing: { 4: 0 },
})

export const tamaguiConfig = createTamagui({
  ...defaultConfig,
  animations: animationsCSS,
  fonts: {
    heading: headingFont,
    body: bodyFont,
  },
  media: {
    ...defaultConfig.media,
    /** Corte unico del sitio original (CSS: @media (max-width: 800px)). */
    compact: { maxWidth: 800 },
  },
  tokens: {
    ...defaultConfig.tokens,
    // En la config v5 los colores viven en los temas, no en los tokens:
    // declaramos nuestro propio grupo para la paleta del sitio.
    color: {
      // Paleta heredada de CSS/styleCultura.css
      galleryBg: '#2e2a29',
      panelDark: '#1e1b1b',
      panelMid: '#342f2f',
      panelLight: '#423d3d',
      textLight: '#f0f8ff', // aliceblue
      textSmoke: '#f5f5f5', // whitesmoke
      textMuted: '#999690',
      textMutedHover: '#d6d3cd',
    },
  },
  settings: {
    ...defaultConfig.settings,
    // Permite props en forma larga (alignItems) ademas de los atajos (ai).
    onlyAllowShorthands: false,
  },
})

export type AppConfig = typeof tamaguiConfig

declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}
}

export default tamaguiConfig
