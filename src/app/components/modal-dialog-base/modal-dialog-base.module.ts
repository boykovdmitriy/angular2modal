import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalDialogBaseComponent } from './modal-dialog-base.component';

@NgModule({
              imports     : [CommonModule],
              declarations: [ModalDialogBaseComponent],
              exports     : [ModalDialogBaseComponent]
          })
export class ModalDialogBaseModule {
}