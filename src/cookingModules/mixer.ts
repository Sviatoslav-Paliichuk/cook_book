import ModuleInterface from '../common/interfaces/module'
import Ingredient from "../ingredients/ingredient";

export default class MixerModule implements ModuleInterface{
    name: string;

    constructor(){
        this.name = MixerModule.name;
    }

    getIngredient(name: string, amount: number){

    }

    loadIngredient(ingredient: Ingredient){

    }

    cook(ingredients: any, options: any){
        return true;
    }
}