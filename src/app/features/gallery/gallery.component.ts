import { Component, inject, AfterViewInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RestaurantDataService } from '../../core/services/restaurant-data.service';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { GalleryItem } from '../../core/models/gallery-item.model';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, PageHeroComponent, SectionHeaderComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent implements AfterViewInit {
  private dataService = inject(RestaurantDataService);
  private platformId = inject(PLATFORM_ID);

  config = this.dataService.config;
  allItems = this.dataService.galleryItems;
  filteredItems = [...this.allItems];
  activeFilter = 'todos';
  lightboxOpen = false;
  lightboxIndex = 0;

  filters = [
    { id: 'todos', label: 'Todos' },
    { id: 'platos', label: 'Platos' },
    { id: 'interior', label: 'Interior' },
    { id: 'eventos', label: 'Eventos' },
    { id: 'equipo', label: 'Equipo' }
  ];

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
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
  }

  filterBy(category: string) {
    this.activeFilter = category;
    this.filteredItems = category === 'todos'
      ? [...this.allItems]
      : this.allItems.filter(item => item.category === category);
  }

  openLightbox(index: number) {
    this.lightboxIndex = index;
    this.lightboxOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.lightboxOpen = false;
    document.body.style.overflow = '';
  }

  prevImage(event: Event) {
    event.stopPropagation();
    this.lightboxIndex = this.lightboxIndex > 0
      ? this.lightboxIndex - 1
      : this.filteredItems.length - 1;
  }

  nextImage(event: Event) {
    event.stopPropagation();
    this.lightboxIndex = this.lightboxIndex < this.filteredItems.length - 1
      ? this.lightboxIndex + 1
      : 0;
  }
}
