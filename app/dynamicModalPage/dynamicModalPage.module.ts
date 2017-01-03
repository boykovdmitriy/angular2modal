/**
 * Created by Boykov D. on 12/26/2016.
 */
import { BrowserModule } from "@angular/platform-browser";
import { DynamicModalPageComponent } from "./dynamicModalPage.component";
import { NgModule } from "@angular/core";
import { NotificationModule } from "./modal/notification.module";

@NgModule({
	          imports     : [BrowserModule, NotificationModule],
	          declarations: [DynamicModalPageComponent],
	          bootstrap   : [DynamicModalPageComponent],
          })
export class DynamicModalPageModule {
}