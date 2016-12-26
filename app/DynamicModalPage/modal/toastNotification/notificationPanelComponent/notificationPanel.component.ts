/**
 * Created by Boykov D. on 12/26/2016.
 */
import {
	Component,
	ViewContainerRef,
	ViewChild,
	ComponentRef,
	ViewEncapsulation
} from "@angular/core";
import { Subscription } from "rxjs/Rx";
@Component({
	           selector     : 'notification-panel',
	           template     : `
<div class="notification-panel">
	<div #notifications></div>
</div>
						`,
	           styles       : [String(require('./notificationPanel.style.css'))],
	           encapsulation: ViewEncapsulation.Emulated
           })
export class NotificationPanelComponent {
	@ViewChild('notifications', { read: ViewContainerRef }) notificationBlock: ViewContainerRef;

	public showNotification(componentRef: ComponentRef<any>, timeOut: number = 3000) {
		let toast = componentRef;
		this.notificationBlock.insert(toast.hostView);
		let subscription = toast.instance.closedEvent.subscribe(()=> {
			this.destroyComponent(toast, subscription);
		});
		setTimeout(()=> {
			toast.instance.close();
		}, timeOut);
	}

	private destroyComponent(componentRef: ComponentRef<any>, subscription: Subscription) {
		componentRef.destroy();
		subscription.unsubscribe();
	}
}