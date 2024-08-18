using CookiesCookbook.Recipes.Ingredients;

namespace CookiesCookbook.Recipes
{
    public class Recipe
    {
        // public List<Ingredient> Ingredients { get; }
        public IEnumerable<Ingredient> Ingredients { get; }
        // public Recipe(List<Ingredient> ingredients)
        public Recipe(IEnumerable<Ingredient> ingredients)
        {
            Ingredients = ingredients;
        }
        public override string ToString()
        {
            // var steps = new List<string>();
            // foreach (var ingredient in Ingredients)
            // {
            //     steps.Add($"{ingredient.Name}. {ingredient.PreparationInstructions}");
            // }
            var steps = Ingredients.Select(ingredient => $"{ingredient.Name}. {ingredient.PreparationInstructions}");
            return string.Join(Environment.NewLine, steps);
        }
    }
}