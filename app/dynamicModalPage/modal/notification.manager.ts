import {
	Injectable,
	ComponentFactoryResolver,
	ViewContainerRef,
	ReflectiveInjector,
	Type,
	ComponentRef,
} from "@angular/core";
import { TinyNotificationComponent } from "./toastNotification/tinyNotificationComponent/tinyNotification.component";
import { NotificationPanelComponent } from "./toastNotification/notificationPanelComponent/notificationPanel.component";
import {
	ModalDialogResult,
	ModalDialogBase
} from "./modalDialog.base";
import { Subject } from "rxjs";

@Injectable()
export class NotificationManager {
	private notificationBlock: ViewContainerRef;
	private notificationPanel: NotificationPanelComponent;

	constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

	public init(notificationBlock: ViewContainerRef) {
		this.notificationBlock = notificationBlock;
		const component          = this.createComponent(NotificationPanelComponent);
		this.notificationPanel = component.instance;
		this.notificationBlock.insert(component.hostView);
	}

	public showDialog<T extends ModalDialogBase>(componentType: {new (...args: any[]): T;},
	                                             header: string,
	                                             description: string): Subject<ModalDialogResult> {
		const dialog = this.createNotificationWithData(componentType, {
			header     : header,
			description: description
		});
		this.notificationBlock.insert(dialog.hostView);
		const subject = dialog.instance.getDialogState();
		const sub     = subject.subscribe(x=> {
			dialog.destroy();
			sub.unsubscribe();
		});
		return subject;
	}

	public showToast(header: string, description: string, timeOut: number = 3000) {
		const component = this.createNotificationWithData<TinyNotificationComponent>(TinyNotificationComponent, {
			header     : header,
			description: description
		});
		this.notificationPanel.showNotification(component, timeOut);
	}

	private createComponent<T>(componentType: {new (...args: any[]): T;}): ComponentRef<T> {
		const injector = ReflectiveInjector.fromResolvedProviders([], this.notificationBlock.parentInjector);
		const factory  = this.componentFactoryResolver.resolveComponentFactory(componentType);
		return factory.create(injector);
	}

	private createNotificationWithData<T>(componentType: {new (...args: any[]): T;}, data: any): ComponentRef<T> {
		const component = this.createComponent(componentType);
		Object.assign(component.instance, data);

		return component;
	}
}