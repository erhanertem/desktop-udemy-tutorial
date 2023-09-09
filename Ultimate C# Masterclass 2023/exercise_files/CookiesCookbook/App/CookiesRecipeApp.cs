using CookiesCookbook.Recipes;

namespace CookiesCookbook.App;

//MAIN APP CLASS THAT IS RESPONSIBLE OF THE APP FLOW
public class CookiesRecipeApp
{
    //> CLASS RESPONSIBLE OF REPOSITORY INTERRACTION - METHODS
    // private readonly RecipesRepository? _recipesRepository;
    // private readonly RecipesRepository? _recipesRepository = new RecipesRepository(); //REGULAR INSTANTIATION OF A CLASS
    // private readonly RecipesRepository? _recipesRepository = new(); //TARGTE-TYPE NEW EXPRESSION - SHORTHAND INSTANTIATION OF A CLASS
    private readonly IRecipesRepository _recipesRepository;
    //> CLASS RESPONSIBLE FOR USER INTERRACTION - METHODS
    // private readonly RecipesConsoleUserInteraction? _recipesConsoleUserInteraction;
    //WHAT IF THE CLIENT WANTS TO SWITCH TO A UI RATHER THAN A CONSOLE INTERRACTION. THE LOGIC SHOULD NOT BE STRICTLY BOUND TO A CLASS LIKE THAT @ HIGHER LEVEL
    // private readonly RecipesConsoleUserInteraction? _recipesConsoleUserInteraction = new();
    // private readonly IRecipesUserInteraction _recipesUserInteraction = new RecipesConsoleUserInteraction();
    private readonly IRecipesUserInteraction _recipesUserInteraction;

    //> CONSTRUCTOR FUNCTION
    public CookiesRecipeApp(
        IRecipesRepository recipesRepository,
        IRecipesUserInteraction recipesConsoleUserInteraction
    )
    {
        _recipesRepository = recipesRepository;
        _recipesUserInteraction = recipesConsoleUserInteraction;
    }

    public void Run(string filePath)
    {
        //READ EXISTING RECIPES FROM THE FILE/REPOSITORY
        var allRecipes = _recipesRepository.Read(filePath);
        //PRINT THE RED FILE ON THE SCREEN
        _recipesUserInteraction.PrintExistingRecipes(allRecipes);
        //ASK USER TO CREATE A RECIPE
        _recipesUserInteraction.PromptToCreateRecipe();
        //LET USER SELECT INGREDIENTS
        var ingredients = _recipesUserInteraction.ReadIngredientsFromUser();
        //IF COUNT OF INGREDIENTS >0
        if (ingredients.Count() > 0) //IEnumerable collection requires linq library count method
        {
            //CREATE A NEW RECIPE TO SAVE
            var recipe = new Recipe(ingredients);
            allRecipes.Add(recipe);
            //UPLOAD TO THE REPOSITORY
            _recipesRepository.Write(filePath, allRecipes);
            //SHOW SUCCESS MESSAGE
            _recipesUserInteraction.ShowMessage("Recipe Added");
            _recipesUserInteraction.ShowMessage(recipe.ToString());
        }
        else
        {
            //WARN USER TO COMPOSE
            _recipesUserInteraction.ShowMessage("No ingredients have been selected. " + "Recipe will not be saved.");
        };
        _recipesUserInteraction.Exit();
    }
}
