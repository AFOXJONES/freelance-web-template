import { Component, inject, AfterViewInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RestaurantDataService } from '../../core/services/restaurant-data.service';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { MenuCategory, TastingMenu } from '../../core/models/menu-item.model';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, PageHeroComponent, SectionHeaderComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements AfterViewInit {
  private dataService = inject(RestaurantDataService);
  private platformId = inject(PLATFORM_ID);

  categories: MenuCategory[] = this.dataService.menuCategories;
  tastingMenus: TastingMenu[] = this.dataService.tastingMenus;
  activeCategory = '';

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initScrollAnimations();
      this.initCategoryObserver();
    }
  }

  scrollToCategory(categoryId: string) {
    const element = document.getElementById(categoryId);
    if (element) {
      const headerOffset = 140;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  }

  getTagLabel(tag: string): string {
    const labels: Record<string, string> = {
      'vegetariano': '🌿 Vegetariano',
      'vegano': '🌱 Vegano',
      'sin-gluten': '🌾 Sin Gluten',
      'picante': '🌶️ Picante',
      'recomendado': '⭐ Recomendado'
    };
    return labels[tag] || tag;
  }

  private initScrollAnimations() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
  }

  private initCategoryObserver() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.activeCategory = entry.target.id;
          }
        });
      },
      { threshold: 0.3, rootMargin: '-140px 0px -50% 0px' }
    );
    this.categories.forEach(cat => {
      const el = document.getElementById(cat.id);
      if (el) observer.observe(el);
    });
  }
}
