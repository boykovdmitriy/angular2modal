import { Subject } from "rxjs";

export abstract class ModalDialogBase {
	public abstract getDialogState(): Subject<ModalDialogResult>;
}

export enum ModalDialogResult{
	Opened,
	Confirmed,
	Closed
}
