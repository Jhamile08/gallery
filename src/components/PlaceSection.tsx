import { H2, H3, Paragraph, XStack, YStack } from 'tamagui'
import { useLanguage } from '../i18n/LanguageContext'
import type { Place } from '../data/places'
import { OutlineLink } from './ui'
import { useRevealOnEnter } from './useRevealOnEnter'
import './places.css'

export function PlaceSection({ place }: { place: Place }) {
  const { t } = useLanguage()
  const copy = t.places[place.key]
  const revealRef = useRevealOnEnter<HTMLDivElement>()

  return (
    <div className="place-reveal" ref={revealRef}>
      <XStack
        className="place-card"
        flexDirection={place.imageFirst ? 'row-reverse' : 'row'}
        $compact={{ flexDirection: 'column' }}
        backgroundColor={place.panelColor}
        borderWidth={1}
        borderColor="rgba(255, 255, 255, 0.14)"
        borderRadius={20}
        overflow="hidden"
        boxShadow="0 22px 48px -18px rgba(0, 0, 0, 0.75)"
        hoverStyle={{
          y: -8,
          borderColor: 'rgba(255, 255, 255, 0.34)',
          boxShadow: '0 34px 72px -18px rgba(0, 0, 0, 0.9)',
        }}
      >
        <div className="place-image">
          <div
            className="place-image-zoom"
            style={{ backgroundImage: `url("${place.image}")` }}
            role="img"
            aria-label={copy.title}
          />
        </div>

        <YStack
          width="40%"
          justifyContent="center"
          paddingVertical={30}
          $compact={{ width: '100%' }}
        >
          <H2
            fontFamily="$heading"
            fontSize={30}
            lineHeight={38}
            color="$textLight"
            textAlign="center"
            marginVertical={20}
          >
            {copy.title}
          </H2>

          <Paragraph
            fontFamily="$body"
            fontSize={22}
            lineHeight={30}
            color="$textLight"
            textAlign="center"
            paddingHorizontal={10}
            $compact={{ fontSize: 18, lineHeight: 26 }}
          >
            {copy.body}
          </Paragraph>

          <XStack
            justifyContent="center"
            flexWrap="wrap"
            gap={20}
            marginTop={20}
            paddingHorizontal={10}
          >
            <OutlineLink href={place.links.web} target="_blank" rel="noreferrer">
              {t.buttons.web}
            </OutlineLink>
            <OutlineLink href={place.links.map} target="_blank" rel="noreferrer">
              {t.buttons.map}
            </OutlineLink>
            <OutlineLink
              href={place.links.directions}
              target="_blank"
              rel="noreferrer"
            >
              {t.buttons.directions}
            </OutlineLink>
          </XStack>

          <H3
            fontFamily="$body"
            fontSize={25}
            lineHeight={32}
            color="$textLight"
            textAlign="center"
            marginTop={30}
            textDecorationLine="underline"
          >
            {copy.entry}
          </H3>
        </YStack>
      </XStack>
    </div>
  )
}
