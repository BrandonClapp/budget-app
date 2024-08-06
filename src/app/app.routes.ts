import { Routes } from '@angular/router';
import { BalancePageComponent } from './balance-page/balance-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent
    },
    {
        path: 'balance',
        component: BalancePageComponent
    },
    {
        path: '**',
        component: NotFoundPageComponent
    }
];
