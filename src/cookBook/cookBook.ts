import steak from '../recipes/steak';
import coffee from '../recipes/coffee';

import RecipeInterface from '../common/interfaces/recipe';
import RecipeStep from '../common/interfaces/recipeStep';

export default class CookBook {
    recipes:[RecipeInterface] = [new steak(), new coffee()];

    getRecipesList():string[] {
        return this.recipes.map((recipe:RecipeInterface):string => {
            return recipe.title;
        });
    }

    getRecipeAvailableOptions(title:string):object {
        const selectedRecipe:RecipeInterface = this.recipes.find((recipe:RecipeInterface) => {
            return recipe.title === title;
        });
        return selectedRecipe.availableOptions;
    }

    getCookSequence(title:string, options:object):[object] {
        const neededRecipe = this.recipes.find((recipe) => {
            return recipe.title === title;
        });
        return neededRecipe.buildReceipSequence(options);
    }
}
