import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './side-menu.component';

@NgModule({
              imports     : [CommonModule],
              declarations: [SideMenuComponent],
              exports     : [SideMenuComponent]
          })

export class SideMenuModule {
}