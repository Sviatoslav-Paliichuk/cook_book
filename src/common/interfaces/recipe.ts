import moduleInterface from './module';
import Ingredient from '../../ingredients/ingredient';

export default interface RecipeInterface {
    title: string,
    availableOptions:object,
    buildReceipSequence(options: any): [object]
    isAvailable(modules:moduleInterface[], ingredients:Ingredient[])
}