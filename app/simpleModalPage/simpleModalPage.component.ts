/**
 * Created by Boykov D. on 1/3/2017.
 */
import { Component } from "@angular/core";
import { TinyNotificationService } from "./tinyNotificationComponent/tinyNotification.service";
import { TinyNotificationModel } from "./tinyNotificationComponent/tinyNotification.model";

@Component({
	           selector: 'css-modal',
	           template: `
<button class="simple-button"  (click)="showToast()">Show Toast</button>
<button class="simple-button"  (click)="showDialog()">Show Dialog</button>
<notifications></notifications>
<modal-dialog *ngIf="isModalDialogVisible" [header]="'header'" [description]="'description'" (isConfirmed)="closeModal($event)"></modal-dialog>`
	           ,
	           styles  : [require('../sharedStyle/buttons.style.css')]
           })

export class SimpleModalPageComponent {
	private isModalDialogVisible: boolean = false;

	constructor(private notificationService: TinyNotificationService) {}

	public showToast() {
		this.notificationService.showToast(new TinyNotificationModel('header', 'description'));
	}

	public showDialog() {
		this.isModalDialogVisible = true;
	}

	public closeModal(isConfirmed: boolean) {
		this.isModalDialogVisible = false;
	}
}