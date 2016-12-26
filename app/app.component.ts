/**
 * Created by Boykov D. on 12/25/2016.
 */
import {
	Component
} from '@angular/core';

@Component({
	           selector: 'body',
	           template: `
<div class="header">header</div>
<router-outlet></router-outlet>`,
	styles:[`.header{background: red; width: 100%;}`]
           })
export class AppComponent {
}