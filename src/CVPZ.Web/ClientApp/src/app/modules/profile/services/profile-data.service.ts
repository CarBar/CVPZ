import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap, catchError, finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileDataService {

  constructor(
    protected _http: HttpClient,
  ) { }

  getProfile(): Observable<string> {

    const requestUrl: string = './api/profile';

    console.log(`Loading: ${requestUrl}`);

    const request: Observable<string>
        = this._http.get<string>(requestUrl);

    return request.pipe(
        tap(data => {
            console.log(data);
        }),
        //catchError(this.handleError),
        finalize(() => console.log(`Loaded: ${requestUrl}`))
    );
  }
}
