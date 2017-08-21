import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SideMenuModule } from './components/side-menu/side-menu.module';
import { ROUTES } from './app.routes';
import { HomeModule } from "./core/home/home.module";

@NgModule({
              imports     : [
                  BrowserModule,
                  RouterModule.forRoot(ROUTES),
                  SideMenuModule,
                  HomeModule],
              declarations: [AppComponent],
              bootstrap   : [AppComponent]
          })

export class AppModule {
}