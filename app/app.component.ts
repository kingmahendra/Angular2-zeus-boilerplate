import { Component } from '@angular/core';
import { MenuComponent} from './menu.component';
import { SearchComponent} from './search.component';
import { NotificationComponent} from './notification.component';
import { TimefilterComponent } from './timefilter.component'
import { MenuService } from './services/menu.service';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { DashboardComponent } from './dashboard.component';
import { ExploreComponent } from './explore.component';
import { VisualizeComponent } from './visualize.component';



@Component({
	selector:'my-app',
	templateUrl:'app/templates/app.component.html' ,
    styleUrls:['app/styles/app.component.css'],
    directives:[MenuComponent, SearchComponent,NotificationComponent,TimefilterComponent,ROUTER_DIRECTIVES],
    providers:[MenuService, ROUTER_PROVIDERS] 
})

@RouteConfig([
  {
	path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  },
   {
	path: '/explore',
    name: 'Explore',
    component: ExploreComponent
   },
    {
	path: '/visualize',
    name: 'Visualize',
    component: VisualizeComponent
   },
   {
	path: '/logout',
    name: 'Logout',
    component: DashboardComponent 
   }

])

export class AppComponent{
	 title = 'Tour of Heroes';
}