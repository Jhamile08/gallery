import { YStack } from 'tamagui'
import { Hero } from './components/Hero'
import { Gallery } from './components/Gallery'
import { PlaceSection } from './components/PlaceSection'
import { Footer } from './components/Footer'
import { places } from './data/places'

export default function App() {
  return (
    <YStack>
      <Hero />
      <Gallery />
      <YStack
        render="section"
        id="places"
        backgroundColor="$galleryBg"
        alignItems="center"
        gap={48}
        paddingVertical={64}
        paddingHorizontal={24}
        $compact={{ gap: 32, paddingVertical: 36, paddingHorizontal: 16 }}
      >
        <YStack width="100%" maxWidth={1400} gap={48} $compact={{ gap: 32 }}>
          {places.map((place) => (
            <PlaceSection key={place.key} place={place} />
          ))}
        </YStack>
      </YStack>
      <Footer />
    </YStack>
  )
}
