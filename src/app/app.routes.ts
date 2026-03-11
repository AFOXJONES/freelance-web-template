import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent),
    title: 'La Esencia | Restaurante de Cocina de Autor en Madrid'
  },
  {
    path: 'carta',
    loadComponent: () => import('./features/menu/menu.component').then(m => m.MenuComponent),
    title: 'Nuestra Carta | La Esencia'
  },
  {
    path: 'nosotros',
    loadComponent: () => import('./features/about/about.component').then(m => m.AboutComponent),
    title: 'Nosotros | La Esencia'
  },
  {
    path: 'galeria',
    loadComponent: () => import('./features/gallery/gallery.component').then(m => m.GalleryComponent),
    title: 'Galería | La Esencia'
  },
  {
    path: 'contacto',
    loadComponent: () => import('./features/contact/contact.component').then(m => m.ContactComponent),
    title: 'Contacto | La Esencia'
  },
  {
    path: 'privacidad',
    loadComponent: () => import('./features/legal/privacy.component').then(m => m.PrivacyComponent),
    title: 'Política de Privacidad | La Esencia'
  },
  {
    path: 'terminos',
    loadComponent: () => import('./features/legal/terms.component').then(m => m.TermsComponent),
    title: 'Términos y Condiciones | La Esencia'
  },
  {
    path: 'aviso-legal',
    loadComponent: () => import('./features/legal/legal-notice.component').then(m => m.LegalNoticeComponent),
    title: 'Aviso Legal | La Esencia'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
