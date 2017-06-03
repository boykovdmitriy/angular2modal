import { Injectable } from "@angular/core";
import { TinyNotificationModel } from "./tinyNotification.model";
import { Subject } from "rxjs";

@Injectable()
export class TinyNotificationService {
	private notifications: Subject<TinyNotificationModel> = new Subject<TinyNotificationModel>();

	public getNotification(): Subject<TinyNotificationModel> {
		return this.notifications;
	}

	public showToast(info: TinyNotificationModel) {
		this.notifications.next(info);
	}
}