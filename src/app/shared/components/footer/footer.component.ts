import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RestaurantDataService } from '../../../core/services/restaurant-data.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  private dataService = inject(RestaurantDataService);

  config = this.dataService.config;
  currentYear = new Date().getFullYear();
}
