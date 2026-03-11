export const RESTAURANT_CONFIG = {
  // ╔══════════════════════════════════════════════════════════════════╗
  // ║  CONFIGURACIÓN DEL RESTAURANTE / BAR                           ║
  // ║  Cambia estos valores para personalizar la web de cada cliente  ║
  // ╚══════════════════════════════════════════════════════════════════╝

  // === INFORMACIÓN BÁSICA ===
  // Nombre del negocio (aparece en header, footer, hero, SEO, legales)
  name: 'Bar Casa Pepe',
  // Eslogan corto (aparece debajo del nombre en el hero)
  tagline: 'Tapas y Bocadillos',
  // Descripción breve (texto del hero de la landing)
  description: 'Tu bar de toda la vida en el corazón del barrio',
  // Año de fundación (aparece en la sección "Nosotros")
  foundedYear: 1987,

  // === CONTACTO ===
  contact: {
    phone: '+34 912 345 678',       // Teléfono (aparece en header, contacto, CTA, legales)
    email: 'info@barcasapepe.com',  // Email (aparece en contacto y legales)
    address: {
      street: 'Calle del Pez, 15',
      city: 'Madrid',
      postalCode: '28004',
      country: 'España'
    },
    // Coordenadas para el mapa de la página de contacto (OpenStreetMap)
    coordinates: { lat: 40.4230, lng: -3.7025 }
  },

  // === HORARIOS ===
  // Se muestran en el footer, contacto y CTA de la landing
  // Usa un solo campo "lunch" con el horario completo del día
  hours: {
    weekdays: { lunch: '7:00 - 00:00', dinner: '' },
    saturday: { lunch: '8:00 - 01:00', dinner: '' },
    sunday: { lunch: '9:00 - 16:00', dinner: '' }
  },

  // === REDES SOCIALES ===
  social: {
    instagram: 'https://instagram.com/barcasapepe',
    facebook: 'https://facebook.com/barcasapepe',
    tripadvisor: 'https://tripadvisor.com/barcasapepe'
  },

  // === IMÁGENES ===
  // Todas las imágenes de la web centralizadas aquí.
  // Reemplaza las URLs de Unsplash con fotos reales del cliente.
  // Recomendaciones de tamaño:
  //   - Heroes/fondos: 1920px de ancho mínimo (se ven a pantalla completa)
  //   - Previews/interiores: 800px de ancho
  images: {
    // Landing - Hero principal (100vh, fondo a pantalla completa)
    heroBackground: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1920',
    // Landing - Sección CTA "Ven a Tomarte Algo" (fondo parallax)
    ctaBackground: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1920',
    // Landing - Foto de la sección "Nuestra Historia"
    aboutPreview: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800',
    // Página Carta - Hero superior
    menuHero: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920',
    // Página Nosotros - Hero superior
    aboutHero: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1920',
    // Página Nosotros - Foto de la historia (interior del bar)
    aboutStory: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800',
    // Página Galería - Hero superior
    galleryHero: 'https://images.unsplash.com/photo-1525610553efc-034d38a98071?w=1920',
    // Página Contacto - Hero superior
    contactHero: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1920',
  },

  // === FEATURES ===
  // 3 tarjetas de "¿Por Qué Elegirnos?" en la landing
  // Iconos disponibles: 'leaf', 'chef-hat', 'wine'
  features: [
    {
      icon: 'leaf',
      title: 'Producto de Mercado',
      description: 'Cada mañana compramos en el mercado del barrio para ofrecerte lo más fresco.'
    },
    {
      icon: 'chef-hat',
      title: 'Cocina Casera',
      description: 'Recetas de toda la vida hechas con cariño, como las de la abuela.'
    },
    {
      icon: 'wine',
      title: 'Buen Precio',
      description: 'Comer bien no tiene que ser caro. Calidad y cantidad al mejor precio.'
    }
  ],

  // === ABOUT / HISTORIA ===
  // Textos de la página "Nosotros": historia, cita del fundador, valores, timeline
  about: {
    historyTitle: 'Nuestra Historia',
    historyText: 'Bar Casa Pepe abrió sus puertas en 1987, cuando Pepe y Mari Carmen decidieron montar un pequeño bar en el barrio donde se criaron. Lo que empezó sirviendo cafés por la mañana y cañas por la tarde, se convirtió en el punto de encuentro del barrio. Aquí se ven los partidos, se celebran las fiestas y se comparten las mejores tapas. Tres décadas después, la familia sigue al pie del cañón.',
    founderQuote: '"Aquí todo el mundo es bienvenido. Esto es como tu segunda casa, pero con mejor tortilla."',
    founderName: 'Pepe García, Fundador',
    values: [
      { icon: 'heart', title: 'Como en Casa', description: 'Queremos que te sientas como en tu propia casa, con trato cercano y de confianza.' },
      { icon: 'lightbulb', title: 'Producto Fresco', description: 'Mercado cada mañana, pescadería de confianza y verdura de temporada.' },
      { icon: 'sprout', title: 'Recetas de Siempre', description: 'La tortilla de la abuela, las croquetas de mamá y el alioli del abuelo.' },
      { icon: 'star', title: 'Precio Justo', description: 'Buena comida a buen precio. Sin florituras, pero con mucho sabor.' }
    ],
    timeline: [
      { year: 1987, title: 'Abrimos el Bar', description: 'Pepe y Mari Carmen abren el bar con cuatro mesas y mucha ilusión.' },
      { year: 1995, title: 'La Terraza', description: 'Conseguimos el permiso de terraza. Cuatro mesitas que en verano son oro puro.' },
      { year: 2005, title: 'Javi se Incorpora', description: 'Javi, el hijo mayor, deja los estudios y se pone detrás de la barra.' },
      { year: 2015, title: 'Reforma del Local', description: 'Le damos un lavado de cara al bar. Nuevas mesas, nueva barra, misma esencia.' },
      { year: 2023, title: 'Tradición y Futuro', description: 'Seguimos aquí, sirviendo las mejores cañas y tapas del barrio. Como siempre.' }
    ]
  },

  // === SEO ===
  // Título y descripción de la pestaña del navegador y Google
  seo: {
    title: 'Bar Casa Pepe | Tapas y Bocadillos en Madrid',
    description: 'Bar Casa Pepe, tu bar de tapas y bocadillos de toda la vida en Madrid. Desayunos, menú del día, cañas y raciones caseras.',
    keywords: ['bar madrid', 'tapas', 'bocadillos', 'menú del día', 'bar de barrio']
  },

  // === NAVEGACIÓN ===
  // Enlaces del menú principal. Cambiar solo si se renombra alguna ruta.
  navigation: [
    { label: 'Inicio', path: '/' },
    { label: 'Carta', path: '/carta' },
    { label: 'Nosotros', path: '/nosotros' },
    { label: 'Galería', path: '/galeria' },
    { label: 'Contacto', path: '/contacto' }
  ]
};
