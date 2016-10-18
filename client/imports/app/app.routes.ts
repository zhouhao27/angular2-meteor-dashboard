import { Routes } from '@angular/router';
import { ACCOUNT_ROUTES,LoginComponent } from './account';

export const routes: Routes = [
	...ACCOUNT_ROUTES,
	{ path: '**', component: LoginComponent }
];
