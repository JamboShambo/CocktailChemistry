import { Component, OnInit, Input } from '@angular/core';
import { CocktailDatabaseService } from '../services/cocktaildatabase.service';
import { ICocktail } from '../interfaces/cocktail';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.css'],
  providers: [CocktailDatabaseService]

})
export class CocktailComponent implements OnInit {
  @Input() cocktailDataDatabase:ICocktail;
  cocktailImageWith:number=300;

  constructor(private _CocktailDatabaseService:CocktailDatabaseService) { }

  ngOnInit() {
  }

  deleteCocktail(cocktailId: string){
    this._CocktailDatabaseService.delCocktailData(cocktailId);
    this._CocktailDatabaseService.cocktailsDataCollection.doc(cocktailId).delete();
  }

}
