import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { TamaguiProvider } from 'tamagui'
import tamaguiConfig from './tamagui.config'
import { LanguageProvider } from './i18n/LanguageContext'
import App from './App'
import './styles/global.css'

const container = document.getElementById('root')
if (!container) throw new Error('No se encontro el elemento #root')

createRoot(container).render(
  <StrictMode>
    <TamaguiProvider config={tamaguiConfig} defaultTheme="dark">
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </TamaguiProvider>
  </StrictMode>
)
