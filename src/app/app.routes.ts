import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent),
    title: 'Bar Casa Pepe | Tapas y Bocadillos en Madrid'
  },
  {
    path: 'carta',
    loadComponent: () => import('./features/menu/menu.component').then(m => m.MenuComponent),
    title: 'Nuestra Carta | Bar Casa Pepe'
  },
  {
    path: 'nosotros',
    loadComponent: () => import('./features/about/about.component').then(m => m.AboutComponent),
    title: 'Nosotros | Bar Casa Pepe'
  },
  {
    path: 'galeria',
    loadComponent: () => import('./features/gallery/gallery.component').then(m => m.GalleryComponent),
    title: 'Galería | Bar Casa Pepe'
  },
  {
    path: 'contacto',
    loadComponent: () => import('./features/contact/contact.component').then(m => m.ContactComponent),
    title: 'Contacto | Bar Casa Pepe'
  },
  {
    path: 'privacidad',
    loadComponent: () => import('./features/legal/privacy.component').then(m => m.PrivacyComponent),
    title: 'Política de Privacidad | Bar Casa Pepe'
  },
  {
    path: 'terminos',
    loadComponent: () => import('./features/legal/terms.component').then(m => m.TermsComponent),
    title: 'Términos y Condiciones | Bar Casa Pepe'
  },
  {
    path: 'aviso-legal',
    loadComponent: () => import('./features/legal/legal-notice.component').then(m => m.LegalNoticeComponent),
    title: 'Aviso Legal | Bar Casa Pepe'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
