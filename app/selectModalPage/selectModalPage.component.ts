import { Component } from "@angular/core";
@Component({
	           selector: "select-modal-page",
	           template: `
<ul>
	<li><a routerLink="/simple-modal">Modals with simple component loader</a></li>
	<li><a routerLink="/dynamic-modal">Modals with dynamic component loader</a></li>
</ul>
`
           })

export class SelectModalPageComponent {
}