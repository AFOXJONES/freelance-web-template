import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="page-hero" [style.height]="height" [style.background-image]="'url(' + image + ')'">
      <div class="overlay"></div>
      <div class="page-hero__content container">
        <h1 class="page-hero__title">{{ title }}</h1>
        @if (subtitle) {
          <p class="page-hero__subtitle">{{ subtitle }}</p>
        }
      </div>
    </section>
  `,
  styles: [`
    .page-hero {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      background-size: cover;
      background-position: center;
      background-attachment: fixed;

      @media (max-width: 768px) {
        background-attachment: scroll;
      }

      &__content {
        position: relative;
        z-index: 1;
        text-align: center;
      }

      &__title {
        color: var(--color-text-inverse);
        font-size: clamp(2.5rem, 5vw, 4rem);
        margin-bottom: 0.75rem;
      }

      &__subtitle {
        color: rgba(250, 248, 245, 0.85);
        font-size: 1.25rem;
        max-width: 600px;
        margin: 0 auto;
      }
    }
  `]
})
export class PageHeroComponent {
  @Input({ required: true }) title!: string;
  @Input() subtitle?: string;
  @Input() image = 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920';
  @Input() height = '40vh';
}
