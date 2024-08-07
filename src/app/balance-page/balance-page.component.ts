import { Component } from '@angular/core';
import { CardComponent } from '@shared/card/card.component';
import { BalanceCardComponent } from './balance-card/balance-card.component';

@Component({
  selector: 'app-balance-page',
  standalone: true,
  imports: [
    CardComponent,
    BalanceCardComponent
  ],
  templateUrl: './balance-page.component.html',
  styleUrl: './balance-page.component.scss'
})
export class BalancePageComponent {

}
