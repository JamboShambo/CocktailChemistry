import { Component, OnInit } from '@angular/core';
import { CocktailDatabaseService } from '../services/cocktaildatabase.service';
import { ICocktail, cocktail } from '../interfaces/cocktail';

@Component({
  selector: 'app-cocktaillist',
  templateUrl: './cocktaillist.component.html',
  styleUrls: ['./cocktaillist.component.css'],
  providers: [CocktailDatabaseService]
})
export class CocktaillistComponent implements OnInit {
  cocktailsDataDatabase: ICocktail[];
  show="show";

  constructor(private _CocktailDatabaseService:CocktailDatabaseService) { }

  ngOnInit() {
    this._CocktailDatabaseService.getCocktailDataFirebase().subscribe(cocktailsDataDatabase =>
      { this.cocktailsDataDatabase = cocktailsDataDatabase });
  }

  addTheCocktail(name:string, image:string): boolean {
    let tempCocktail:ICocktail;
    tempCocktail=new cocktail(name,image);
    this._CocktailDatabaseService.addCocktailDataFirebase(tempCocktail);
    return false;
  }


}
