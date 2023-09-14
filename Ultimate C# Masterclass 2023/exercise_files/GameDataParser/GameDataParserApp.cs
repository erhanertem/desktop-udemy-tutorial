using System.Text.Json;

var app = new GameDataParserApp();
var logger = new Logger("log.txt");

try
{
    app.Run();
}
catch (Exception ex)
{
    System.Console.WriteLine(
        "Sorry! The application has experienced an unexpected error " +
        "and will have to be closed.");
    logger.Log(ex);
}
System.Console.WriteLine("Press any key to close");
Console.ReadKey();

public class GameDataParserApp
{
    public void Run()
    {
        string? fileName = ReadValidFilePathFromUser();
        var fileContents = File.ReadAllText(fileName);
        List<VideoGame> videoGames = DeserializeVideoGamesFrom(fileName, fileContents);
        PrintGames(videoGames);
    }

    private static void PrintGames(List<VideoGame> videoGames)
    {
        if (videoGames.Count > 0)
        {
            System.Console.WriteLine();
            System.Console.WriteLine("Loaded games are:");
            foreach (var videoGame in videoGames)
            {
                System.Console.WriteLine(videoGame);
            }
        }
        else
        {
            System.Console.WriteLine("No games are present in the input file.");
        }
    }

    private static List<VideoGame> DeserializeVideoGamesFrom(string? fileName, string fileContents)
    {
        try
        {
            return JsonSerializer.Deserialize<List<VideoGame>>(fileContents);
        }
        catch (JsonException ex)
        {
            var originalFgColor = Console.ForegroundColor;
            var originalBgColor = Console.BackgroundColor;
            Console.ForegroundColor = ConsoleColor.Red;
            Console.BackgroundColor = ConsoleColor.White;
            System.Console.WriteLine($"JSON in {fileName} file was not " + $"in a valid format. JSON body: ");
            Console.BackgroundColor = originalBgColor;
            System.Console.WriteLine(fileContents);
            Console.ForegroundColor = originalFgColor;

            throw new JsonException($"{ex.Message} The file is: {fileName}", ex);
        }
    }

    private static string? ReadValidFilePathFromUser()
    {
        bool isFilePathValid = false;
        var fileName = default(string);

        do
        {
            System.Console.WriteLine("Enter the name of the file you want to read: ");
            fileName = Console.ReadLine();
            if (fileName is null)
            {
                System.Console.WriteLine("The file name cannot be null.");
            }
            else if (fileName == string.Empty)
            {
                System.Console.WriteLine("The file name cannot be empty.");
            }
            else if (!File.Exists(fileName))
            {
                System.Console.WriteLine("The file does not exist.");
            }
            else
            {
                isFilePathValid = true;
            }
        } while (!isFilePathValid);
        // do
        // {
        //     try
        //     {
        //         System.Console.WriteLine("Enter the name of the file you want to read: ");
        //         fileName = Console.ReadLine();
        //         fileContents = File.ReadAllText(fileName);
        //         isFileRead = true;
        //     }
        //     catch (ArgumentNullException ex) { System.Console.WriteLine("The file name cannot be null."); }
        //     catch (ArgumentException ex) { System.Console.WriteLine("The file name cannot be empty."); }
        //     catch (FileNotFoundException ex) { System.Console.WriteLine("The file does not exist."); }
        // } while (!isFileRead);
        return fileName;
    }
}

