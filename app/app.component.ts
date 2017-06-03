import {
	Component,
	ViewEncapsulation
} from '@angular/core';
import 'style-loader!css-loader!font-awesome/css/font-awesome.min.css';

@Component({
	           selector     : 'body',
	           template     : `
<div class="header">
	<a class="header-title" routerLink="/">
		<h1>Angular2 modal examples</h1>
	</a>
</div>
<router-outlet></router-outlet>`,
	           styles       : [require('./app.style.css')],
	           encapsulation: ViewEncapsulation.None
           })
export class AppComponent {
}