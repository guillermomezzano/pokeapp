//definimos la configuración global de la aplicación

import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // Configuración para optimizar la detección de cambios en Angular
    provideZoneChangeDetection({ eventCoalescing: true }),
    // Proveedor de Router
    provideRouter(routes),
    // Proveedor de HttpClient (reemplaza al antiguo HttpClientModule)
    provideHttpClient(),
    importProvidersFrom(BrowserAnimationsModule),
  ],
};
