import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgOutletBasedComponent } from './ng-outlet-based.component';

@NgModule({
              imports     : [CommonModule],
              declarations: [NgOutletBasedComponent],
              exports     : [NgOutletBasedComponent]
          })
export class NgOutletBasedModule {
}