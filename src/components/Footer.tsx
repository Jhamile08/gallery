import type { ReactNode } from 'react'
import { H2, Paragraph, Separator, XStack, YStack } from 'tamagui'
import { useLanguage } from '../i18n/LanguageContext'
import { FooterLink } from './ui'

function Column({ children }: { children: ReactNode }) {
  return (
    <YStack flex={1} minWidth={220} maxWidth={360}>
      <Separator borderColor="$textLight" marginTop={50} />
      {children}
    </YStack>
  )
}

function ColumnTitle({ children }: { children: ReactNode }) {
  return (
    <H2
      fontFamily="$body"
      fontSize={25}
      lineHeight={32}
      fontWeight="700"
      color="$textSmoke"
      marginVertical={20}
    >
      {children}
    </H2>
  )
}

export function Footer() {
  const { t } = useLanguage()
  const f = t.footer

  return (
    <YStack render="footer" id="footer" backgroundColor="$panelDark">
      <XStack
        justifyContent="space-around"
        padding={20}
        gap="$6"
        flexWrap="wrap"
        $compact={{ flexDirection: 'column' }}
      >
        <Column>
          <ColumnTitle>{f.legalHeading}</ColumnTitle>
          {f.legalLines.map((line) => (
            <Paragraph
              key={line}
              fontFamily="$body"
              fontSize={22}
              lineHeight={30}
              color="$textMuted"
              marginVertical={8}
            >
              {line}
            </Paragraph>
          ))}
        </Column>

        <Column>
          <ColumnTitle>{f.siteHeading}</ColumnTitle>
          <FooterLink href="#home">{f.siteLinks.home}</FooterLink>
          <FooterLink href="#gallery">{f.siteLinks.gallery}</FooterLink>
          <FooterLink href="#places">{f.siteLinks.places}</FooterLink>
        </Column>

        <Column>
          <ColumnTitle>{f.socialHeading}</ColumnTitle>
          <Paragraph
            fontFamily="$body"
            fontSize={22}
            lineHeight={30}
            color="$textMuted"
            marginVertical={8}
          >
            {f.phone}
          </Paragraph>
          <FooterLink href="https://destinosaltenativos.com" target="_blank" rel="noreferrer">
            {f.site}
          </FooterLink>
        </Column>
      </XStack>
    </YStack>
  )
}
