/**
 * Created by Boykov D. on 12/25/2016.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { DynamicModalPageModule } from "./DynamicModalPage/dynamicModalPage.module";
import { SelectModalPageComponent } from "./SelectModalPage/selectModalPage.component";
import {
	RouterModule
} from "@angular/router";
import { ROUTES } from "./app.routers";

@NgModule({
	          imports     : [
		          BrowserModule,
		          DynamicModalPageModule,
		          RouterModule.forRoot(ROUTES, { useHash: false }),
	          ],
	          declarations: [AppComponent, SelectModalPageComponent],
	          bootstrap   : [AppComponent],
          })
export class AppModule {
}