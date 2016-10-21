import { Routes } from '@angular/router';
import { Meteor } from 'meteor/meteor';

import { ACCOUNT_ROUTES,LoginComponent } from './account';
import { DASHBOARD_ROUTES } from './dashboard';

export const routes: Routes = [
	...ACCOUNT_ROUTES,
	...DASHBOARD_ROUTES,
	{ path: '**', component: LoginComponent }
];

export const ROUTES_PROVIDERS = [{
  provide: 'canActivateForLoggedIn',
  useValue: () => !! Meteor.userId()
}];