import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './interceptor/auth-interceptor';
import { logginInterceptor } from './interceptor/loggin-interceptor';
import { errorInterceptor } from './interceptor/error-interceptor';
import { loadingInterceptor } from './interceptor/loading-interceptor';

import { provideTanStackQuery, QueryClient } from '@tanstack/angular-query-experimental';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),

    provideHttpClient(
      withInterceptors([
        authInterceptor,
        logginInterceptor,
        errorInterceptor,
        loadingInterceptor
      ])
    ),

    provideTanStackQuery(new QueryClient())

   

    
  ]
};
