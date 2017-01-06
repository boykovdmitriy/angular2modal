/**
 * Created by Boykov D. on 12/26/2016.
 */
import { Component } from "@angular/core";
@Component({
	           selector: "select-modal-page",
	           template: `
<ul>
	<li><a routerLink="/simple-modal">Модальные окна с простым добавлением компонентов в template</a></li>
	<li><a routerLink="/dynamic-modal">Модальные окна с динамическим рендерингом компонентов</a></li>
</ul>
`
           })

export class SelectModalPageComponent {
}