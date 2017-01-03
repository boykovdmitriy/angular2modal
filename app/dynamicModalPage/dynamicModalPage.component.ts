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
import {
	ModalDialogComponent
} from "./modal/modalDialogComponent/modalDialog.component";
import { ModalDialogResult } from "./modal/modalDialog.base";

@Component({
	           selector: 'dynamic-modal',
	           template: `
				<button class="simple-button"  (click)="showToast()">Show Toast</button>
				<button class="simple-button"  (click)="showDialog()">Show Dialog</button>
				<section #notificationBlock></section>
				`,
	           styles  : [require('../sharedStyle/buttons.style.css')]
           })
export class DynamicModalPageComponent implements OnInit {
	@ViewChild('notificationBlock', { read: ViewContainerRef }) notificationBlock: ViewContainerRef;

	constructor(private notificationManager: NotificationManager) { }

	public ngOnInit(): void {
		this.notificationManager.init(this.notificationBlock);
	}

	public showToast() {
		this.notificationManager.showToast("header", "toasdfsdfsdfsdfsst", 3000);
	}

	public showDialog() {
		this.notificationManager.showDialog(ModalDialogComponent, "header", "toasdfsdfsdfsdfsst")
		    .subscribe((x: ModalDialogResult)=> {
			    if (x == ModalDialogResult.Confirmed) {
				    this.notificationManager.showToast("header", "modal dialog is confirmed", 3000);
			    }
			    else {
				    this.notificationManager.showToast("header", "modal dialog is closed", 3000);
			    }
		    });
	}
}