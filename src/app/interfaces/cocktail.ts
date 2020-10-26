export interface Cocktail {
}
export interface ICocktail {
    strDrink: string;
    strDrinkThumb: string;
    id: string;

}

export class cocktail implements ICocktail {
    strDrink: string;
    strDrinkThumb: string;
    id: string;

    constructor(name: string,image: string) {
        this.strDrink = name;
        this.strDrinkThumb = image;
    }
}