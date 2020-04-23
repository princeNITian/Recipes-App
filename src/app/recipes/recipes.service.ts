import { Injectable } from "@angular/core";
import { Recipe } from './recipe.model';
@Injectable({
  providedIn: "root",
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: "r1",
      title: "Pizza",
      imageUrl:
        "https://image.shutterstock.com/image-photo/homemade-baked-pizza-tomatoes-arugula-260nw-1612798216.jpg",
      ingredients: ["Cheese", "Butter", "Onion", "Garlic"],
    },
    {
      id: "r2",
      title: "Cake",
      imageUrl:
        "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2018/02/easter-nest-cake.jpg?itok=-ZAZCCss",
      ingredients: ["Vanila", "Chocolate", "Strawberry"],
    },
    {
      id: "r3",
      title: "Pizza",
      imageUrl:
        "https://image.shutterstock.com/image-photo/homemade-baked-pizza-tomatoes-arugula-260nw-1612798216.jpg",
      ingredients: ["Cheese", "Butter", "Onion", "Garlic"],
    },
    {
      id: "r4",
      title: "Cake",
      imageUrl:
        "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2018/02/easter-nest-cake.jpg?itok=-ZAZCCss",
      ingredients: ["Vanila", "Chocolate", "Strawberry"],
    },
    {
      id: "r5",
      title: "Pizza",
      imageUrl:
        "https://image.shutterstock.com/image-photo/homemade-baked-pizza-tomatoes-arugula-260nw-1612798216.jpg",
      ingredients: ["Cheese", "Butter", "Onion", "Garlic"],
    },
    {
      id: "r6",
      title: "Cake",
      imageUrl:
        "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2018/02/easter-nest-cake.jpg?itok=-ZAZCCss",
      ingredients: ["Vanila", "Chocolate", "Strawberry"],
    },
    {
      id: "r7",
      title: "Pizza",
      imageUrl:
        "https://image.shutterstock.com/image-photo/homemade-baked-pizza-tomatoes-arugula-260nw-1612798216.jpg",
      ingredients: ["Cheese", "Butter", "Onion", "Garlic"],
    },
    {
      id: "r8",
      title: "Cake",
      imageUrl:
        "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2018/02/easter-nest-cake.jpg?itok=-ZAZCCss",
      ingredients: ["Vanila", "Chocolate", "Strawberry"],
    },
  ];
  constructor() {}

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find((recipe) => {
        return recipe.id === recipeId;
      }),
    };
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter((recipe) => {
      return recipe.id !== recipeId;
    });
  }
}
