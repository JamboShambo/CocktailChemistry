import { Component } from '@angular/core';
import { CocktailDBApiService } from './services/cocktaildb-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CocktailDBApiService]
})
export class AppComponent {
  cocktailData: CocktailDBResponse;
  errorMessage: any;

  constructor(private _cocktailDBService: CocktailDBApiService) {
  }
  
  getCocktailDetails(cocktailName:string) : boolean {
    this._cocktailDBService.getCocktaildata(cocktailName).subscribe(
      cocktailData => {
        this.cocktailData = cocktailData;
        console.log('Cocktail name:' + this.cocktailData.strDrink);
      },
      error => this.errorMessage = <any>error
    );
    return false;
    }

    getCocktailRandom() : boolean {
      this._cocktailDBService.getCocktailrandom().subscribe(
        cocktailData => {
          this.cocktailData = cocktailData;
          console.log('Cocktail name:' + this.cocktailData.strDrink);
        },
        error => this.errorMessage = <any>error
      );
      return false;
      }
  }
