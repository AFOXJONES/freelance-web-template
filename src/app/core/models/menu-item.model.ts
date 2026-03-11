export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  tags: ('vegetariano' | 'vegano' | 'sin-gluten' | 'picante' | 'recomendado')[];
  allergens?: string[];
}

export interface MenuCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  items: MenuItem[];
}

export interface TastingMenu {
  id: string;
  name: string;
  description: string;
  price: number;
  pairingPrice?: number;
  courses: string[];
  image?: string;
}
