import { Component, inject } from '@angular/core';
import { LegalLayoutComponent } from './legal-layout.component';
import { RestaurantDataService } from '../../core/services/restaurant-data.service';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [LegalLayoutComponent],
  template: `
    <app-legal title="Política de Privacidad">
      <p><strong>Última actualización:</strong> Enero 2024</p>

      <h2>1. Responsable del Tratamiento</h2>
      <p>{{ config.name }}, con domicilio en {{ config.contact.address.street }}, {{ config.contact.address.postalCode }} {{ config.contact.address.city }}, es el responsable del tratamiento de los datos personales del usuario.</p>

      <h2>2. Datos Recogidos</h2>
      <p>Este sitio web no recoge datos personales de los usuarios de forma directa. Los datos que podamos recibir serán únicamente aquellos que el usuario nos proporcione voluntariamente al contactar con nosotros por teléfono o correo electrónico.</p>

      <h2>3. Finalidad del Tratamiento</h2>
      <p>Los datos proporcionados voluntariamente por el usuario serán utilizados para:</p>
      <ul>
        <li>Atender consultas y solicitudes de información</li>
        <li>Gestionar reservas realizadas por teléfono o email</li>
        <li>Mejorar nuestros servicios</li>
      </ul>

      <h2>4. Derechos del Usuario</h2>
      <p>El usuario tiene derecho a acceder, rectificar, suprimir, limitar u oponerse al tratamiento de sus datos. Para ejercer estos derechos, puede contactar con nosotros en <a href="mailto:{{ config.contact.email }}">{{ config.contact.email }}</a>.</p>

      <h2>5. Cookies</h2>
      <p>Este sitio web utiliza cookies técnicas necesarias para su funcionamiento. No utilizamos cookies de seguimiento ni publicitarias sin su consentimiento previo.</p>

      <h2>6. Contacto</h2>
      <p>Para cualquier consulta sobre nuestra política de privacidad, puede contactarnos en:</p>
      <p>Email: <a href="mailto:{{ config.contact.email }}">{{ config.contact.email }}</a><br>
      Teléfono: {{ config.contact.phone }}</p>
    </app-legal>
  `
})
export class PrivacyComponent {
  config = inject(RestaurantDataService).config;
}
