namespace CookiesCookbook.DataAccess;

public interface IStringsRepository
{
    List<string> Read(string FilePath);
    void Write(string filePath, List<string> strings);
}
