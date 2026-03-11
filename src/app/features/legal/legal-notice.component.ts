import { Component, inject } from '@angular/core';
import { LegalLayoutComponent } from './legal-layout.component';
import { RestaurantDataService } from '../../core/services/restaurant-data.service';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [LegalLayoutComponent],
  template: `
    <app-legal title="Aviso Legal">
      <p><strong>Última actualización:</strong> Enero 2024</p>

      <h2>1. Datos Identificativos</h2>
      <p>En cumplimiento con el deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico, a continuación se reflejan los siguientes datos:</p>
      <ul>
        <li><strong>Denominación social:</strong> {{ config.name }}</li>
        <li><strong>Domicilio:</strong> {{ config.contact.address.street }}, {{ config.contact.address.postalCode }} {{ config.contact.address.city }}</li>
        <li><strong>Correo electrónico:</strong> {{ config.contact.email }}</li>
        <li><strong>Teléfono:</strong> {{ config.contact.phone }}</li>
      </ul>

      <h2>2. Objeto</h2>
      <p>El presente sitio web tiene como objeto facilitar al público en general el conocimiento de las actividades que {{ config.name }} realiza y de los servicios que presta.</p>

      <h2>3. Propiedad Intelectual e Industrial</h2>
      <p>Los derechos de propiedad intelectual del contenido de las páginas web, su diseño gráfico y códigos son titularidad de {{ config.name }} y, por tanto, queda prohibida su reproducción, distribución, comunicación pública, transformación o cualquier otra actividad que se pueda realizar con los contenidos sin autorización previa.</p>

      <h2>4. Condiciones de Acceso y Utilización</h2>
      <p>La utilización del sitio web es gratuita. No obstante, algunos de los servicios ofrecidos por {{ config.name }} están sujetos al pago de un precio determinado en las condiciones generales de contratación.</p>

      <h2>5. Política de Enlaces</h2>
      <p>{{ config.name }} no se hace responsable del contenido de las páginas web a las que el usuario pueda acceder a través de los enlaces establecidos en su sitio web.</p>
    </app-legal>
  `
})
export class LegalNoticeComponent {
  config = inject(RestaurantDataService).config;
}
