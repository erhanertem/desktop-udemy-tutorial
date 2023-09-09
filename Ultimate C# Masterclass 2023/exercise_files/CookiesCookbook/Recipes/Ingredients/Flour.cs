using CookiesCookbook.Recipes.Ingredients;

namespace CookiesCookbook.Recipes
{
    public abstract class Flour : Ingredient
    {
        // public override string PreparationInstructions => $"Sieve. Add to other ingredients.";
        public override string PreparationInstructions => $"Sieve. {base.PreparationInstructions}";
    }
}