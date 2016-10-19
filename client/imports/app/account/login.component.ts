import { Component , OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Meteor } from 'meteor/meteor';

import template from './login.component.html';

@Component({
	// moduleId: module.id,
	selector: 'login-component',
	template
})

export class LoginComponent implements OnInit { 
	loginForm: FormGroup;
	
	constructor(
    private formBuilder: FormBuilder
  ) {}

	ngOnInit() {
		// TODO: email validation
		this.loginForm = this.formBuilder.group({
			email: ['', Validators.required],
			password: ['', Validators.required]
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
				}
			})
		}
	}
}
