import { H2, Paragraph, YStack } from 'tamagui'
import { useLanguage } from '../i18n/LanguageContext'
import { galleryItems, galleryLabelCell } from '../data/galleryItems'
import { useOrbitOnEnter } from './useOrbitOnEnter'
import './gallery.css'

export function Gallery() {
  const { t } = useLanguage()
  const [first, second] = t.galleryHeading
  const collageRef = useOrbitOnEnter<HTMLDivElement>()

  return (
    <YStack
      render="section"
      id="gallery"
      backgroundColor="$galleryBg"
      alignItems="center"
      padding={20}
      paddingBottom={40}
      // recorta las piezas que se salen de cuadro durante la orbita
      overflow="hidden"
    >
      <H2
        fontFamily="$heading"
        fontSize={40}
        lineHeight={48}
        color="$textLight"
        textAlign="center"
        paddingTop={30}
        paddingBottom={40}
        $compact={{ fontSize: 28, lineHeight: 34 }}
      >
        {first}
        <br />
        {second}
      </H2>

      <div className="collage" ref={collageRef}>
        {galleryItems.map((item) => (
          <img
            key={item.id}
            className="collage-item"
            src={item.src}
            alt={item.alt}
            loading="lazy"
            decoding="async"
            style={{ gridColumn: item.column, gridRow: item.row }}
          />
        ))}

        <div
          className="collage-label"
          style={{
            gridColumn: galleryLabelCell.column,
            gridRow: galleryLabelCell.row,
          }}
        >
          <Paragraph
            fontFamily="$body"
            color="white"
            fontSize={20}
            lineHeight={24}
            textAlign="center"
            borderWidth={2}
            borderColor="white"
            padding={6}
            $compact={{ fontSize: 15 }}
          >
            {t.galleryLabel}
          </Paragraph>
        </div>
      </div>
    </YStack>
  )
}
