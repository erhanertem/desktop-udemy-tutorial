namespace Csv.CsvReading;

public interface ICsvReader
{
    CsvData Read(string filePath);
}