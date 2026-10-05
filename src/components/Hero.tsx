import { H1, YStack } from 'tamagui'
import { useLanguage } from '../i18n/LanguageContext'
import { Header } from './Header'

export function Hero() {
  const { t } = useLanguage()
  const [first, second] = t.heroTitle

  return (
    <YStack render="section" id="home" className="hero-bg">
      <Header />
      <H1
        fontFamily="$heading"
        fontSize={60}
        lineHeight={70}
        color="white"
        marginTop={60}
        marginLeft={180}
        $compact={{ marginLeft: 20, fontSize: 44, lineHeight: 52 }}
      >
        {first}
        <br />
        {second}
      </H1>
    </YStack>
  )
}
