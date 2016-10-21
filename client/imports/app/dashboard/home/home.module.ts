import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CanActivateGuard } from '../../activate-guard';
import { CarouselModule, DropdownModule, AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import { HOME_COMPONENTS } from './';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    CarouselModule, 
    DropdownModule, 
    AlertModule
  ],
  providers: [
		CanActivateGuard
  ],
  declarations: [    
    ...HOME_COMPONENTS
  ],
  exports: [
    ...HOME_COMPONENTS
  ]
})
export class HomeModule {}