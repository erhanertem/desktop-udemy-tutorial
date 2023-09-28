using Csv.CsvReading;
using Csv.Interface;

namespace Csv.NewSolution;

public partial class FastTableDataBuilder : ITableDataBuilder
{
    public ITableData Build(CsvData csvData)
    {
        var resultRows = new List<FastRow>();

        foreach (var row in csvData.Rows)
        {
            // var newRowData = new Dictionary<string, object>();

            var newRow = new FastRow();

            for (int columnIndex = 0; columnIndex < csvData.Columns.Length; ++columnIndex)
            {
                var column = csvData.Columns[columnIndex];
                string valueAsString = row[columnIndex];

                if (string.IsNullOrEmpty(valueAsString))
                {
                    // return null;
                    continue;
                }
                else if (valueAsString == "TRUE")
                {
                    // return true;
                    newRow.AssignCell(column, true);
                }
                else if (valueAsString == "FALSE")
                {
                    // return false;
                    newRow.AssignCell(column, false);
                }
                else if (valueAsString.Contains(".") && decimal.TryParse(valueAsString, out var valueAsDecimal))
                {
                    // return valueAsDecimal;
                    newRow.AssignCell(column, valueAsDecimal);
                }
                else if (int.TryParse(valueAsString, out var valueAsInt))
                {
                    // return valueAsInt;
                    newRow.AssignCell(column, valueAsInt);
                }
                else
                    // return valueAsString;
                    newRow.AssignCell(column, valueAsString);

                // object value = ConvertValueToTargetType(valueAsString);
                // if (value is not null)
                // {
                //     newRowData[column] = value;
                // }
            }

            // resultRows.Add(new FastRow(newRowData));
            resultRows.Add(newRow);
        }

        return new FastTableData(csvData.Columns, resultRows);
    }
}
