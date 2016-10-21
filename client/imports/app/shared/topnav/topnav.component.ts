import { Component } from '@angular/core';
import { Meteor } from 'meteor/meteor';
import { Router } from '@angular/router';

import template from './topnav.component.html';

declare var $:any;

@Component({
  // moduleId: module.id,
  selector: 'topnav-component',
  template
})

export class TopNavComponent {
	constructor(private router: Router) {}

	changeTheme(color: string): void {
		var link: any = $('<link>');
		link
			.appendTo('head')
			.attr({type : 'text/css', rel : 'stylesheet'})
			.attr('href', 'themes/app-'+color+'.css');
	}

	rtl(): void {
		var body: any = $('body');
		body.toggleClass('rtl');
	}

	sidebarToggler(): void  {
		var sidebar: any = $('#sidebar');
		var mainContainer: any = $('.main-container');
		sidebar.toggleClass('sidebar-left-zero');
		mainContainer.toggleClass('main-container-ml-zero');
	}

	logout(): void {
		// TODO: prompt
		Meteor.logout( () => {
			this.router.navigate( ['/'] );
		});		
	}
}
