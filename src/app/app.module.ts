import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SideMenuModule } from './components/side-menu/side-menu.module';
import { ROUTES } from './app.routes';
import { HomeModule } from "./core/home/home.module";
import { ComponentBasedModule } from './core/component-based/component-based.module';
import { FactoryBasedModule } from "./core/factory-based/factory-based.module";
import { NgOutletBasedModule } from './core/ng-outlet-based/ng-outlet-based.module';

@NgModule({
              imports     : [
                  BrowserModule,
                  RouterModule.forRoot(ROUTES),
                  SideMenuModule,
                  HomeModule,
                  ComponentBasedModule,
                  FactoryBasedModule,
                  NgOutletBasedModule
              ],
              declarations: [AppComponent],
              bootstrap   : [AppComponent]
          })

export class AppModule {
}