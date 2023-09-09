using CookiesCookbook.Recipes;
using CookiesCookbook.Recipes.Ingredients;

namespace CookiesCookbook.App;

//MAIN APP CLASS THAT IS RESPONSIBLE OF THE APP FLOW
public class RecipesConsoleUserInteraction : IRecipesUserInteraction
{
    private readonly IngredientsRegister _ingredientsRegister;
    //CONSTRUCTOR
    public RecipesConsoleUserInteraction(IngredientsRegister ingredientsRegister)
    {
        _ingredientsRegister = ingredientsRegister;
    }


    public IEnumerable<Ingredient> ReadIngredientsFromUser()
    {
        bool shallStop = false;
        var ingredients = new List<Ingredient>();
        while (!shallStop)
        {
            System.Console.WriteLine("Add an ingredient by its ID" + "or type anything else if finished.");
            var userInput = Console.ReadLine();
            if (int.TryParse(userInput, out int id))
            {
                var selectedIngredient = _ingredientsRegister.GetById(id);
                if (selectedIngredient is not null)
                {
                    ingredients.Add(selectedIngredient);
                }
            }
            else { shallStop = true; }
        }
        return ingredients;
    }

    public void PromptToCreateRecipe()
    {
        System.Console.WriteLine("Create a new cookie recipe!" + "Available ingreidents are:");
        foreach (var ingredient in _ingredientsRegister.All)
        {
            System.Console.WriteLine(ingredient);
        }
    }

    public void ShowMessage(string message)
    {
        Console.WriteLine(message);
    }

    public void Exit()
    {
        Console.WriteLine("Press any key to close.");
        Console.ReadKey();
    }

    public void PrintExistingRecipes(IEnumerable<Recipe> allRecipes)
    {
        if (allRecipes.Count() > 0) //Count() method comes from the LINQ library
        {
            System.Console.WriteLine("Existing recipes are:" + Environment.NewLine);
            var counter = 1;
            foreach (var recipe in allRecipes)
            {
                Console.WriteLine($"*****{counter}*****");
                System.Console.WriteLine(recipe);
                System.Console.WriteLine(); //empty line
                ++counter;
            }
        }
    }
}