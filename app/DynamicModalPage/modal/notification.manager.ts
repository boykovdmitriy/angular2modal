/**
 * Created by Boykov D. on 12/26/2016.
 */
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

@Injectable()
export class NotificationManager {
	private notificationBlock: ViewContainerRef;
	private notificationPanel: NotificationPanelComponent;

	constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

	public init(notificationBlock: ViewContainerRef) {
		this.notificationBlock = notificationBlock;
		let component          = this.createComponent(NotificationPanelComponent);
		this.notificationPanel = component.instance;
		this.notificationBlock.insert(component.hostView);
	}

	private createComponent<T>(componentType: {new (...args: any[]): T;}): ComponentRef<T> {
		let injector = ReflectiveInjector.fromResolvedProviders([], this.notificationBlock.parentInjector);
		let factory  = this.componentFactoryResolver.resolveComponentFactory(componentType);
		return factory.create(injector);
	}

	private createNotificationWithData<T>(componentType: {new (...args: any[]): T;}, data: any): ComponentRef<T> {
		let component = this.createComponent(componentType);
		Object.assign(component.instance, data);

		return component;
	}

	public showToast(header: string, description: string) {
		let component = this.createNotificationWithData<TinyNotificationComponent>(TinyNotificationComponent, {
			header     : header,
			description: description
		});
		this.notificationPanel.showNotification(component);
	}
}