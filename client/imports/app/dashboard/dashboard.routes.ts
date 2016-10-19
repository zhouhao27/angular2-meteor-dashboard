import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

import { CHART_ROUTES } from './charts/chart.routes';
import { HOME_ROUTES } from './home/home.route';
import { BLANKPAGE_ROUTES } from './blank-page/blank-page.routes';
import { FORMS_ROUTES } from './forms/forms.routes';
import { TABLE_ROUTES } from './tables/table.routes';
import { GRID_ROUTES } from './grid/grid.routes';
import { ELEMENT_ROUTES } from './element/element.routes';
import { COMPONENT_ROUTES } from './component/component.routes';

export const DASHBOARD_ROUTES: Route[] = [
  { 
    path: 'dashboard',
    component: DashboardComponent,
    children: [
			...HOME_ROUTES,
      ...CHART_ROUTES,
      ...BLANKPAGE_ROUTES,
      ...FORMS_ROUTES,
      ...TABLE_ROUTES,
      ...GRID_ROUTES,
      ...ELEMENT_ROUTES,
      ...COMPONENT_ROUTES
    ]
  }
]
