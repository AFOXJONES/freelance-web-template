/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  CARTA / MENÚ                                              ║
 * ║  Categorías, platos, precios, imágenes y menús del día     ║
 * ║                                                            ║
 * ║  Para cada cliente:                                        ║
 * ║  1. Cambia las categorías según su carta real               ║
 * ║  2. Añade/quita platos con nombre, descripción, precio     ║
 * ║  3. Sustituye las URLs de Unsplash por fotos reales (600px)║
 * ║  4. Ajusta tags: 'vegetariano','vegano','sin-gluten',      ║
 * ║     'picante','recomendado'                                ║
 * ║  5. Actualiza los menús del día al final del archivo       ║
 * ╚══════════════════════════════════════════════════════════════╝
 */
import { MenuCategory, TastingMenu } from '../core/models/menu-item.model';

export const MENU_DATA: MenuCategory[] = [
  {
    id: 'desayunos',
    name: 'Desayunos y Meriendas',
    description: 'Para empezar el día con energía o para la merienda de media tarde',
    icon: 'salad',
    items: [
      {
        id: 'tostada-tomate',
        name: 'Tostada con Tomate',
        description: 'Pan de pueblo con tomate natural rallado y aceite de oliva virgen extra',
        price: 2.50,
        image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600',
        tags: ['vegano'],
        allergens: ['gluten']
      },
      {
        id: 'tostada-jamon',
        name: 'Tostada con Jamón',
        description: 'Pan con tomate y jamón serrano cortado a cuchillo',
        price: 3.80,
        image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600',
        tags: ['recomendado'],
        allergens: ['gluten']
      },
      {
        id: 'cafe-con-leche',
        name: 'Café con Leche',
        description: 'Café de tueste natural con leche entera. También disponible con leche de avena o soja',
        price: 1.50,
        image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600',
        tags: ['vegetariano'],
        allergens: ['lácteos']
      },
      {
        id: 'desayuno-completo',
        name: 'Desayuno Completo',
        description: 'Café con leche, zumo de naranja natural, tostada con tomate y jamón',
        price: 4.90,
        image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=600',
        tags: ['recomendado'],
        allergens: ['gluten', 'lácteos']
      }
    ]
  },
  {
    id: 'bocadillos',
    name: 'Bocadillos y Montados',
    description: 'Hechos al momento con pan crujiente del día',
    icon: 'wheat',
    items: [
      {
        id: 'bocata-calamares',
        name: 'Bocadillo de Calamares',
        description: 'Calamares fritos en aceite de oliva con alioli casero en pan crujiente',
        price: 4.50,
        image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600',
        tags: ['recomendado'],
        allergens: ['gluten', 'moluscos', 'huevo']
      },
      {
        id: 'bocata-tortilla',
        name: 'Bocadillo de Tortilla',
        description: 'Tortilla española jugosa en pan de barra. Se puede pedir con pimientos',
        price: 3.50,
        image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=600',
        tags: ['vegetariano'],
        allergens: ['gluten', 'huevo']
      },
      {
        id: 'bocata-lomo',
        name: 'Bocadillo de Lomo con Queso',
        description: 'Lomo de cerdo a la plancha con queso fundido, lechuga y tomate',
        price: 4.90,
        image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600',
        tags: [],
        allergens: ['gluten', 'lácteos']
      },
      {
        id: 'pepito-ternera',
        name: 'Pepito de Ternera',
        description: 'Filete de ternera a la plancha con pimiento verde en pan tostado',
        price: 5.50,
        image: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=600',
        tags: [],
        allergens: ['gluten']
      },
      {
        id: 'serranito',
        name: 'Serranito',
        description: 'Lomo, jamón serrano, pimiento verde frito y tomate en pan crujiente',
        price: 5.90,
        image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=600',
        tags: ['recomendado'],
        allergens: ['gluten']
      }
    ]
  },
  {
    id: 'tapas',
    name: 'Tapas y Raciones',
    description: 'Para compartir o para ti solo, tú decides',
    icon: 'soup',
    items: [
      {
        id: 'patatas-bravas',
        name: 'Patatas Bravas',
        description: 'Patatas fritas con salsa brava casera y alioli. Las de toda la vida',
        price: 4.50,
        image: 'https://images.unsplash.com/photo-1585109649979-b809c0d0c27e?w=600',
        tags: ['vegetariano', 'recomendado'],
        allergens: ['huevo']
      },
      {
        id: 'croquetas-jamon',
        name: 'Croquetas de Jamón (6 uds.)',
        description: 'Croquetas caseras de jamón ibérico. Crujientes por fuera, cremosas por dentro',
        price: 6.50,
        image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600',
        tags: ['recomendado'],
        allergens: ['gluten', 'lácteos', 'huevo']
      },
      {
        id: 'tortilla-espanola',
        name: 'Tortilla Española',
        description: 'La tortilla de la abuela: jugosa, con cebolla pochada y huevos de corral',
        price: 7.00,
        image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=600',
        tags: ['sin-gluten', 'recomendado'],
        allergens: ['huevo']
      },
      {
        id: 'gambas-ajillo',
        name: 'Gambas al Ajillo',
        description: 'Gambas salteadas en aceite de oliva con ajo laminado y guindilla',
        price: 8.50,
        image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600',
        tags: ['sin-gluten', 'picante'],
        allergens: ['crustáceos']
      },
      {
        id: 'tabla-jamon',
        name: 'Tabla de Jamón Ibérico',
        description: 'Jamón ibérico de cebo cortado a cuchillo con picos artesanos',
        price: 12.00,
        image: 'https://images.unsplash.com/photo-1600891964599-f94d51f3dd8a?w=600',
        tags: ['sin-gluten'],
        allergens: []
      },
      {
        id: 'ensaladilla-rusa',
        name: 'Ensaladilla Rusa',
        description: 'Receta de la casa con patata, zanahoria, atún, guisantes y mahonesa casera',
        price: 5.50,
        image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=600',
        tags: ['sin-gluten'],
        allergens: ['huevo', 'pescado']
      },
      {
        id: 'pimientos-padron',
        name: 'Pimientos de Padrón',
        description: 'Pimientos de Padrón fritos con sal gorda. Unos pican y otros no',
        price: 5.00,
        image: 'https://images.unsplash.com/photo-1583119022894-919a68a3d0e3?w=600',
        tags: ['vegano', 'sin-gluten'],
        allergens: []
      },
      {
        id: 'chopitos',
        name: 'Chopitos Fritos',
        description: 'Chopitos enharinados y fritos al momento con limón',
        price: 7.00,
        image: 'https://images.unsplash.com/photo-1604909052743-94e838986d24?w=600',
        tags: [],
        allergens: ['moluscos', 'gluten']
      }
    ]
  },
  {
    id: 'platos',
    name: 'Platos del Día',
    description: 'Cocina de cuchara y platos contundentes como los de casa',
    icon: 'beef',
    items: [
      {
        id: 'albondigas',
        name: 'Albóndigas en Salsa',
        description: 'Albóndigas de ternera y cerdo en salsa de tomate casera con patatas fritas',
        price: 8.50,
        image: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=600',
        tags: ['recomendado'],
        allergens: ['gluten', 'huevo']
      },
      {
        id: 'calamares-romana',
        name: 'Calamares a la Romana',
        description: 'Calamares rebozados y fritos servidos con ensalada y limón',
        price: 9.00,
        image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600',
        tags: [],
        allergens: ['moluscos', 'gluten']
      },
      {
        id: 'secreto-iberico',
        name: 'Secreto Ibérico a la Plancha',
        description: 'Secreto ibérico a la plancha con pimientos del piquillo y patatas',
        price: 10.50,
        image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=600',
        tags: ['sin-gluten'],
        allergens: []
      },
      {
        id: 'huevos-rotos',
        name: 'Huevos Rotos con Jamón',
        description: 'Huevos fritos rotos sobre cama de patatas con jamón ibérico',
        price: 8.00,
        image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=600',
        tags: ['sin-gluten', 'recomendado'],
        allergens: ['huevo']
      }
    ]
  },
  {
    id: 'postres',
    name: 'Postres Caseros',
    description: 'Dulces de toda la vida, hechos aquí como los de la abuela',
    icon: 'cake-slice',
    items: [
      {
        id: 'flan-casero',
        name: 'Flan Casero',
        description: 'Flan de huevo al baño maría con caramelo. Receta de Mari Carmen',
        price: 3.50,
        image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600',
        tags: ['sin-gluten', 'recomendado'],
        allergens: ['lácteos', 'huevo']
      },
      {
        id: 'arroz-con-leche',
        name: 'Arroz con Leche',
        description: 'Arroz con leche cremoso con canela y piel de limón',
        price: 3.50,
        image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600',
        tags: ['sin-gluten'],
        allergens: ['lácteos']
      },
      {
        id: 'tarta-queso',
        name: 'Tarta de Queso de la Casa',
        description: 'Tarta de queso cremosa al horno con mermelada de frutos rojos',
        price: 4.00,
        image: 'https://images.unsplash.com/photo-1567171466295-4afa63d45416?w=600',
        tags: ['recomendado'],
        allergens: ['lácteos', 'huevo', 'gluten']
      }
    ]
  },
  {
    id: 'bebidas',
    name: 'Bebidas',
    description: 'Cañas bien tiradas, vinos de la tierra y refrescos',
    icon: 'fish',
    items: [
      {
        id: 'cana',
        name: 'Caña de Cerveza',
        description: 'Caña de cerveza bien fría de barril (20cl)',
        price: 1.50,
        image: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=600',
        tags: [],
        allergens: ['gluten']
      },
      {
        id: 'tinto-verano',
        name: 'Tinto de Verano',
        description: 'Vino tinto con gaseosa y hielo. Con limón o sin limón, tú decides',
        price: 2.00,
        image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600',
        tags: [],
        allergens: ['sulfitos']
      },
      {
        id: 'vino-tinto',
        name: 'Copa de Vino de la Casa',
        description: 'Vino tinto de Ribera o Rioja, blanco Verdejo o rosado. Pregunta por nuestras referencias',
        price: 2.50,
        image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600',
        tags: [],
        allergens: ['sulfitos']
      },
      {
        id: 'vermut',
        name: 'Vermut de Grifo',
        description: 'Vermut rojo de grifo con aceituna y rodaja de naranja. El clásico del domingo',
        price: 2.50,
        image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=600',
        tags: ['recomendado'],
        allergens: ['sulfitos']
      },
      {
        id: 'refresco',
        name: 'Refrescos',
        description: 'Coca-Cola, Fanta, Aquarius, Nestea o agua mineral',
        price: 2.00,
        image: 'https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=600',
        tags: [],
        allergens: []
      }
    ]
  }
];

export const TASTING_MENUS: TastingMenu[] = [
  {
    id: 'menu-del-dia',
    name: 'Menú del Día',
    description: 'De lunes a viernes de 13:00 a 16:00. Incluye pan, bebida y postre',
    price: 12,
    pairingPrice: 0,
    courses: [
      'Primero: Ensalada mixta / Sopa del día / Lentejas estofadas',
      'Segundo: Pollo asado / Merluza a la plancha / Albóndigas en salsa',
      'Postre: Flan casero / Fruta del tiempo / Café',
      'Incluye: Pan y bebida (caña, copa de vino, agua o refresco)'
    ],
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600'
  },
  {
    id: 'menu-finde',
    name: 'Menú del Fin de Semana',
    description: 'Sábados y domingos al mediodía. Para comer sin prisas',
    price: 16,
    pairingPrice: 0,
    courses: [
      'Primero: Ensaladilla rusa / Salmorejo / Croquetas caseras (4 uds.)',
      'Segundo: Secreto ibérico / Bacalao a la plancha / Huevos rotos con jamón',
      'Postre: Tarta de queso / Arroz con leche / Café',
      'Incluye: Pan y bebida (caña, copa de vino, agua o refresco)'
    ],
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600'
  }
];
