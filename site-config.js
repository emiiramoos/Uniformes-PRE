/* Sustituir las rutas vacías al recibir los videos. No se cargan archivos inexistentes. */
window.PRE_CONFIG = {
  whatsapp: '529989370850',
  instagram: 'https://www.instagram.com/uniformespre/',
  facebook: 'https://www.facebook.com/uniformespree',
  hero: { desktopVideo: '', mobileVideo: '', poster: 'assets/images/filipina-hero.webp' },
  videos: {
    bordado: { title: 'Así bordamos tus uniformes', src: '', poster: '', orientation: 'vertical' },
    prendas: { title: 'Los detalles hacen la diferencia', src: '', poster: '', orientation: 'vertical' },
    taller: { title: 'Del taller a tu equipo', src: '', poster: '', orientation: 'vertical' },
    equipo: { title: 'Conoce Uniformes PRE', src: '', poster: '', orientation: 'vertical' }
  },
  /* Incorporar exclusivamente imágenes aprobadas. Claves: código y vista. */
  productImages: {},
  /* Los textos legales definitivos se validarán antes de su publicación. */
  legal: {}
};
