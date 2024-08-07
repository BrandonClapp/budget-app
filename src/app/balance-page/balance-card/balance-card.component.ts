import { Component, Input } from '@angular/core';
import { CardComponent } from '@shared/card/card.component';

@Component({
  selector: 'app-balance-card',
  standalone: true,
  imports: [
    CardComponent
  ],
  templateUrl: './balance-card.component.html',
  styleUrl: './balance-card.component.scss'
})
export class BalanceCardComponent {
  @Input()
  public title: string = '';
}
