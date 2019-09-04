import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Gado-gado',
      imageUrl: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/05/gado-gado-salad.jpg?jtok=MTTSriC8',
      ingredients: ['Lontong', 'Sawi', 'Bumbu Kecap', 'Tauge']
    },
    {
      id: 'r2',
      title: 'Pizza Margerita',
      imageUrl: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--51643_11.jpg?itok=I_hF8vFL',
      ingredients: ['Tepung', 'Roti', 'Keju', 'Tomat']
    },
    {
      id: 'r3',
      title: 'Bread Pudding',
      imageUrl: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--424712_11.jpg?itok=ufdVm1H4',
      ingredients: ['Roti', 'Susu', 'Telur', 'Butter']
    }
  ]
  constructor() { }

  getAllRecipes(){
    return [...this.recipes];
  }
  getRecipe(recipeId:string){
    return{
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })
    }
  }
  deleteRecipe(recipeId:string){
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
    // var all = this.recipes.filter(function(item){
    //   return item.id != recipeId
    // })
    // this.recipes = all;
  }
}
