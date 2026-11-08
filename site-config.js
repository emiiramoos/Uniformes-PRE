/* Sustituir las rutas vacías al recibir los videos. No se cargan archivos inexistentes. */
window.PRE_CONFIG = {
  whatsapp: '529989370850',
  instagram: 'https://www.instagram.com/uniformespre/',
  facebook: 'https://www.facebook.com/uniformespree',
  hero: { desktopVideo: '', mobileVideo: '', poster: 'assets/images/filipina-hero.webp' },
  videos: {
    bordado: { title: 'Así bordamos tus uniformes', src: '', poster: 'assets/images/embroidery.webp', orientation: 'horizontal' },
    prendas: { title: 'Los detalles hacen la diferencia', src: '', poster: '', orientation: 'vertical' },
    taller: { title: 'Del taller a tu equipo', src: '', poster: '', orientation: 'vertical' },
    equipo: { title: 'Conoce Uniformes PRE', src: '', poster: '', orientation: 'vertical' }
  },
  /* Incorporar exclusivamente imágenes aprobadas. Claves: código y vista. */
  productImages: {"FI003-AF": {"Frente": "assets/products/FI003-AF.webp"}, "FI001MC-G": {"Frente": "assets/products/FI001MC-G.webp"}, "FI001ML-G": {"Frente": "assets/products/FI001ML-G.webp"}, "FI002MC-DG": {"Frente": "assets/products/FI002MC-DG.webp"}, "CZ001MC": {"Frente": "assets/products/CZ001MC.webp"}, "CZ001ML": {"Frente": "assets/products/CZ001ML.webp"}, "PL001": {"Frente": "assets/products/PL001.webp"}, "PL002MC": {"Frente": "assets/products/cuello-redondo/mc-azul-claro.webp"}, "PL001ML": {"Frente": "assets/products/cuello-redondo/ml-azul-vivo.webp"}, "B004D": {"Frente": "assets/products/B004D.webp"}, "B001D-13": {"Frente": "assets/products/B001D-13.webp"}, "B001D": {"Frente": "assets/products/B001D.webp"}, "C006C": {"Frente": "assets/products/C006C.webp"}, "C007C": {"Frente": "assets/products/C007C.webp"}, "PB001": {"Frente": "assets/products/PB001.webp"}, "PC001G": {"Frente": "assets/products/PC001G.webp"}, "MP001": {"Frente": "assets/products/MP001.webp"}, "ALINA": {"Frente": "assets/products/ALINA.webp"}, "PEGASO": {"Frente": "assets/products/PEGASO.webp"}, "PING-BA": {"Frente": "assets/products/PING-BA.webp"}, "PM001-S": {"Frente": "assets/products/PM001-S.webp"}, "BM001-ML": {"Frente": "assets/products/BM001-ML.webp"}, "PPU001": {"Frente": "assets/products/PPU001.webp"}, "MOD-363": {"Frente": "assets/products/MOD-363.webp"}, "MOD-920-B": {"Frente": "assets/products/MOD-920-B.webp"}, "MOD-1042-B": {"Frente": "assets/products/MOD-1042-B.webp"}, "SG001": {"Frente": "assets/products/SG001.webp"}, "GG001": {"Frente": "assets/products/GG001.webp"}},
  /* Los textos legales definitivos se validarán antes de su publicación. */
  productColorImages: {"PL002MC": {"Azul claro": "assets/products/cuello-redondo/mc-azul-claro.webp", "Azul marino": "assets/products/cuello-redondo/mc-azul-marino.webp", "Blanco": "assets/products/cuello-redondo/mc-blanco.webp", "Negro": "assets/products/cuello-redondo/mc-negro.webp"}, "PL001ML": {"Azul vivo": "assets/products/cuello-redondo/ml-azul-vivo.webp", "Azul claro": "assets/products/cuello-redondo/ml-azul-claro.webp", "Azul rey": "assets/products/cuello-redondo/ml-azul-rey.webp", "Rojo": "assets/products/cuello-redondo/ml-rojo.webp", "Fucsia": "assets/products/cuello-redondo/ml-fucsia.webp", "Coral": "assets/products/cuello-redondo/ml-coral.webp"}},
  sourceModelCodes: ["FI003-AF", "FI001ML-G", "FI002MC-DG", "CZ001ML", "B004D", "B001D-13", "B001D", "C006C", "PM001-S", "BM001-ML"],
  legal: {}
};
