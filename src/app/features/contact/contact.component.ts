import { Component, inject, AfterViewInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { RestaurantDataService } from '../../core/services/restaurant-data.service';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, PageHeroComponent, SectionHeaderComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements AfterViewInit {
  private dataService = inject(RestaurantDataService);
  private sanitizer = inject(DomSanitizer);
  private platformId = inject(PLATFORM_ID);

  config = this.dataService.config;

  mapUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    `https://www.openstreetmap.org/export/embed.html?bbox=${this.config.contact.coordinates.lng - 0.005}%2C${this.config.contact.coordinates.lat - 0.003}%2C${this.config.contact.coordinates.lng + 0.005}%2C${this.config.contact.coordinates.lat + 0.003}&layer=mapnik&marker=${this.config.contact.coordinates.lat}%2C${this.config.contact.coordinates.lng}`
  );

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
