import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { CardComponent } from '@shared/card/card.component';
import { PaymentType } from './balance-card.models';


@Component({
  selector: 'app-balance-card',
  standalone: true,
  imports: [
    CardComponent, DatePipe, CommonModule
  ],
  templateUrl: './balance-card.component.html',
  styleUrl: './balance-card.component.scss'
})
export class BalanceCardComponent {


  @Input()
  public title: string = '';
  @Input()
  public amount: number = 1;
  @Input()
  public date: Date | undefined = undefined;
  @Input()
  public paymentType: PaymentType | undefined;
  public : PaymentType | undefined;

  public get isDeposit(): boolean {
    return this.paymentType === PaymentType.Deposit;
  }

  public get isWithdrawal(): boolean {
    console.log(this.paymentType)
    return this.paymentType === PaymentType.Withdraw;
  }
}
