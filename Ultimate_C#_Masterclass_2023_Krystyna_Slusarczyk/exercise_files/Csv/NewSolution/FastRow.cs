namespace Csv.NewSolution;

public partial class FastTableDataBuilder
{
    // private object ConvertValueToTargetType(string value)
    // {
    //     if (string.IsNullOrEmpty(value))
    //     {
    //         return null;
    //     }
    //     if (value == "TRUE")
    //     {
    //         return true;
    //     }
    //     if (value == "FALSE")
    //     {
    //         return false;
    //     }
    //     if (value.Contains(".") && decimal.TryParse(value, out var valueAsDecimal))
    //     {
    //         return valueAsDecimal;
    //     }
    //     if (int.TryParse(value, out var valueAsInt))
    //     {
    //         return valueAsInt;
    //     }
    //     return value;
    // }

    public class FastRow
    {
        // private Dictionary<string, object> _data;
        // public FastRow(Dictionary<string, object> data)
        // {
        //     _data = data;
        // }
        // public object GetAtColumn(string columnName)
        // {
        //     if (_data.ContainsKey(columnName))
        //     {
        //         return _data[columnName];
        //     }
        //     return null;
        // }

        private Dictionary<string, int> _intsData = new();
        private Dictionary<string, decimal> _decimalsData = new();
        private Dictionary<string, bool> _boolsData = new();
        private Dictionary<string, string> _stringsData = new();

        public void AssignCell(string columnName, int value)
        {
            _intsData[columnName] = value;
        }
        public void AssignCell(string columnName, decimal value)
        {
            _decimalsData[columnName] = value;
        }
        public void AssignCell(string columnName, bool value)
        {
            _boolsData[columnName] = value;
        }
        public void AssignCell(string columnName, string value)
        {
            _stringsData[columnName] = value;
        }

        public object GetAtColumn(string columnName)
        {
            if (_intsData.ContainsKey(columnName))
            {
                return _intsData[columnName];
            }
            if (_decimalsData.ContainsKey(columnName))
            {
                return _decimalsData[columnName];
            }
            if (_boolsData.ContainsKey(columnName))
            {
                return _boolsData[columnName];
            }
            if (_stringsData.ContainsKey(columnName))
            {
                return _stringsData[columnName];
            }
            return null;
        }
    }
}
