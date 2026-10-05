import { Anchor, Text, styled } from 'tamagui'

/** Enlace del menu principal. */
export const NavLink = styled(Anchor, {
  name: 'NavLink',
  color: '$textSmoke',
  fontFamily: '$body',
  fontSize: 20,
  fontWeight: '800',
  textDecorationLine: 'none',
  cursor: 'pointer',
  hoverStyle: { color: '$textMutedHover' },
})

/**
 * Mismo aspecto que NavLink, pero sobre Text: asi el conmutador de idioma
 * se renderiza como <button> real y no hereda role="link" de Anchor.
 */
export const NavButton = styled(Text, {
  name: 'NavButton',
  color: '$textSmoke',
  fontFamily: '$body',
  fontSize: 20,
  fontWeight: '800',
  cursor: 'pointer',
  backgroundColor: 'transparent',
  borderWidth: 0,
  padding: 0,
  hoverStyle: { color: '$textMutedHover' },
})

/** Boton con borde fino, como los ".button" del CSS original. */
export const OutlineLink = styled(Anchor, {
  name: 'OutlineLink',
  color: 'white',
  fontFamily: '$body',
  fontSize: 16,
  textAlign: 'center',
  textDecorationLine: 'none',
  borderWidth: 1,
  borderColor: 'white',
  padding: 8,
  cursor: 'pointer',
  hoverStyle: { backgroundColor: 'white', color: '$panelDark' },
  pressStyle: { opacity: 0.7 },
})

/** Enlace del pie de pagina. */
export const FooterLink = styled(Anchor, {
  name: 'FooterLink',
  color: '$textMuted',
  fontFamily: '$body',
  fontSize: 22,
  marginVertical: 8,
  textDecorationLine: 'none',
  cursor: 'pointer',
  hoverStyle: { color: '$textMutedHover' },
})
