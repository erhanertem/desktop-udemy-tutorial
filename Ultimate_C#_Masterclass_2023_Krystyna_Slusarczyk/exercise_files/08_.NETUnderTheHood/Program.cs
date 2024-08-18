// // LESSON 08 - .NET UNDER THE HOOD
// var erhan = new Person { Name = "Erhan", Age = 34 };
// var number = 5;
// AddOneToNumber(number);
// AddOneToPersonsAge(ref erhan);
// // AddOneToPersonsAge(erhan);
// System.Console.WriteLine("Number now is " + number);
// System.Console.WriteLine("Erhan's age now is " + erhan.Age);
// Console.ReadKey();
// void AddOneToNumber(int number)
// {
//     ++number;
// }
// void AddOneToPersonsAge(ref Person person)
// {
//     person = new Person { Name = "Selma", Age = 23 };
// }
// // Person AddOneToPersonsAge(Person person)
// // {
// //     return new Person { Name = person.Name, Age = person.Age + 1 };
// // }
// class Person
// {
//     public required string Name { get; init; }
//     public required int Age { get; init; }
// }
// void AddOneToPersonsAge(Person person)
// {
//     ++person.Age;
// }
// struct Person
// {
//     public required string Name { get; init; }
//     public required int Age { get; set; }
// }

//> REF KEYWORD & OUT KEYWORD
// var number = 5;
// AddOneToNumber(ref number);
// System.Console.WriteLine("Number now is " + number);
// Console.ReadKey();
// void AddOneToNumber(ref int number)
// {
//     ++number;
// }

// // int otherNumber;
// int otherNumber = 15;
// MethodWithOutParameter(out otherNumber);
// Console.WriteLine("Other number is " + otherNumber);
// Console.ReadKey();

// void MethodWithOutParameter(out int number)
// {
//     number = 10;
// }

// var numbers = new[] { 10, -8, 2, 12, -17 };
// // foreach (var item in GetOnlyPositive(numbers, out int nonPositiveCount)) //OR INITIALIZE IT RIGHT IN THE ARGUMENT FIELD
// int nonPositiveCount; //INITIALZIE IT HERE 
// foreach (var item in GetOnlyPositive(numbers, out nonPositiveCount)) //OR INITIALIZE IT RIGHT IN THE ARGUMENT FIELD
// {
//     System.Console.WriteLine(item);
// }
// System.Console.WriteLine("Count of non positive: " + nonPositiveCount);
// static List<int> GetOnlyPositive(int[] numbers, out int countOfNonPositive)
// {
//     countOfNonPositive = 0;
//     var result = new List<int>();
//     foreach (var number in numbers)
//     {
//         if (number > 0) { result.Add(number); }
//         else
//         {
//             countOfNonPositive++;
//         }
//     }
//     return result;
// }

// public static class RefModifierFastForwardToSummerExercise
// {
//     public static void FastForwardToSummer(ref DateTime date)
//     {
//         var firstDayOfSummer = new DateTime(date.Year, 6, 21);
//         if (date < firstDayOfSummer)
//         {
//             date = firstDayOfSummer;
//         }
//     }
// }

// //> REF WITH REFERENCE TYPES
// var number = 5;
// AddOneToNumber(ref number);
// System.Console.WriteLine("Number now is " + number);

// var list = new List<int> { 1, 2, 3, };
// AddOneToList(ref list);

// System.Console.WriteLine("List is " + String.Join(", ", list));

// Console.ReadKey();

// void AddOneToList(ref List<int> numbers)
// {
//     numbers = null;
//     // numbers.Add(1);
// }

// void AddOneToNumber(ref int number)
// {
//     ++number;
// }

// //> UNIFIED TYPE SYSTEM (OBJECT)
// var variousObjects = new List<object> {
//     1, 1.5, new DateTime(2024,6,1), "hello", new Person { Name = "Anna", Age = 61}
// };

// foreach (var item in variousObjects)
// {
//     System.Console.WriteLine(item.GetType().Name);
// }
// Console.ReadKey();
// class Person
// {
//     public required string Name { get; init; }
//     public required int Age { get; set; }
// }

// //> MEMORY LEAKS
// bool someCondition = true;
// if (someCondition)
// {
//     var someClassInstance = new SomeClass();
// }

// var someClassInstance = new SomeClass();
// Console.WriteLine(
//     "Count of all instances is now " + SomeClass.CountOfInstances
// );
// Console.ReadKey();

// public class SomeClass
// {
//     private static List<SomeClass> _allExistingInstances = new List<SomeClass>();

//     public static int CountOfInstances => _allExistingInstances.Count;
//     //CONSTRUCTOR
//     public SomeClass()
//     {
//         _allExistingInstances.Add(this);
//     }
// }

// //> DESTRUCTOR
// for (var i = 0; i < 5; ++i)
// {
//     var person = new Person
//     {
//         Name = "Shivay",
//         Age = 37
//     };
// }
// GC.Collect(); //FORCE GC COLLECTOR TO START
// System.Console.WriteLine("Ready to close.");
// Console.ReadKey();

// class Person
// {
//     public string Name { get; init; }
//     public int Age { get; init; }

//     // //>finalizer syntax
//     // protected override void Finalize()
//     // {
//     //     Console.WriteLine($"Person called {Name} is being destructed.");
//     // }
//     //>destructor syntax
//     ~Person()
//     {
//         Console.WriteLine($"Person called {Name} is being destructed.");
//     }
// }

// //> DISPOSE METHOD @ IDISPOSABLE
// const string filePath = "file.txt";

// //NOTE: Causes runtime error as the disposal function has been delayed to the end of the file. 
// // using var writer = new FileWriter(filePath);
// // writer.Write("some text");
// // writer.Write("some other text");

// using (var writer = new FileWriter(filePath))
// {
//     writer.Write("some text");
//     writer.Write("some other text");
// }; //we are using this because we would need the dispose method executed right within this block instead of suspending till the end of the app.

// using var reader = new SpecificLineFromTextFileReader(filePath);
// var thirdLine = reader.ReadLineNumber(3);
// var fourthLine = reader.ReadLineNumber(4);

// Console.WriteLine("3rd Line is : " + thirdLine);
// Console.WriteLine("4th Line is : " + fourthLine);
// Console.WriteLine("Press any key to continue");
// Console.ReadKey();

// public class FileWriter : IDisposable
// {
//     private readonly StreamWriter _streamWriter;
//     public FileWriter(string filePath)
//     {
//         _streamWriter = new StreamWriter(filePath, true); //append true flag
//     }

//     public void Write(string text)
//     {
//         _streamWriter.WriteLine(text);
//         _streamWriter.Flush(); //write to the file and clears the buffer
//     }

//     public void Dispose()
//     {
//         _streamWriter.Dispose();
//     }
// }

// public class SpecificLineFromTextFileReader : IDisposable
// {
//     private readonly StreamReader _streamReader;
//     public SpecificLineFromTextFileReader(string filePath)
//     {
//         _streamReader = new StreamReader(filePath);
//     }

//     public string ReadLineNumber(int lineNumber)
//     {

//         _streamReader.DiscardBufferedData();
//         _streamReader.BaseStream.Seek(0, SeekOrigin.Begin);

//         for (var i = 0; i < lineNumber - 1; ++i)
//         {
//             _streamReader.ReadLine();
//         }
//         return _streamReader.ReadLine();
//     }

//     public void Dispose()
//     {
//         _streamReader.Dispose();
//     }
// }

//> READING / WRITING CSV FILES
//CSV READERS FOR C#
// CVSHELPER , A FAST CSV READER, TEXTFIELDPARSER, SYLVAN, ETC.
// const string path = "sampleData.csv";
// const string path = "D:\\CODING\\REPO ARCHIEVE\\desktop-udemy-tutorial-files\\Ultimate C# Masterclass 2023\\exercise_files\\08_.NETUnderTheHood\\bin\Debug\\net7.0\\sampleData.csv";
const string path = @"D:\CODING\REPO ARCHIEVE\desktop-udemy-tutorial-files\Ultimate C# Masterclass 2023\exercise_files\08_.NETUnderTheHood\bin\Debug\net7.0\sampleData.csv";
var data = new CsvReader().Read(path);
Console.ReadKey();

public class CsvReader
{
    public CsvData Read(string path)
    {
        using var streamReader = new StreamReader(path);
        const string Separator = ",";
        var columns = streamReader.ReadLine().Split(Separator);

        var rows = new List<string[]>();
        while (!streamReader.EndOfStream)
        {
            var cellsInRow = streamReader.ReadLine().Split(Separator);
            rows.Add(cellsInRow);
        }
        return new CsvData(columns, rows);
    }
}

public class CsvData
{
    public string[] Columns { get; }
    public IEnumerable<string[]> Rows { get; }

    public CsvData(string[] columns, IEnumerable<string[]> rows)
    {
        Columns = columns;
        Rows = rows;
    }
}