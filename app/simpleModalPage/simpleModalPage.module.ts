import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { TinyNotificationComponent } from "./tinyNotificationComponent/tinyNotification.component";
import { TinyNotificationService } from "./tinyNotificationComponent/tinyNotification.service";
import { ModalDialogComponent } from "./modalDialogComponent/modalDialog.component";
import { SimpleModalPageComponent } from "./simpleModalPage.component";

@NgModule({
	          imports     : [BrowserModule],
	          declarations: [SimpleModalPageComponent, TinyNotificationComponent, ModalDialogComponent],
	          bootstrap   : [SimpleModalPageComponent],
	          providers   : [TinyNotificationService]
          })

export class SimpleModalPageModule {
}