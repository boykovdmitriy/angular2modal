/**
 * Created by Boykov D. on 1/2/2017.
 */
import { Subject } from "rxjs";

export abstract class ModalDialogBase {
	public abstract getDialogState(): Subject<ModalDialogResult>;
}

export enum ModalDialogResult{
	Opened,
	Confirmed,
	Closed
}
