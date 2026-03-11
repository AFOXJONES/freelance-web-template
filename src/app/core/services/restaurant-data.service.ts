import { Injectable } from '@angular/core';
import { RESTAURANT_CONFIG } from '../config/restaurant.config';
import { MENU_DATA, TASTING_MENUS } from '../../data/menu-data';
import { TEAM_DATA } from '../../data/team-data';
import { GALLERY_DATA } from '../../data/gallery-data';
import { MenuCategory, TastingMenu } from '../models/menu-item.model';
import { TeamMember } from '../models/team-member.model';
import { GalleryItem } from '../models/gallery-item.model';

@Injectable({
  providedIn: 'root'
})
export class RestaurantDataService {
  get config() {
    return RESTAURANT_CONFIG;
  }

  get menuCategories(): MenuCategory[] {
    return MENU_DATA;
  }

  get tastingMenus(): TastingMenu[] {
    return TASTING_MENUS;
  }

  get teamMembers(): TeamMember[] {
    return TEAM_DATA;
  }

  get galleryItems(): GalleryItem[] {
    return GALLERY_DATA;
  }

  getFeaturedDishes() {
    return MENU_DATA
      .flatMap(cat => cat.items)
      .filter(item => item.tags.includes('recomendado'))
      .slice(0, 3);
  }

  getGalleryByCategory(category: string): GalleryItem[] {
    if (category === 'todos') return GALLERY_DATA;
    return GALLERY_DATA.filter(item => item.category === category);
  }
}
