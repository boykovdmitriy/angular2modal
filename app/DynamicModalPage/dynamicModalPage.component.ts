/**
 * Created by Boykov D. on 12/26/2016.
 */
import {
	ViewEncapsulation,
	Component,
	ViewContainerRef,
	ViewChild,
	OnInit
} from "@angular/core";
import { NotificationManager } from "./modal/notification.manager";

@Component({
	           selector     : 'body',
	           template     : `
				<button (click)="show()">Show Toast</button>
				<section #notificationBlock></section>
				`
           })
export class DynamicModalPageComponent implements OnInit {
	@ViewChild('notificationBlock', { read: ViewContainerRef }) notificationBlock: ViewContainerRef;

	constructor(private notificationManager: NotificationManager) { }

	public show() {
		this.notificationManager.showToast("header", "toasdfsdfsdfsdfsst");
	}

	public ngOnInit(): void {
		this.notificationManager.init(this.notificationBlock);
	}
}