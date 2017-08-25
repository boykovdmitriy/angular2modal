import { Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { ComponentBasedComponent } from './core/component-based/component-based.component';
import { FactoryBasedComponent } from './core/factory-based/factory-based.component';
import { NgOutletBasedComponent } from './core/ng-outlet-based/ng-outlet-based.component';

export const ROUTES: Routes = [
    {
        path     : '',
        component: HomeComponent
    }, {
        path     : 'component-based',
        component: ComponentBasedComponent
    }, {
        path     : 'factory-based',
        component: FactoryBasedComponent
    }, {
        path     : 'ng-outlet-based',
        component: NgOutletBasedComponent
    }
];