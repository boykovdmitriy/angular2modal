import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentBasedComponent } from './component-based.component';
import { ModalDialogBaseModule } from '../../components/modal-dialog-base/modal-dialog-base.module';

@NgModule({
              imports     : [
                  CommonModule,
                  ModalDialogBaseModule
              ],
              declarations: [ComponentBasedComponent],
              exports     : [ComponentBasedComponent],
          })
export class ComponentBasedModule {
}