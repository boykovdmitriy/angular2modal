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
	           template: require('./dynamicModalPage.template.html'),
	           styles  : [require('./dynamicModalPage.style.css'),
	                      require('../sharedStyle/buttons.style.css'),
	                      require('../sharedStyle/inputs.style.css')],
	           encapsulation: ViewEncapsulation.Emulated
           })
export class DynamicModalPageComponent implements OnInit {
	@ViewChild('notificationBlock', { read: ViewContainerRef }) notificationBlock: ViewContainerRef;

	constructor(private notificationManager: NotificationManager) { }

	public ngOnInit(): void {
		this.notificationManager.init(this.notificationBlock);
	}

	public showToast(header: string, description: string) {
		this.notificationManager.showToast(header, description, 3000);
	}

	public showDialog(header: string, description: string) {
		this.notificationManager.showDialog(ModalDialogComponent, header, description)
		    .subscribe((x: ModalDialogResult)=> {
			    if (x == ModalDialogResult.Confirmed) {
				    this.showToast(header, "modal dialog is confirmed");
			    }
			    else {
				    this.showToast(header, "modal dialog is closed");
			    }
		    });
	}
}