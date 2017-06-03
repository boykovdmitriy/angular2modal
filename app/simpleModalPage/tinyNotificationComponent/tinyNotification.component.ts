import {
	Component,
	ViewEncapsulation
} from "@angular/core";
import { TinyNotificationModel } from "./tinyNotification.model";
import { TinyNotificationService } from "./tinyNotification.service";

@Component({
	           selector     : "notifications",
	           template     : require('./tinyNotification.template.html'),
	           styles       : [require('./tinyNotification.style.css')],
	           encapsulation: ViewEncapsulation.Emulated
           })

export class TinyNotificationComponent {
	notifications: Set<TinyNotificationModel> = new Set<TinyNotificationModel>();

	constructor(private _notificationService: TinyNotificationService) {
		this._notificationService.getNotification()
		    .subscribe((notification: TinyNotificationModel)=> {
			    this.notifications.add(notification);
			    setTimeout(()=> {
				    this.closeNotification(notification);
			    }, 5000);
		    });
	}

	public closeNotification(notification: TinyNotificationModel) {
		this.notifications.delete(notification);
	}
}