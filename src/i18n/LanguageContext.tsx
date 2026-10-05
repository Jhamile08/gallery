import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { translations, type Dictionary, type Lang } from './translations'

type LanguageValue = {
  lang: Lang
  t: Dictionary
  setLang: (lang: Lang) => void
  toggleLang: () => void
}

const STORAGE_KEY = 'zonas-culturales:lang'

const LanguageContext = createContext<LanguageValue | null>(null)

function initialLang(): Lang {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'es' || stored === 'en') return stored
  } catch {
    // localStorage puede no estar disponible (modo privado); seguimos con el default
  }
  return navigator.language?.startsWith('en') ? 'en' : 'es'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang)

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // sin persistencia, el cambio sigue aplicando en esta sesion
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = translations[lang].htmlLang
  }, [lang])

  const value = useMemo<LanguageValue>(
    () => ({
      lang,
      t: translations[lang],
      setLang,
      toggleLang: () => setLang(lang === 'es' ? 'en' : 'es'),
    }),
    [lang, setLang]
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const value = useContext(LanguageContext)
  if (!value) {
    throw new Error('useLanguage debe usarse dentro de <LanguageProvider>')
  }
  return value
}
