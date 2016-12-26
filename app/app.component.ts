/**
 * Created by Boykov D. on 12/25/2016.
 */
import {
	Component,
	ViewEncapsulation
} from '@angular/core';

@Component({
	           selector     : 'body',
	           template     : `
<div class="header">
	<h1>Angular2 modal examples</h1>
</div>
<router-outlet></router-outlet>`,
	           styles       : [require('./app.style.css')],
	           encapsulation: ViewEncapsulation.None
           })
export class AppComponent {
}