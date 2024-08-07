import { Component } from '@angular/core';
import { CardComponent } from '@shared/card/card.component';
import { BalanceCardComponent } from './balance-card/balance-card.component';
import { CommonModule } from '@angular/common'; 
import { PaymentType } from './balance-card/balance-card.models';

@Component({
  selector: 'app-balance-page',
  standalone: true,
  imports: [
    CardComponent,
    BalanceCardComponent,
    CommonModule
  ],
  templateUrl: './balance-page.component.html',
  styleUrl: './balance-page.component.scss'
})
export class BalancePageComponent {
  public sampleDate = new Date();

  public payments = [{
    title: `Payment 1`,
    amount: 650,
    date: new Date("08/06/2024"),
    paymentType: PaymentType.Deposit
  }, {
    title: `Payment 2`,
    amount: 750,
    date: new Date("08/06/2024"),
    paymentType: PaymentType.Withdraw
  }, {
    title: `Payment 3`,
    amount: 850,
    date: new Date("08/06/2024"),
    paymentType: PaymentType.Deposit
  }]
}
