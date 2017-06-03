import {
	Component,
	ViewEncapsulation
} from "@angular/core";
import { TinyNotificationService } from "./tinyNotificationComponent/tinyNotification.service";
import { TinyNotificationModel } from "./tinyNotificationComponent/tinyNotification.model";

@Component({
	           selector: 'simple-modal',
	           template: require('./simpleModalPage.template.html'),
	           styles  : [require('../sharedStyle/buttons.style.css'),
	                      require('../sharedStyle/inputs.style.css'),
	                      require('./simpleModalPage.style.css')],
	           encapsulation: ViewEncapsulation.Emulated
           })

export class SimpleModalPageComponent {
	private isModalDialogVisible: boolean = false;

	constructor(private notificationService: TinyNotificationService) {}

	public showToast(header: string, description: string) {
		this.notificationService.showToast(new TinyNotificationModel(header, description));
	}

	public showDialog() {
		this.isModalDialogVisible = true;
	}

	public closeModal(isConfirmed: boolean) {
		this.isModalDialogVisible = false;
		if (isConfirmed) {
			this.showToast('modal dialog', "modal dialog is confirmed");
		}
		else {
			this.showToast('modal dialog', "modal dialog is closed");
		}
	}
}