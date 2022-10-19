import { createReducer, on, Action } from '@ngrx/store';
import { AppState } from './app.state';

import * as appActions from './app.actions';

export const initialApp: AppState = {};

const _appReducer = createReducer(
  initialApp
  // on(appActions.getOffersByMerchant, (state) => {
  //   return {
  //     ...state,
  //     isLoading: true,
  //     error: false,
  //   };
  // })
);

export function AppReducers(state: AppState | undefined, action: Action) {
  return _appReducer(state, action);
}
