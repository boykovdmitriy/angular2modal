/**
 * Created by Boykov D. on 12/26/2016.
 */
import { NgModule }      from '@angular/core';
import { NotificationManager } from "./notification.manager";
import { TinyNotificationComponent } from "./toastNotification/tinyNotificationComponent/tinyNotification.component";
import { NotificationPanelComponent } from "./toastNotification/notificationPanelComponent/notificationPanel.component";

@NgModule({
	          declarations   : [TinyNotificationComponent,NotificationPanelComponent],
	          entryComponents: [TinyNotificationComponent,NotificationPanelComponent],
	          providers      : [NotificationManager]
          })
export class NotificationModule {
}