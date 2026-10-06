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
    image: 'https://res.cloudinary.com/dmjjvcznx/image/upload/v1791226342/duque-section_juic0t.webp',
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
    image: 'https://res.cloudinary.com/dmjjvcznx/image/upload/v1791226347/place7_m1lqdh.jpg',
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
    image: 'https://res.cloudinary.com/dmjjvcznx/image/upload/v1791226348/place5_mdah8e.jpg',
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
