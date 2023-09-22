using CookiesCookbook.Recipes.Ingredients;

public class IngredientsRegister : IIngredientsRegister
{
    public IEnumerable<Ingredient> All { get; } = new List<Ingredient> {
        new WheatFlour(),
        new SpeltFlour(),
        new Butter(),
        new Chocolate(),
        new Sugar(),
        new Cardamon(),
        new Cinnamon(),
        new CocoaPowder()
    };

    public Ingredient GetById(int id)
    {
        // foreach (var ingredient in All)
        // {
        //     if (ingredient.Id == id)
        //     {
        //         return ingredient;
        //     }
        // }
        // return null;
        var allIngredientWithGivenId = All.Where(ingredient => ingredient.Id == id);
        if (allIngredientWithGivenId.Count() > 1)
        {
            throw new InvalidOperationException($"More than one ingredients share the same Id equal to {id}.");
        }
        // if (All.Select(ingredient => ingredient.Id).Distinct().Count() != All.Count())
        // {
        //     throw new InvalidOperationException($"Some ingredients have duplicated IDs.");
        // }
        return allIngredientWithGivenId.FirstOrDefault();
    }
}



