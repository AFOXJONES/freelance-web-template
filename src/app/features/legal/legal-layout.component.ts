import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantDataService } from '../../core/services/restaurant-data.service';

@Component({
  selector: 'app-legal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="legal-page">
      <div class="container">
        <h1 class="legal-page__title">{{ title }}</h1>
        <div class="legal-page__content">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .legal-page {
      padding: 8rem 0 4rem;
      min-height: 60vh;

      &__title {
        font-size: clamp(2rem, 4vw, 3rem);
        margin-bottom: 2rem;
        padding-bottom: 1rem;
        border-bottom: 2px solid var(--color-border);
      }

      &__content {
        max-width: 800px;
        font-size: 0.9375rem;
        line-height: 1.8;
        color: var(--color-text-secondary);

        :host ::ng-deep {
          h2 {
            font-size: 1.5rem;
            margin: 2rem 0 1rem;
            color: var(--color-text-primary);
          }

          h3 {
            font-size: 1.25rem;
            margin: 1.5rem 0 0.75rem;
            color: var(--color-text-primary);
          }

          p {
            margin-bottom: 1rem;
          }

          ul {
            padding-left: 1.5rem;
            margin-bottom: 1rem;

            li {
              list-style: disc;
              margin-bottom: 0.5rem;
            }
          }
        }
      }
    }
  `]
})
export class LegalLayoutComponent {
  @Input({ required: true }) title!: string;
}
