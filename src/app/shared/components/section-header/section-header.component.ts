import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="section-header" [class.section-header--center]="align === 'center'" [class.section-header--left]="align === 'left'">
      <div class="decorative-line">
        <span class="decorative-line__icon">✦</span>
      </div>
      <h2 class="section-header__title" [class.section-header__title--light]="light">{{ title }}</h2>
      @if (subtitle) {
        <p class="section-header__subtitle" [class.section-header__subtitle--light]="light">{{ subtitle }}</p>
      }
    </div>
  `,
  styles: [`
    .section-header {
      margin-bottom: 3rem;

      &--center {
        text-align: center;
      }

      &--left {
        text-align: left;

        .decorative-line {
          justify-content: flex-start;
        }
      }

      &__title {
        margin-bottom: 0.75rem;

        &--light {
          color: var(--color-text-inverse);
        }
      }

      &__subtitle {
        font-size: 1.125rem;
        color: var(--color-text-secondary);
        max-width: 600px;
        margin: 0 auto;
        line-height: 1.6;

        &--light {
          color: rgba(250, 248, 245, 0.8);
        }
      }
    }

    .section-header--left .section-header__subtitle {
      margin: 0;
    }
  `]
})
export class SectionHeaderComponent {
  @Input({ required: true }) title!: string;
  @Input() subtitle?: string;
  @Input() align: 'center' | 'left' = 'center';
  @Input() light = false;
}
