import { createReducer, on } from '@ngrx/store';
import {CounterState} from './counter.state';

import * as CounterActions from './counter.actions';

export const initialState: CounterState = {
  count: 0
}

export const counterReducer = createReducer(
  initialState,

  on(CounterActions.increment, state => {



    return {
      ...state,
      count: state.count + 1
    };
  }),

  on(CounterActions.decrement, state => {
    return {
      ...state,
      count: state.count - 1 < 0 ? 0 : state.count - 1
    };
  }),

  on(CounterActions.reset, state => {
    return {
      ...state,
      count: 0
    };
  })

);

