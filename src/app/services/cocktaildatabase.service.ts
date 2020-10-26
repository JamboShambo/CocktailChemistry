import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable} from 'rxjs'; 
import { catchError,tap} from 'rxjs/operators';

import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';

import { ICocktail } from '../interfaces/cocktail';


@Injectable({
  providedIn: 'root'
})

export class CocktailDatabaseService {

  cocktailsDataCollection:AngularFirestoreCollection<ICocktail>;

  cocktailsData:Observable<ICocktail[]>;

  allCocktailsData:ICocktail[];

  errorMessage: string;
  
  constructor(private _http:HttpClient, private _afs:AngularFirestore) {
    //connect to the database
    this.cocktailsDataCollection=_afs.collection<ICocktail>("cocktails_data");
  }

  getCocktailDataFirebase():Observable<ICocktail[]> {
    this.cocktailsData = this.cocktailsDataCollection.valueChanges( {idField:"id"});
    this.cocktailsData.subscribe(data => console.log("getCocktailDataFirebase:"+ JSON.stringify(data)))
    return this.cocktailsData;
  }

  addCocktailDataFirebase(cocktail:ICocktail): void {
    this.cocktailsDataCollection.add(JSON.parse(JSON.stringify(cocktail)));
  }

  delCocktailData(cocktailId: string): void {
  }

  private handleError(err:HttpErrorResponse) {
    console.log('CocktailDBApiservice: ' + err.message);
    return Observable.throw(err.message);
  }
}


