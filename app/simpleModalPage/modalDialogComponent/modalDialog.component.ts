import {
	Component,
	Input,
	Output,
	EventEmitter,
	ViewEncapsulation
} from "@angular/core";

@Component({
	           selector     : 'modal-dialog',
	           template     : require('./modalDialog.template.html'),
	           styles       : [require('./modalDialog.style.css'),
	                           require('../../sharedStyle/buttons.style.css')],
	           encapsulation: ViewEncapsulation.Emulated
           })

export class ModalDialogComponent {
	@Input() header: string;
	@Input() description: string;
	@Output() isConfirmed: EventEmitter<boolean> = new EventEmitter<boolean>();

	private confirm() {
		this.isConfirmed.emit(true);
	}

	private close() {
		this.isConfirmed.emit(false);
	}
}