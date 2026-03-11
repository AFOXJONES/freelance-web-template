import { Component, inject } from '@angular/core';
import { LegalLayoutComponent } from './legal-layout.component';
import { RestaurantDataService } from '../../core/services/restaurant-data.service';

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [LegalLayoutComponent],
  template: `
    <app-legal title="Términos y Condiciones">
      <p><strong>Última actualización:</strong> Enero 2024</p>

      <h2>1. Información General</h2>
      <p>El presente sitio web es propiedad de {{ config.name }}, con domicilio en {{ config.contact.address.street }}, {{ config.contact.address.postalCode }} {{ config.contact.address.city }}.</p>

      <h2>2. Condiciones de Uso</h2>
      <p>El acceso y uso de este sitio web atribuye la condición de usuario y acepta las presentes condiciones de uso. El usuario se compromete a hacer un uso adecuado de los contenidos y servicios que se ofrecen.</p>

      <h2>3. Propiedad Intelectual</h2>
      <p>Todos los contenidos del sitio web, incluyendo textos, fotografías, gráficos, imágenes, iconos, tecnología, software, así como su diseño gráfico y códigos fuente, constituyen una obra cuya propiedad pertenece a {{ config.name }}.</p>

      <h2>4. Reservas</h2>
      <p>Las reservas se gestionan por teléfono o correo electrónico y están sujetas a disponibilidad. Nos reservamos el derecho de confirmar o modificar las reservas según nuestra capacidad.</p>

      <h2>5. Precios</h2>
      <p>Los precios mostrados en nuestra carta incluyen IVA. Nos reservamos el derecho de modificar los precios sin previo aviso.</p>

      <h2>6. Limitación de Responsabilidad</h2>
      <p>{{ config.name }} no se responsabiliza de los daños o perjuicios que pudieran derivarse del uso de la información publicada en este sitio web.</p>

      <h2>7. Legislación Aplicable</h2>
      <p>Estas condiciones se rigen por la legislación española. Para cualquier controversia, las partes se someten a los juzgados y tribunales de {{ config.contact.address.city }}.</p>
    </app-legal>
  `
})
export class TermsComponent {
  config = inject(RestaurantDataService).config;
}
