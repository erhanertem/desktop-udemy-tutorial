using CookiesCookbook.DataAccess;
// using CookiesCookbook.Recipes.Ingredients;

namespace CookiesCookbook.Recipes;

public class RecipesRepository : IRecipesRepository
{
    private readonly IStringsRepository _stringsRepository;
    private readonly IIngredientsRegister _ingredientsRegister;
    private const string Separator = ",";

    public RecipesRepository(IStringsRepository stringsRepository, IIngredientsRegister ingredientsRegister)
    {
        _stringsRepository = stringsRepository;
        _ingredientsRegister = ingredientsRegister;
    }

    // public List<Recipe> Read(string filePath)
    // {
    //     List<string> recipesFromFile = _stringsRepository.Read(filePath);
    //     var recipes = new List<Recipe>();
    //     foreach (var recipeFromFile in recipesFromFile)
    //     {
    //         var recipe = RecipeFromString(recipeFromFile);
    //         recipes.Add(recipe);
    //     }
    //     return recipes;
    // }
    public List<Recipe> Read(string filePath)
    {
        return _stringsRepository.Read(filePath).Select(RecipeFromString).ToList();
    }

    // private Recipe RecipeFromString(string recipeFromFile)
    // {
    //     var textualIds = recipeFromFile.Split(Separator);
    //     var ingredients = new List<Ingredient>();

    //     foreach (var textualId in textualIds)
    //     {
    //         var id = int.Parse(textualId);
    //         var ingredient = _ingredientsRegister.GetById(id);
    //         ingredients.Add(ingredient);
    //     }

    //     return new Recipe(ingredients);
    // }
    private Recipe RecipeFromString(string recipeFromFile)
    {
        // var ingredients = recipeFromFile.Split(Separator).Select(textualId => int.Parse(textualId)).Select(id => _ingredientsRegister.GetById(id)); //LONGER SYNTAX
        var ingredients = recipeFromFile.Split(Separator).Select(int.Parse).Select(_ingredientsRegister.GetById); //SHORTER SYNTAX
        return new Recipe(ingredients);
    }

    // public void Write(string filePath, List<Recipe> allRecipes)
    // {
    //     var recipesAsStrings = new List<string>();
    //     foreach (var recipe in allRecipes)
    //     {
    //         var allIds = new List<int>();
    //         foreach (var ingredient in recipe.Ingredients)
    //         {
    //             allIds.Add(ingredient.Id);
    //         }
    //         recipesAsStrings.Add(string.Join(Separator, allIds));
    //     }
    //     _stringsRepository.Write(filePath, recipesAsStrings);
    // }
    public void Write(string filePath, List<Recipe> allRecipes)
    {
        // TOO SHORT REFACTORING
        //     var recipesAsStrings = allRecipes
        //    .Select(recipe => string.Join(Separator, recipe.Ingredients.Select(ingredient => ingredient.Id)));
        var recipesAsStrings = allRecipes.Select(recipe =>
        {
            var allIds = recipe.Ingredients.Select(ingredient => ingredient.Id);
            return string.Join(Separator, allIds);
        });
        _stringsRepository.Write(filePath, recipesAsStrings.ToList());
    }
}