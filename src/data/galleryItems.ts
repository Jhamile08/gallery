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
    src: '/IMG/duque-1-Matorral.webp',
    alt: 'Matorral — Galeria Duque Arango',
    column: '2 / 4',
    row: '1 / 3',
  },
  {
    id: 'duque-2',
    src: '/IMG/duque-ExposisionVolar.webp',
    alt: 'Exposicion Volar — Galeria Duque Arango',
    column: '5 / 9',
    row: '1 / 4',
  },
  {
    id: 'duque-3',
    src: '/IMG/duque-3-volar.jpg',
    alt: 'Volar — Galeria Duque Arango',
    column: '3 / 5',
    row: '4 / 6',
  },
  {
    id: 'duque-4',
    src: '/IMG/duque-5-arteModerno.png',
    alt: 'Arte moderno — Galeria Duque Arango',
    column: '6 / 8',
    row: '5 / 11',
  },
  {
    id: 'duque-5',
    src: '/IMG/duque-4-lasRepresentaciones.webp',
    alt: 'Las representaciones — Galeria Duque Arango',
    column: '2 / 6',
    row: '7 / 11',
  },
  {
    id: 'policroma-1',
    src: '/IMG/gallery-1-contarVerdades.jpg',
    alt: 'Contar verdades — Policroma',
    column: '9 / 11',
    row: '2 / 4',
  },
  {
    id: 'policroma-2',
    src: '/IMG/gallery2-alRevisar.jpg',
    alt: 'Al revisar — Policroma',
    column: '11 / 13',
    row: '1 / 3',
  },
  {
    id: 'policroma-3',
    src: '/IMG/gallery3-losClichets.jpg',
    alt: 'Los clichés — Policroma',
    column: '14 / 17',
    row: '2 / 4',
  },
  {
    id: 'policroma-4',
    src: '/IMG/gallery4-elReferente.jpg',
    alt: 'El referente — Policroma',
    column: '17 / 19',
    row: '2 / 5',
  },
  {
    id: 'policroma-5',
    src: '/IMG/gallery6-enElCloset.jpg',
    alt: 'En el closet — Policroma',
    column: '9 / 11',
    row: '5 / 9',
  },
  {
    id: 'policroma-6',
    src: '/IMG/gallery5-Bochicaneando.jpg',
    alt: 'Bochicaneando — Policroma',
    column: '11 / 15',
    row: '4 / 8',
  },
  {
    id: 'policroma-7',
    src: '/IMG/gallery7-vivirEnBogota.jpg',
    alt: 'Vivir en Bogotá — Policroma',
    column: '15 / 19',
    row: '5 / 8',
  },
  {
    id: 'policroma-9',
    src: '/IMG/gallery9-unaColectiva.jpg',
    alt: 'Una colectiva — Policroma',
    column: '12 / 14',
    row: '10 / 13',
  },
  {
    id: 'policroma-10',
    src: '/IMG/gallery10-enColombia.jpg',
    alt: 'En Colombia — Policroma',
    column: '14 / 16',
    row: '9 / 11',
  },
  {
    id: 'policroma-11',
    src: '/IMG/gallery11-contarVerdades.jpg',
    alt: 'Contar verdades II — Policroma',
    column: '17 / 19',
    row: '10 / 12',
  },
  {
    id: 'policroma-12',
    src: '/IMG/gallery12-aficheRecreado.jpg',
    alt: 'Afiche recreado — Policroma',
    column: '1 / 4',
    row: '11 / 16',
  },
  {
    id: 'policroma-13',
    src: '/IMG/gallery13-antesDeMaluma.jpg',
    alt: 'Antes de Maluma — Policroma',
    column: '4 / 6',
    row: '12 / 16',
  },
  {
    id: 'policroma-14',
    src: '/IMG/gallery14-imagen.jpg',
    alt: 'Imagen — Policroma',
    column: '9 / 12',
    row: '11 / 16',
  },
  {
    id: 'policroma-15',
    src: '/IMG/gallery15-laK.jpg',
    alt: 'La K — Policroma',
    column: '7 / 12',
    row: '13 / 16',
  },
  {
    id: 'policroma-16',
    src: '/IMG/gallery16-estaNoEs.jpg',
    alt: 'Esta no es — Policroma',
    column: '15 / 18',
    row: '12 / 16',
  },
  {
    id: 'policroma-17',
    src: '/IMG/gallery17-hice.jpg',
    alt: 'Hice — Policroma',
    column: '6 / 9',
    row: '10 / 12',
  },
  {
    id: 'policroma-18',
    src: '/IMG/gallery18-cali.jpg',
    alt: 'Cali — Policroma',
    column: '12 / 16',
    row: '13 / 16',
  },
  {
    id: 'policroma-19',
    src: '/IMG/policroma-19.jpg',
    alt: 'Obra 19 — Policroma',
    column: '17 / 20',
    row: '6 / 9',
  },
]

/** Celda del rotulo "GALERIA" dentro del collage. */
export const galleryLabelCell = { column: '10 / 11', row: '10 / 11' }
