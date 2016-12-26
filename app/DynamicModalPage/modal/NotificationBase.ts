/**
 * Created by Boykov D. on 12/26/2016.
 */
import { Subject } from "rxjs/Rx";

export abstract class NotificationBase {
	public closedEvent = new Subject();

	public abstract close(): void;
}