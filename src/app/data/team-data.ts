/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  EQUIPO                                                    ║
 * ║  Miembros del equipo que aparecen en la página "Nosotros"  ║
 * ║                                                            ║
 * ║  Para cada cliente:                                        ║
 * ║  1. Cambia nombre, cargo (role) y biografía (bio)          ║
 * ║  2. Sustituye las fotos por retratos reales (400px)        ║
 * ║  3. Ajusta las redes sociales de cada miembro              ║
 * ║  4. Puedes añadir o quitar miembros según necesidad        ║
 * ║     (si cambias de 3 a 4, ajusta grid--3 → grid--4         ║
 * ║      en about.component.html)                              ║
 * ╚══════════════════════════════════════════════════════════════╝
 */
import { TeamMember } from '../core/models/team-member.model';

export const TEAM_DATA: TeamMember[] = [
  {
    id: 'pepe-garcia',
    name: 'Pepe García',
    role: 'Fundador y Cocinero',
    bio: 'Pepe lleva detrás de la barra y los fogones desde el 87. Aprendió a cocinar con su madre y su abuela, y eso se nota en cada plato. Sus croquetas y su tortilla son leyenda en el barrio.',
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400',
    social: {
      instagram: 'https://instagram.com/barcasapepe'
    }
  },
  {
    id: 'mari-carmen',
    name: 'Mari Carmen López',
    role: 'Cocina Casera',
    bio: 'Mari Carmen es el alma de la cocina. Sus guisos, sus albóndigas y sus postres caseros son la razón por la que muchos clientes repiten día tras día. Nadie hace un flan como ella.',
    image: 'https://images.unsplash.com/photo-1595257841889-eca2678571fa?w=400',
    social: {
      instagram: 'https://instagram.com/barcasapepe'
    }
  },
  {
    id: 'javi-garcia',
    name: 'Javi García',
    role: 'Camarero y Relaciones Públicas',
    bio: 'El hijo de Pepe y Mari Carmen creció entre mesas y barras. Conoce a todos los clientes por su nombre, se sabe los pedidos de memoria y tira las mejores cañas del barrio.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400',
    social: {
      instagram: 'https://instagram.com/barcasapepe'
    }
  }
];
