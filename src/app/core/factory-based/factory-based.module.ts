import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FactoryBasedComponent } from './factory-based.component';

@NgModule({
              imports     : [CommonModule],
              declarations: [FactoryBasedComponent],
              exports     : [FactoryBasedComponent]
          })

export class FactoryBasedModule {
}