import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { HomeModule } from './home';
import { SharedModule } from '../shared';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    SharedModule,
    HomeModule
  ],
  declarations: [
    DashboardComponent    
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule {}