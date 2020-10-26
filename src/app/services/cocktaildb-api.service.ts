import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable} from 'rxjs'; 
import { catchError,tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CocktailDBApiService {

  private _siteURL="https://www.thecocktaildb.com/";
  private _key='api/json/v1/1/search.php?s=';
  private _randomCocktail="https://www.thecocktaildb.com/api/json/v1/1/random.php";
  
  constructor(private _http:HttpClient) {
  }

  getCocktaildata(cocktailName): Observable<CocktailDBResponse> {
    return this._http.get<CocktailDBResponse>(this._siteURL + this._key + cocktailName)
    .pipe(
      tap(data => console.log('Cocktaildata/error' + JSON.stringify(data))
      ),
      catchError(this.handleError)
    );
  }

  getCocktailrandom(): Observable<CocktailDBResponse> {
    return this._http.get<CocktailDBResponse>(this._randomCocktail)
    .pipe(
      tap(data => console.log('Cocktaildata/error' + JSON.stringify(data))
      ),
      catchError(this.handleError)
    );
  }
  

  private handleError(err:HttpErrorResponse) {
    console.log('CocktailDBApiservice: ' + err.message);
    return Observable.throw(err.message);
  }
}


