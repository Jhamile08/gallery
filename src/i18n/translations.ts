export type Lang = 'es' | 'en'

export type PlaceCopy = {
  title: string
  body: string
  entry: string
}

export type Dictionary = {
  htmlLang: string
  logo: string
  nav: { gallery: string; places: string; contact: string }
  languageToggle: string
  heroTitle: [string, string]
  galleryHeading: [string, string]
  galleryLabel: string
  buttons: { web: string; map: string; directions: string }
  places: { duque: PlaceCopy; policroma: PlaceCopy; museo: PlaceCopy }
  footer: {
    legalHeading: string
    legalLines: string[]
    siteHeading: string
    siteLinks: { home: string; gallery: string; places: string }
    socialHeading: string
    phone: string
    site: string
  }
}

export const translations: Record<Lang, Dictionary> = {
  es: {
    htmlLang: 'es',
    logo: '/IMG/Destinos_Alternativos_Logo.png',
    nav: { gallery: 'Galeria', places: 'Lugares', contact: 'Contacto' },
    languageToggle: '🌐Idioma',
    heroTitle: ['Zonas', 'Culturales'],
    galleryHeading: ['Galerias llenas de', 'historia'],
    galleryLabel: 'GALERIA',
    buttons: {
      web: 'Visitar web',
      map: 'Ver mapa',
      directions: 'Como llegar?',
    },
    places: {
      duque: {
        title: 'Galeria Duque Arango',
        body: 'Desde sus inicios, en 1986, Duque Arango ha sido un referente de difusión para artistas consagrados y emergentes, presentando propuestas modernas y contemporáneas, brindando al coleccionismo nacional e internacional y al público en general, una amplia asesoría de inversión clara y contundente. Hoy después de 37 años, estamos mas entusiasmados en brindar en nuestro espacio una convergencia de propuestas que den al espectador una visión clara del arte internacional',
        entry: 'Entrada gratis',
      },
      policroma: {
        title: 'Policroma Arte Contemporáneo',
        body: 'Policroma es un espacio de interacción, encuentro y colaboración, a través de la riqueza estética y conceptual de su plataforma de artistas. Desde 2018, la galería abrió sus puertas para difundir, promover y comercializar arte contemporáneo a través de artistas locales e internacionales, tanto representados, como en alianzas con otras galerías y espacios.',
        entry: 'Entrada gratis',
      },
      museo: {
        title: 'Museo Pedro Nel Gómez',
        body: 'La Casa Museo cuenta en total con trece salas de exhibición en las que se alternan, en exposiciones temporales, las 3200 obras que conforman la colección: óleos, acuarelas, pasteles, dibujos, esculturas, además de material complementario como libros, cartas, fotografías y documentos, que revelan nuevos datos sobre la vida y obra del artista, lo que le valió la declaratoria de Bien de Interés Cultural de la Ciudad, y sus murales, Bien de Interés de la Nación.',
        entry: 'Entrada gratis',
      },
    },
    footer: {
      legalHeading: 'LEGAL INFO',
      legalLines: [
        'Terminos y condiciones',
        'Politica y tratamiento de datos',
        'Destinos Alternativos S.A.S',
        'COPYRIGHT 2023',
      ],
      siteHeading: 'DESTINOS ALTERNATIVOS',
      siteLinks: { home: 'Inicio', gallery: 'Galeria', places: 'Lugares' },
      socialHeading: 'SOCIAL MEDIA',
      phone: 'Linea telefonica: 3053524208',
      site: 'destinosaltenativos.com',
    },
  },
  en: {
    htmlLang: 'en',
    logo: '/IMG/Alternative_Destinations_Logo_White.png',
    nav: { gallery: 'Gallery', places: 'Places', contact: 'Contact' },
    languageToggle: '🌐Language',
    heroTitle: ['Cultural', 'Zones'],
    galleryHeading: ['Galleries full of', 'history'],
    galleryLabel: 'GALLERY',
    buttons: {
      web: 'Visit website',
      map: 'Show map',
      directions: 'How to get?',
    },
    places: {
      duque: {
        title: 'Gallery Duque Arango',
        body: 'Since its inception in 1986, Duque Arango has been a reference for dissemination for established and emerging artists, presenting modern and contemporary proposals, providing national and international collecting and the general public with extensive clear and forceful investment advice. Today, after 37 years, we are more enthusiastic about offering in our space a convergence of proposals that give the viewer a clear vision of international art.',
        entry: 'Charge entrance',
      },
      policroma: {
        title: 'Policroma Arte Contemporáneo',
        body: 'Policroma is a space for interaction, encounter and collaboration, through the aesthetic and conceptual richness of its artist platform. Since 2018, the gallery opened its doors to disseminate, promote and market contemporary art through local and international artists, both represented and in alliances with other galleries and spaces.',
        entry: 'Free pass',
      },
      museo: {
        title: 'Museo Pedro Nel Gómez',
        body: 'The House Museum has a total of thirteen exhibition rooms in which the 3,200 works that make up the collection alternate in temporary exhibitions: oil paintings, watercolors, pastels, drawings, sculptures, as well as complementary material such as books, letters, photographs and documents, which reveal new data about the life and work of the artist, which earned him the declaration of Asset of Cultural Interest of the City, and his murals, Asset of National Interest.',
        entry: 'Free pass',
      },
    },
    footer: {
      legalHeading: 'LEGAL INFO',
      legalLines: [
        'Terms and conditions',
        'Policy and data processing',
        'Alternative Destinations S.A.S',
        'COPYRIGHT 2023',
      ],
      siteHeading: 'ALTERNATIVE DESTINATIONS',
      siteLinks: { home: 'Home', gallery: 'Gallery', places: 'Places' },
      socialHeading: 'SOCIAL MEDIA',
      phone: 'Phone line: 3053524208',
      site: 'destinosaltenativos.com',
    },
  },
}
