using Csv.CsvReading;

namespace Csv.Interface;

public interface ITableDataBuilder
{
    ITableData Build(CsvData csvData);
}