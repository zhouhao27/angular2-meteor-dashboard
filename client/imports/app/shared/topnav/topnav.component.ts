import { Component } from '@angular/core';
import template from './topnav.component.html';

@Component({
  // moduleId: module.id,
  selector: 'topnav-component',
  template
})

export class TopNavComponent {
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
		alert('toggle');
		// var sidebar: any = $('#sidebar');
		// var mainContainer: any = $('.main-container');
		// sidebar.toggleClass('sidebar-left-zero');
		// mainContainer.toggleClass('main-container-ml-zero');
	}
}
