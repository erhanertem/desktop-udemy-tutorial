
using CookiesCookbook.App;
using CookiesCookbook.DataAccess;
using CookiesCookbook.FileFormat;
using CookiesCookbook.Recipes;

try
{
    const FileFormat Format = FileFormat.Json;
    const string FileName = "recipes";
    IStringsRepository stringsRepository = Format == FileFormat.Json ? new StringsJsonRepository() : new StringsTextualRepository();
    var FileMetadata = new FileMetadata(FileName, Format);
    var ingredientsRegister = new IngredientsRegister();

    var cookiesRecipeApp = new CookiesRecipeApp(
        new RecipesRepository(
            stringsRepository,
            ingredientsRegister),
        new RecipesConsoleUserInteraction(
            ingredientsRegister));

    cookiesRecipeApp.Run(FileMetadata.ToPath());
}
catch (Exception ex)
{
    System.Console.WriteLine("Sorry! The application experienced" + " an unexpected error and will have to close. " + "The error message: " + ex.Message);
    System.Console.WriteLine("Press any key to close.");
    System.Console.ReadKey();
}