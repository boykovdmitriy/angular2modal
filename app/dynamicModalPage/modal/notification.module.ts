import { NgModule }      from '@angular/core';
import { NotificationManager } from "./notification.manager";
import { TinyNotificationComponent } from "./toastNotification/tinyNotificationComponent/tinyNotification.component";
import { NotificationPanelComponent } from "./toastNotification/notificationPanelComponent/notificationPanel.component";
import { ModalDialogComponent } from "./modalDialogComponent/modalDialog.component";

@NgModule({
	          declarations   : [TinyNotificationComponent, NotificationPanelComponent, ModalDialogComponent],
	          entryComponents: [TinyNotificationComponent, NotificationPanelComponent, ModalDialogComponent],
	          providers      : [NotificationManager]
          })
export class NotificationModule {
}