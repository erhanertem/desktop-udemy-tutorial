namespace CookiesCookbook.DataAccess;

public class StringsTextualRepository : StringsRepository
{
    private static readonly string Separator = Environment.NewLine;
    protected override string StringsToText(List<string> strings) => string.Join(Separator, strings);
    protected override List<string> TextToStrings(string fileContents) => fileContents.Split(Separator).ToList();
}