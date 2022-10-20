import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Rules } from '../core/models/app.model';

import * as appSelectors from '../domain/store/app/app.selectors';
import * as appActions from '../domain/store/app/app.actions';

@Injectable({ providedIn: 'root' })
export class AppFacade {
  public rules$: Observable<Rules | null>;

  constructor(private _store: Store) {
    this.rules$ = this._store.select(appSelectors.selectRules);
  }

  public getRules() {
    this._store.dispatch(appActions.getRules());
  }
}
