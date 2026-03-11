import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { RestaurantDataService } from '../../core/services/restaurant-data.service';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, PageHeroComponent, SectionHeaderComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  private dataService = inject(RestaurantDataService);
  private fb = inject(FormBuilder);
  private sanitizer = inject(DomSanitizer);

  config = this.dataService.config;
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  mapUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    `https://www.openstreetmap.org/export/embed.html?bbox=${this.config.contact.coordinates.lng - 0.005}%2C${this.config.contact.coordinates.lat - 0.003}%2C${this.config.contact.coordinates.lng + 0.005}%2C${this.config.contact.coordinates.lat + 0.003}&layer=mapnik&marker=${this.config.contact.coordinates.lat}%2C${this.config.contact.coordinates.lng}`
  );

  contactForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    subject: ['reserva', Validators.required],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  subjects = [
    { value: 'reserva', label: 'Reserva de Mesa' },
    { value: 'evento', label: 'Evento Privado' },
    { value: 'informacion', label: 'Información General' },
    { value: 'sugerencia', label: 'Sugerencias' },
    { value: 'otro', label: 'Otro' }
  ];

  async onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.submitError = false;

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      this.submitSuccess = true;
      this.contactForm.reset({ subject: 'reserva' });
    } catch {
      this.submitError = true;
    } finally {
      this.isSubmitting = false;
    }
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field && field.invalid && field.touched);
  }
}
