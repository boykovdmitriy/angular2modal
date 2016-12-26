/**
 * Created by Boykov D. on 12/26/2016.
 */

import { Routes } from '@angular/router';
import { SelectModalPageComponent } from "./SelectModalPage/selectModalPage.component";
import { DynamicModalPageComponent } from "./DynamicModalPage/dynamicModalPage.component";

export const ROUTES: Routes = [

	{
		path     : '',
		component: SelectModalPageComponent
	}, {
		path     : 'dynamic-modal',
		component: DynamicModalPageComponent
	}
];