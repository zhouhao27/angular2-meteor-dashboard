import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { HomeModule } from './home';
import { MyChartModule } from './charts/chart.module';
import { SharedModule } from '../shared';
import { BlankPageModule } from './blank-page/blank-page.module';
import { FormModule } from './forms/forms.module';
import { TableModule } from './tables/table.module';
import { GridModule } from './grid/grid.module';
import { ElementModule } from './element/element.module';
import { ComponentModule } from './component/component.module'

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    SharedModule,
    HomeModule,
    MyChartModule,
    BlankPageModule,
    FormModule,
    TableModule,
    GridModule,
    ElementModule,
    ComponentModule
  ],
  declarations: [
    DashboardComponent    
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule {}