import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'swiperCarousel';

  slides = [
    { name: 'cola', price: 20, color: 'red' },
    { name: 'fanta', price: 20, color: 'blue' },
    { name: 'chips', price: 20, color: 'green' },
    { name: 'ice cream', price: 20, color: 'orange' },
  ];
}
