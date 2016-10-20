import { Component , OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Accounts } from 'meteor/accounts-base';

import { PasswordValidator } from './password.validator';
import { EmailValidator } from './email.validator';
import template from './register.component.html';

@Component({
	// moduleId: module.id,
	selector: 'register-component',
	template
})

export class RegisterComponent implements OnInit {
	registerForm: FormGroup

	constructor(private formBuilder: FormBuilder) {}

	// TODO: email validate, repeat has to be the same as password,
	// style
	ngOnInit() {
		this.registerForm = this.formBuilder.group({
			name: ['',
				[Validators.required, Validators.minLength(5), Validators.maxLength(20)]
			],
			email: ['',
				[Validators.required, EmailValidator.validFormat]
			],
			password: ['',
				[Validators.required, Validators.minLength(5)]
			],
			repeat: ['']
		},{validator: PasswordValidator.passwordMatch})
	}

	register() {
		if ( this.registerForm.valid ) {
			let credentials = {
				name: this.registerForm.value['name'], 
				email: this.registerForm.value['email'],
        password: this.registerForm.value['password'] 
			}

			Accounts.createUser(credentials, (error) => {
        if (error) {          
          alert(error);
        }
        else {
          alert("User created");
        }
      });
		}
	}
}
