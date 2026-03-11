import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cta-button',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    @if (href) {
      <a [href]="href" class="btn" [ngClass]="buttonClasses" [target]="external ? '_blank' : null" [rel]="external ? 'noopener' : null">
        <ng-content></ng-content>
      </a>
    } @else if (link) {
      <a [routerLink]="link" class="btn" [ngClass]="buttonClasses">
        <ng-content></ng-content>
      </a>
    } @else {
      <button class="btn" [ngClass]="buttonClasses" [type]="type" [disabled]="disabled">
        <ng-content></ng-content>
      </button>
    }
  `
})
export class CtaButtonComponent {
  @Input() link?: string;
  @Input() href?: string;
  @Input() variant: 'primary' | 'outline' | 'outline-dark' = 'primary';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() external = false;
  @Input() type: 'button' | 'submit' = 'button';
  @Input() disabled = false;

  get buttonClasses(): string {
    const classes = [`btn--${this.variant}`];
    if (this.size !== 'md') classes.push(`btn--${this.size}`);
    return classes.join(' ');
  }
}
