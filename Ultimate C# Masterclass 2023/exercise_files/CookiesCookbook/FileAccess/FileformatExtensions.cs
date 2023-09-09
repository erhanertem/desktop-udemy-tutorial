namespace CookiesCookbook.FileFormat;

public static class FileformatExtensions
{
    public static string AsFileExtension(this FileFormat fileFormat) => fileFormat == FileFormat.Json ? "json" : "txt";
}
