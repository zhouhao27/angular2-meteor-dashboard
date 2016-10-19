import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from './sidebar/sidebar.component';
import { TopNavComponent } from './topnav/topnav.component';

@NgModule({
  imports: [
    RouterModule,
    CommonModule
  ],
  declarations: [
    SidebarComponent,
    TopNavComponent
  ],
  exports: [
    SidebarComponent,
    TopNavComponent
  ]
})
export class SharedModule {}