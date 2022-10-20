import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { delay, switchMap, of } from 'rxjs';

import * as appActions from './app.actions';
import { getRules } from './app.actions';
import { AppAPI } from '../../../data/api/app.api';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private _appAPI: AppAPI) {}

  public getRules$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appActions.getRules),
      delay(3000),
      switchMap((_) =>
        this._appAPI.getRules().pipe(
          map((rules) => appActions.successGetRules({ rules })),
          catchError((_) => of(appActions.failureGetRules()))
        )
      )
    )
  );
}
