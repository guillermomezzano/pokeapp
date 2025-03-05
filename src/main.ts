// crea aplicacion de angular pate de appComponent y usa providers de appConfig

import { bootstrapApplication } from '@angular/platform-browser';
//  importamos de app.config.ts; allí estarán configuradas las rutas y HttpClient.
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
