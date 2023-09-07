

// using Pizzeria;
// using System.Text.Json;

// Exercise exercise = new Exercise();
// var results = exercise.ProcessAll(new List<string> { "bobcat", "wolverine", "grizzly" });
// foreach (var item in results)
// {
//     System.Console.WriteLine(item);
// }
// Console.ReadKey();

// public class Exercise
// {
//     public List<string> ProcessAll(List<string> words)
//     {
//         var stringsProcessors = new List<StringsProcessor>
//                 {
//                     new StringsTrimmingProcessor(),
//                     new StringsUppercaseProcessor()
//                 };

//         List<string> result = words;
//         foreach (var stringsProcessor in stringsProcessors)
//         {
//             result = stringsProcessor.Process(result);

//         }
//         return result;
//     }
// }

// public class StringsProcessor
// {
//     public List<string> Process(List<string> strings)
//     {
//         var result = new List<string>();
//         foreach (var text in strings)
//         {
//             result.Add(ProcessSingle(text));
//         }
//         return result;
//     }

//     protected virtual string ProcessSingle(string word) => word;
// }

// public class StringsTrimmingProcessor : StringsProcessor
// {
//     protected override string ProcessSingle(string word)
//     {
//         // int length = (int)Math.Floor(word.Length * 0.5);
//         return word.Substring(0, (int)(word.Length * 0.5));
//     }
// }

// public class StringsUppercaseProcessor : StringsProcessor
// {
//     protected override string ProcessSingle(string word) => word.ToUpper();
// }

// *******************************************
// var numbers = new List<int> { 1, 4, 6, -1, 12, 44, -8, -19 };
// bool shallAddPositiveOnly = true;

// NumbersSumCalculator calculator = shallAddPositiveOnly ? new PositiveNumbersSumCalculator() : new NumbersSumCalculator();

// int sum = calculator.Calculate(numbers);
// System.Console.WriteLine($"Sum is: {sum}");
// Console.ReadKey();

// public class NumbersSumCalculator
// {
//     public int Calculate(List<int> numbers)
//     {
//         int sum = 0;
//         foreach (var number in numbers)
//         {
//             if (ShallBeAdded(number))
//             {
//                 sum += number;
//             }
//         }
//         return sum;
//     }
//     protected virtual bool ShallBeAdded(int number) => true;
// }

// public class PositiveNumbersSumCalculator : NumbersSumCalculator
// {
//     protected override bool ShallBeAdded(int number) => number > 0;
//     // public int Calculate(List<int> numbers)
//     // {
//     //     int sum = 0;
//     //     foreach (var number in numbers)
//     //     {
//     //         if (number > 0) { sum += number; }
//     //     }
//     //     return sum;
//     // }
// }

// // ****************************************

// Cheddar cheddar1 = new Cheddar();
// System.Console.WriteLine(cheddar1.PublicMethod());
// System.Console.WriteLine(cheddar1.Name);
// Ingredient mozzy = new Mozzarellax();
// System.Console.WriteLine(mozzy.PublicMethod());
// System.Console.WriteLine(mozzy.Name);
// System.Console.WriteLine("!!" + mozzy);
// Console.ReadKey();

// //BASE CLASS
// public abstract class Ingredient
// {
//     public abstract void Prepare();
//     public int PublicField;
//     public virtual string? Name { get; }
//     public string PublicMethod() => "This method is PUBLIC in Ingredient Class";
//     protected string ProtectedMethod() => "This method is PROTECTED in Ingredient Class";
//     // private string PrivateMethod() => "This method is PRIVATE in Ingredient Class";
// }
// //1ST DEPTH DERIVED CLASS
// public abstract class Cheese : Ingredient
// {

// }
// //2ND LEVEL DERVIED CLASS
// public class Cheddar : Cheese
// {
//     public override void Prepare() => {
//         System.Console.WriteLine("I am PREPARING CHEDDAR NOW!");
//     }
// public override string Name => "Cheddar cheese";
// public int AgedForMonths { get; }
// public void UseMethodsFromBaseClass()
// {
//     System.Console.WriteLine(PublicMethod());
//     System.Console.WriteLine(ProtectedMethod()); //WORKS INSIDE THE DERIVED CLASS
//                                                  // System.Console.WriteLine(PrivateMethod()); //DOES NOT WORK
// }
// }

// public class ItalianFoodItem { }



// public sealed class Mozzarellax : Cheese
// {
//     public override string Name => "Amorella";
//     public bool IsLight { get; }
// }

// // ********************************************************************

// var person = new Person
// {
//     FirstName = "John",
//     LastName = "Smith",
//     YearOfBirth = 1972
// };

// var asJson = JsonSerializer.Serialize(person);
// Console.WriteLine("As JSON:");
// Console.WriteLine(asJson);

// var personJson =
//     "{\"FirstName\":\"John\",\"LastName\":\"Smith\",\"YearOfBirth\":1972}";

// var personFromJson = JsonSerializer.Deserialize<Person>(personJson);

// var numbers = new List<int> { 1, 4, 6, -1, 12, 44, -8, -19 };
// bool shallAddPositiveOnly = false;

// NumbersSumCalculator calculator =
//     shallAddPositiveOnly ?
//     new PositiveNumbersSumCalculator() :
//     new NumbersSumCalculator();

// int sum = calculator.Calculate(numbers);
// Console.WriteLine("Sum is: " + sum);

// Console.ReadKey();

// public class Person
// {
//     public string FirstName { get; set; }
//     public string LastName { get; set; }
//     public int YearOfBirth { get; set; }
// }

