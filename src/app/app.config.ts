import { ApplicationConfig, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { authInterceptorInterceptor } from './interceptor/authInterceptor/auth-interceptor.interceptor';
import { errorInterceptor } from './interceptor/ErrorInterceptor/error.interceptor';

registerLocaleData(localeFr, 'fr-FR')


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch(), withInterceptors([authInterceptorInterceptor, errorInterceptor])),

    { provide: LOCALE_ID, useValue: 'fr-FR' }
  ]
};
