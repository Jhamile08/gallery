import type { Dictionary } from '../i18n/translations'

export type PlaceKey = keyof Dictionary['places']

export type Place = {
  key: PlaceKey
  image: string
  /** Imagen a la derecha (true) o a la izquierda (false) del panel de texto. */
  imageFirst: boolean
  panelColor: '$panelDark' | '$panelMid' | '$panelLight'
  links: { web: string; map: string; directions: string }
}

export const places: Place[] = [
  {
    key: 'duque',
    image: '/IMG/duque-section.webp',
    imageFirst: true,
    panelColor: '$panelDark',
    links: {
      web: 'https://galeriaduquearango.com/galeria/',
      map: 'https://maps.app.goo.gl/DntqMvCzj9m3jALt8',
      directions:
        'https://moovitapp.com/index/es-419/transporte_p%C3%BAblico-Galer%C3%ADa_Duque_Arango-Medellin-site_19377690-1642',
    },
  },
  {
    key: 'policroma',
    image: '/IMG/place6.jpg',
    imageFirst: false,
    panelColor: '$panelMid',
    links: {
      web: 'https://www.policroma.co/',
      map: 'https://maps.app.goo.gl/b4QjHUokRAP9ZUUJ9',
      directions:
        'https://moovitapp.com/medellin-1642/poi/Policroma%20Arte%20Contempor%C3%A1neo/t/es-419?metroSeoName=Medellin&customerId=4908&ref=1&poiType=efsite',
    },
  },
  {
    key: 'museo',
    image: '/IMG/place5.jpg',
    imageFirst: true,
    panelColor: '$panelLight',
    links: {
      web: 'https://www.instagram.com/casamuseopedronel/?hl=es',
      map: 'https://maps.app.goo.gl/PeNHV3LUByasJecu5',
      directions:
        'https://moovitapp.com/index/es-419/transporte_p%C3%BAblico-Casa_Museo_Pedro_Nel_G%C3%B3mez-Medellin-site_19378445-1642',
    },
  },
]
