import { Component } from '@angular/core';


@Component({
	selector:'my-search',
	templateUrl:'app/templates/search.component.html' ,
    styleUrls:['app/styles/search.component.css'],
})

export class SearchComponent{
	
	searchtext:string;
}