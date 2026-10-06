export type GalleryItem = {
  id: string
  src: string
  alt: string
  /** Posicion en el collage: ver GALLERY_COLUMNS / GALLERY_ROWS. */
  column: string
  row: string
}

export const GALLERY_COLUMNS = 19
export const GALLERY_ROWS = 16

export const galleryItems: GalleryItem[] = [
  {
    id: 'duque-1',
    src: 'https://res.cloudinary.com/dmjjvcznx/image/upload/v1791226341/duque-1-Matorral_wzne3q.webp',
    alt: 'Matorral — Galeria Duque Arango',
    column: '2 / 4',
    row: '1 / 3',
  },
  {
    id: 'duque-2',
    src: 'https://res.cloudinary.com/dmjjvcznx/image/upload/v1791226342/duque-ExposisionVolar_icsgys.webp',
    alt: 'Exposicion Volar — Galeria Duque Arango',
    column: '5 / 9',
    row: '1 / 4',
  },
  {
    id: 'duque-3',
    src: 'https://res.cloudinary.com/dmjjvcznx/image/upload/v1791226341/duque-3-volar_qizu0v.jpg',
    alt: 'Volar — Galeria Duque Arango',
    column: '3 / 5',
    row: '4 / 6',
  },
  {
    id: 'duque-4',
    src: 'https://res.cloudinary.com/dmjjvcznx/image/upload/v1791226341/duque-5-arteModerno_qmdzl0.png',
    alt: 'Arte moderno — Galeria Duque Arango',
    column: '6 / 8',
    row: '5 / 11',
  },
  {
    id: 'duque-5',
    src: 'https://res.cloudinary.com/dmjjvcznx/image/upload/v1791226341/duque-4-lasRepresentaciones_acnakx.webp',
    alt: 'Las representaciones — Galeria Duque Arango',
    column: '2 / 6',
    row: '7 / 11',
  },
  {
    id: 'policroma-1',
    src: 'https://res.cloudinary.com/dmjjvcznx/image/upload/v1791226345/gallery-1-contarVerdades_rpxapa.jpg',
    alt: 'Contar verdades — Policroma',
    column: '9 / 11',
    row: '2 / 4',
  },
  {
    id: 'policroma-2',
    src: 'https://res.cloudinary.com/dmjjvcznx/image/upload/v1791226342/gallery2-alRevisar_uz6vn0.jpg',
    alt: 'Al revisar — Policroma',
    column: '11 / 13',
    row: '1 / 3',
  },
  {
    id: 'policroma-3',
    src: 'https://res.cloudinary.com/dmjjvcznx/image/upload/v1791226343/gallery3-losClichets_srnox0.jpg',
    alt: 'Los clichés — Policroma',
    column: '14 / 17',
    row: '2 / 4',
  },
  {
    id: 'policroma-4',
    src: 'https://res.cloudinary.com/dmjjvcznx/image/upload/v1791226343/gallery4-elReferente_weughc.jpg',
    alt: 'El referente — Policroma',
    column: '17 / 19',
    row: '2 / 5',
  },
  {
    id: 'policroma-5',
    src: 'https://res.cloudinary.com/dmjjvcznx/image/upload/v1791226343/gallery5-Bochicaneando_azaqf8.jpg',
    alt: 'En el closet — Policroma',
    column: '9 / 11',
    row: '5 / 9',
  },
  {
    id: 'policroma-6',
    src: 'https://res.cloudinary.com/dmjjvcznx/image/upload/v1791226343/gallery6-enElCloset_ui6dxh.jpg',
    alt: 'Bochicaneando — Policroma',
    column: '11 / 15',
    row: '4 / 8',
  },
  {
    id: 'policroma-7',
    src: 'https://res.cloudinary.com/dmjjvcznx/image/upload/v1791226343/gallery7-vivirEnBogota_rw0dxv.jpg',
    alt: 'Vivir en Bogotá — Policroma',
    column: '15 / 19',
    row: '5 / 8',
  },
  {
    id: 'policroma-9',
    src: 'https://res.cloudinary.com/dmjjvcznx/image/upload/v1791226344/gallery9-unaColectiva_gnxa8s.jpg',
    alt: 'Una colectiva — Policroma',
    column: '12 / 14',
    row: '10 / 13',
  },
  {
    id: 'policroma-10',
    src: 'https://res.cloudinary.com/dmjjvcznx/image/upload/v1791226344/gallery10-enColombia_wip3mp.jpg',
    alt: 'En Colombia — Policroma',
    column: '14 / 16',
    row: '9 / 11',
  },
  {
    id: 'policroma-11',
    src: 'https://res.cloudinary.com/dmjjvcznx/image/upload/v1791226344/gallery11-contarVerdades_ciqgxu.jpg',
    alt: 'Contar verdades II — Policroma',
    column: '17 / 19',
    row: '10 / 12',
  },
  {
    id: 'policroma-12',
    src: 'https://res.cloudinary.com/dmjjvcznx/image/upload/v1791226344/gallery12-aficheRecreado_wi6egv.jpg',
    alt: 'Afiche recreado — Policroma',
    column: '1 / 4',
    row: '11 / 16',
  },
  {
    id: 'policroma-13',
    src: 'https://res.cloudinary.com/dmjjvcznx/image/upload/v1791226344/gallery13-antesDeMaluma_x2wbcn.jpg',
    alt: 'Antes de Maluma — Policroma',
    column: '4 / 6',
    row: '12 / 16',
  },
  {
    id: 'policroma-14',
    src: 'https://res.cloudinary.com/dmjjvcznx/image/upload/v1791226344/gallery14-imagen_xxifak.jpg',
    alt: 'Imagen — Policroma',
    column: '9 / 12',
    row: '11 / 16',
  },
  {
    id: 'policroma-15',
    src: 'https://res.cloudinary.com/dmjjvcznx/image/upload/v1791226344/gallery15-laK_ykhsvz.jpg',
    alt: 'La K — Policroma',
    column: '7 / 12',
    row: '13 / 16',
  },
  {
    id: 'policroma-16',
    src: 'https://res.cloudinary.com/dmjjvcznx/image/upload/v1791226344/gallery16-estaNoEs_o5ncps.jpg',
    alt: 'Esta no es — Policroma',
    column: '15 / 18',
    row: '12 / 16',
  },
  {
    id: 'policroma-17',
    src: 'https://res.cloudinary.com/dmjjvcznx/image/upload/v1791226345/gallery17-hice_tfxtkl.jpg',
    alt: 'Hice — Policroma',
    column: '6 / 9',
    row: '10 / 12',
  },
  {
    id: 'policroma-18',
    src: 'https://res.cloudinary.com/dmjjvcznx/image/upload/v1791226345/gallery18-cali_xtoqob.jpg',
    alt: 'Cali — Policroma',
    column: '12 / 16',
    row: '13 / 16',
  },
  {
    id: 'policroma-19',
    src: 'https://res.cloudinary.com/dmjjvcznx/image/upload/v1791226347/policroma-19_os7pi6.jpg',
    alt: 'Obra 19 — Policroma',
    column: '17 / 20',
    row: '6 / 9',
  },
]

/** Celda del rotulo "GALERIA" dentro del collage. */
export const galleryLabelCell = { column: '10 / 11', row: '10 / 11' }
