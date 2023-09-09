namespace CookiesCookbook.DataAccess;

public class StringsJsonRepository : StringsRepository
{
    protected override string StringsToText(List<string> strings) => JsonSerializer.Serialize(strings);
    protected override List<string> TextToStrings(string fileContents) => JsonSerializer.Deserialize<List<string>>(fileContents);
}
