import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ChartComponent } from './chart.component';

@NgModule({
  imports: [
		RouterModule,
    CommonModule
  ],
  declarations: [
		ChartComponent
  ],
  exports: [
    ChartComponent
  ]
})
export class ChartModule {}