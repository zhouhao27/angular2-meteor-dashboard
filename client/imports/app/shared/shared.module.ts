import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SidebarComponent } from './sidebar/sidebar.component';
import { TopNavComponent } from './topnav/topnav.component';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FormsModule
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