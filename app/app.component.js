"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var menu_component_1 = require('./menu.component');
var search_component_1 = require('./search.component');
var notification_component_1 = require('./notification.component');
var timefilter_component_1 = require('./timefilter.component');
var menu_service_1 = require('./services/menu.service');
var router_deprecated_1 = require('@angular/router-deprecated');
var dashboard_component_1 = require('./dashboard.component');
var explore_component_1 = require('./explore.component');
var visualize_component_1 = require('./visualize.component');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/templates/app.component.html',
            styleUrls: ['app/styles/app.component.css'],
            directives: [menu_component_1.MenuComponent, search_component_1.SearchComponent, notification_component_1.NotificationComponent, timefilter_component_1.TimefilterComponent, router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [menu_service_1.MenuService, router_deprecated_1.ROUTER_PROVIDERS]
        }),
        router_deprecated_1.RouteConfig([
            {
                path: '/dashboard',
                name: 'Dashboard',
                component: dashboard_component_1.DashboardComponent,
                useAsDefault: true
            },
            {
                path: '/explore',
                name: 'Explore',
                component: explore_component_1.ExploreComponent
            },
            {
                path: '/visualize',
                name: 'Visualize',
                component: visualize_component_1.VisualizeComponent
            },
            {
                path: '/logout',
                name: 'Logout',
                component: dashboard_component_1.DashboardComponent
            }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map