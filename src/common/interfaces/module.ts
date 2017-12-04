import Ingredient from "../../ingredients/ingredient";

export default interface ModuleInterface {
    name: string,
    getIngredient(name: string, amount: number),
    loadIngredient(ingredient: Ingredient)
}