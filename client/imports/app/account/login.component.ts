import { Component , OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Meteor } from 'meteor/meteor';
import { Router } from '@angular/router';

import { EmailValidator } from './email.validator';
import template from './login.component.html';
import style from './account.component.scss';

@Component({
	// moduleId: module.id,
	selector: 'login-component',
	template,
	styles: [style]
})

export class LoginComponent implements OnInit { 
	loginForm: FormGroup;
	
	constructor(
    private formBuilder: FormBuilder,
		private router: Router
  ) {}

	ngOnInit() {
		// TODO: email validation
		this.loginForm = this.formBuilder.group({
			email: ['',
				Validators.compose([
					Validators.required,
					EmailValidator.validFormat
				]) 				
			],
			password: ['', 
				[Validators.required, Validators.minLength(5)]
			]
		})
	}

	login() {
		if ( this.loginForm.valid ) {
			console.log(this.loginForm.value)
			Meteor.loginWithPassword(this.loginForm.value.email, 
				this.loginForm.value.password,
				(error) => {
				if ( error ) {
					alert(error);
				} else {
					alert('login success');
					this.router.navigate( ['/dashboard/home'] );
				}
			})
		}
	}
}
