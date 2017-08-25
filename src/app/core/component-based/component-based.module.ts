import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentBasedComponent } from './component-based.component';

@NgModule({
              imports     : [CommonModule],
              declarations: [ComponentBasedComponent],
              exports     : [ComponentBasedComponent],
          })
export class ComponentBasedModule {
}