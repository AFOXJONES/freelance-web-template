import { Component, inject, AfterViewInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RestaurantDataService } from '../../core/services/restaurant-data.service';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { CtaButtonComponent } from '../../shared/components/cta-button/cta-button.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, SectionHeaderComponent, CtaButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {
  private dataService = inject(RestaurantDataService);
  private platformId = inject(PLATFORM_ID);

  config = this.dataService.config;
  featuredDishes = this.dataService.getFeaturedDishes();
  galleryPreview = this.dataService.galleryItems.slice(0, 6);

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initScrollAnimations();
    }
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
}
