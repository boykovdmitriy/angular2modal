import "core-js";
import "zone.js/dist/zone";
import "zone.js/dist/long-stack-trace-zone";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

platformBrowserDynamic()
	.bootstrapModule(AppModule);