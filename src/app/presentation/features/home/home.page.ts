import { Component, OnInit } from '@angular/core';
import { AppFacade } from '../../../facades/app.facade';
import { Observable } from 'rxjs';
import { Rules } from '../../../core/models/app.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public rules$!: Observable<Rules | null>;

  constructor(private _appFacade: AppFacade) {}

  ngOnInit(): void {
    this._getRules();
    this._setValues();
  }

  private _getRules() {
    this._appFacade.getRules();
  }

  private _setValues() {
    this.rules$ = this._appFacade.rules$;
  }
}
