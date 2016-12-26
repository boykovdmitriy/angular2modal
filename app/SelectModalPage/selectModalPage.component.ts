/**
 * Created by Boykov D. on 12/26/2016.
 */
import { Component } from "@angular/core";
@Component({
			selector:"select-modal-page",
			template: `
<ul>
	<li><a routerLink="/css-modal">Модальные окнa средствами css</a></li>
	<li><a routerLink="/js-modal">Модальные окнa с ручным редактированием dom</a></li>
	<li><a routerLink="/dynamic-modal">Модальные окна с динамическим рендерингом средствами Angular2</a></li>
	<li><a routerLink="/static-modal">Модальные окна обычный компонентный подход</a></li>
</ul>
`
           })

export class SelectModalPageComponent{}