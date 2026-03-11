export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: 'platos' | 'interior' | 'eventos' | 'equipo';
  size?: 'normal' | 'wide' | 'tall';
}
