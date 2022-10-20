import { createAction, props } from '@ngrx/store';
import { Rules } from '../../../core/models/app.model';

export const getRules = createAction('[APP] Get Actual Rules');

export const successGetRules = createAction(
  '[APP] Success Get Actual Rules',
  props<{ rules: Rules }>()
);

export const failureGetRules = createAction('[APP] Failure Get Actual Rules');
