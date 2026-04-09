import { ApplicationConfig } from '@angular/core';
import { provideRouter, withNavigationErrorHandler } from '@angular/router';

import { routes } from './routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withNavigationErrorHandler((error) => {
        console.error('Navigation error:', error);
        // Handle navigation errors, e.g., redirect to error page
      }),
    ),
  ],
};
