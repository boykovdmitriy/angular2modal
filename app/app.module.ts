import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { DynamicModalPageModule } from "./dynamicModalPage/dynamicModalPage.module";
import { SelectModalPageComponent } from "./selectModalPage/selectModalPage.component";
import {
	RouterModule
} from "@angular/router";
import { ROUTES } from "./app.routers";
import { SimpleModalPageModule } from "./simpleModalPage/simpleModalPage.module";

@NgModule({
	          imports     : [
		          BrowserModule,
		          DynamicModalPageModule,
		          RouterModule.forRoot(ROUTES, { useHash: false }),
		          SimpleModalPageModule
	          ],
	          declarations: [AppComponent, SelectModalPageComponent],
	          bootstrap   : [AppComponent],
          })
export class AppModule {
}