import { Route } from '@angular/router';
import { HomeComponent } from './home.component';
import { CanActivateGuard } from '../../activate-guard';

export const HOME_ROUTES : Route[] = [
  { path: 'home', component: HomeComponent, canActivate: [CanActivateGuard] }
]