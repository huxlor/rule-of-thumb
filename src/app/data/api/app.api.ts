import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rules } from '../../core/models/app.model';

@Injectable({
  providedIn: 'root',
})
export class AppAPI {
  public URL: string = '/assets/data/data.json';

  constructor(private _http: HttpClient) {}

  public getRules(): Observable<Rules> {
    return this._http.get<Rules>(this.URL);
  }
}
