// Angular.
import { ApplicationConfig, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

// Librerías de terceros.
import { provideMarkdown } from 'ngx-markdown';
import { provideTanStackQuery, QueryClient, withDevtools } from '@tanstack/angular-query-experimental';

// Rutas de la aplicación.
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes),
    provideMarkdown(),
    provideTanStackQuery(new QueryClient(), withDevtools()),
  ],
};
