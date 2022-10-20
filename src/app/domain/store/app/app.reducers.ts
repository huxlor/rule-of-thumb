import { createReducer, on, Action } from '@ngrx/store';
import { AppState } from './app.state';

import * as appActions from './app.actions';

export const initialApp: AppState = {
  rules: null,
  isLoading: false,
  error: false,
};

const _appReducer = createReducer(
  initialApp,
  on(appActions.getRules, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(appActions.successGetRules, (state, { rules }) => {
    return {
      ...state,
      rules,
      isLoading: false,
    };
  }),
  on(appActions.failureGetRules, (state) => {
    return {
      ...state,
      isLoading: false,
      error: true,
    };
  })
);

export function AppReducers(state: AppState | undefined, action: Action) {
  return _appReducer(state, action);
}
