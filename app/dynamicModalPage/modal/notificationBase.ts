/**
 * Created by Boykov D. on 12/26/2016.
 */
import { Subject } from "rxjs/Rx";

export abstract class NotificationBase {
	protected closedEvent = new Subject();

	public getClosedEvent(){
		return this.closedEvent;
	}
	public abstract close(): void;
}