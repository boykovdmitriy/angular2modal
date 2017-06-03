import { Routes } from '@angular/router';
import { SelectModalPageComponent } from "./selectModalPage/selectModalPage.component";
import { DynamicModalPageComponent } from "./dynamicModalPage/dynamicModalPage.component";
import { SimpleModalPageComponent } from "./simpleModalPage/simpleModalPage.component";

export const ROUTES: Routes = [

	{
		path     : '',
		component: SelectModalPageComponent
	}, {
		path     : 'dynamic-modal',
		component: DynamicModalPageComponent
	}, {
		path     : 'simple-modal',
		component: SimpleModalPageComponent
	}
];