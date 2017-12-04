export default interface RecipeStep {
    ingredients: [{title: string, amount: number}],
    operation: string,
    options: object
}