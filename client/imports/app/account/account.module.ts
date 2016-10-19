import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent, RegisterComponent } from './';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 
@NgModule({
    // imports: [CommonModule, RouterModule],
    imports: [
        RouterModule,
        FormsModule,
    	ReactiveFormsModule
    ],
    declarations: [LoginComponent,RegisterComponent],
    exports: [LoginComponent,RegisterComponent]
})

export class AccountModule { }
