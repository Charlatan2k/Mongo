import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-prf',
  templateUrl: './card-prf.component.html',
  styleUrls: ['./card-prf.component.css'],
})
export class CardPrfComponent {
  @Input() professional: any;
}
