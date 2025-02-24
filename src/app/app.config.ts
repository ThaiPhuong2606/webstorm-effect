import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStore } from '@ngrx/store';

import {counterReducer} from './ngrx/counter/counter.reducer';
import {provideHttpClient} from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';

import * as BookEffects from './ngrx/book/book.effects';
import {bookReducer} from './ngrx/book/book.reducers';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideAnimationsAsync(),
    provideStore({
        counter: counterReducer,
        book: bookReducer
    }),
    provideEffects(BookEffects)]
};
