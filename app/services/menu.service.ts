import { Injectable } from '@angular/core';
import { MENUS } from './mock-menu';

@Injectable()
export class MenuService {
  getMenus() {
   return Promise.resolve(MENUS);
  }

}