import { Component, OnInit } from '@angular/core';
import { MenuService } from './services/menu.service';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';

@Component({
	selector:'my-menu',
  directives:[ROUTER_DIRECTIVES],
	templateUrl:'app/templates/menu.component.html',
	styleUrls:['app/styles/menu.component.css']

}

export class MenuComponent{
  menus:Menu[];
  constructor(private menuService:MenuService){

  }
  ngOnInit(){
    this.getMenus();
  }

  getMenus() {
    this.menuService.getMenus().then(menus => this.menus = menus);
   }
}