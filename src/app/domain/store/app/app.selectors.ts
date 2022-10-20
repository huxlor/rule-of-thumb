import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './app.state';

export const getAppFeatureState = createFeatureSelector<AppState>('app');

export const selectRules = createSelector(
  getAppFeatureState,
  (state: AppState) => state.rules
);
