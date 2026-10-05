import { XStack } from 'tamagui'
import { useLanguage } from '../i18n/LanguageContext'
import { NavButton, NavLink } from './ui'

export function Header() {
  const { t, lang, toggleLang } = useLanguage()

  return (
    <XStack
      render="header"
      height={100}
      alignItems="center"
      justifyContent="space-around"
      gap="$4"
      paddingHorizontal="$4"
      $compact={{ justifyContent: 'space-between', paddingHorizontal: '$3' }}
    >
      <a href="#home">
        <img className="site-logo" src={t.logo} alt="Destinos Alternativos" />
      </a>

      <XStack render="nav" gap={20} alignItems="center" $compact={{ display: 'none' }}>
        <NavLink href="#gallery">{t.nav.gallery}</NavLink>
        <NavLink href="#places">{t.nav.places}</NavLink>
        <NavLink href="#footer">{t.nav.contact}</NavLink>
      </XStack>

      <NavButton
        render="button"
        onPress={toggleLang}
        aria-label={
          lang === 'es' ? 'Switch to English' : 'Cambiar a español'
        }
      >
        {t.languageToggle}
      </NavButton>
    </XStack>
  )
}
