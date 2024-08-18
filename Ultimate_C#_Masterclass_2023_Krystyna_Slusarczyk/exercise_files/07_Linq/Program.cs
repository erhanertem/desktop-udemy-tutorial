// LESSON 07 LINQ

// // >DEFERRED EXECUTION

// var words = new List<string> { "a", "bb", "ccc", "dddd" };

// // var wordsShorterThan2Letters = words.Where(word => word.Length < 2);
// var wordsShorterThan2Letters = words.Where(word => word.Length < 2).ToList();

// System.Console.WriteLine("First Iteration");
// foreach (var word in wordsShorterThan2Letters)
// {
//     System.Console.WriteLine(word);
// }
// words.Add("e");
// System.Console.WriteLine("Second Iteration");
// foreach (var word in wordsShorterThan2Letters)
// {
//     System.Console.WriteLine(word);
// }

// var numbers = new int[] { 1, 2, 3, 4, 5, 6 };
// var oddnumbers = numbers.Where(number => number % 2 == 1);
// foreach (var num in oddnumbers)
// {
//     System.Console.WriteLine(num);
// }

// Console.ReadKey();

// //> ANY
// var numbers = new[] { 5, 9, 2, 12, 6 };
// bool isAnyLargerThan10 = numbers.Any(number => number > 10);
// System.Console.WriteLine(isAnyLargerThan10);
// Console.ReadKey();

// //> ALL
// var numbers = new[] { 5, 9, 2, 12, 6 };
// bool isAllLargerThan0 = numbers.All(number => number > 0);
// System.Console.WriteLine(isAllLargerThan0);
// Console.ReadKey();

// public class Exercise
// {
//     public static bool IsAnyWordWhiteSpace(List<string> words) => words.Any(word => word.All(character => char.IsWhiteSpace(character)));
// }

// //> COUNT
// var numbers = new[] { 5, 9, 2, 12, 6 };
// int CountAllLargerThan5 = numbers.Count(number => number > 10);
// System.Console.WriteLine(CountAllLargerThan5);
// Console.ReadKey();

// //> CONTAINS
// var numbers = new[] { 5, 9, 2, 12, 6 };
// bool Is5Present = numbers.Contains(5);
// System.Console.WriteLine(Is5Present);
// var names = new[] { "Tom", "Jack", "Martha" };
// bool IsTomPresent = names.Contains("Tom");
// System.Console.WriteLine(IsTomPresent);
// Console.ReadKey();

// //> ORDERBY
// var numbers = new[] { 5, 9, 2, 12, 6 };
// var orderedNumbers = numbers.OrderBy(number => number);
// foreach (var item in orderedNumbers)
// {
//     System.Console.WriteLine(item);
// }

// //>FIRST LAST
// var numbers = new[] { 2, 5, 9, 2, 12, 16, 15 };
// var numberf = numbers.First();
// var numberfwp = numbers.First(number => number % 2 == 1);

// var numbers = new[] { 2, 5, 9, 2, 12, 16, 15 };
// var numberl = numbers.Last();
// var numberlwp = numbers.Last(number => number % 2 == 0);
// System.Console.WriteLine($"{numberf} {numberfwp} {numberl} {numberlwp}");
// Console.ReadKey();

// //> WHERE
// var numbers = new[] { 2, 5, 9, 2, 12, 16, 15 };
// var evenNumbers = numbers.Where(number => number % 2 == 0);
// foreach (var item in evenNumbers)
// {
//     System.Console.WriteLine(item);
// }
// Console.ReadKey();

// //> DISTINCT
// var numbers = new[] { 2, 5, 9, 2, 12, 16, 15 };
// var distinctNumbers = numbers.Distinct();
// foreach (var item in distinctNumbers)
// {
//     System.Console.WriteLine(item);
// }
// Console.ReadKey();

// public static IEnumerable<DateTime> GetFridaysOfYear(int year, IEnumerable<DateTime> dates)
// {
//     return dates.Distinct().Where(date => date.DayOfWeek == DayOfWeek.Friday && date.Year == year);
// }

// //> SELECT
// var numbers = new[] { 2, 5, 9, 2, 12, 16, 15 };

// var n = new[] { 2, 3, 4 };

// var doubledNumbers = numbers.Select(number => number * 2);
// foreach (var item in doubledNumbers)
// {
//     System.Console.WriteLine(item);
// }

// var words = new[] { "little", "brown", "fox" };
// var toUpperCase = words.Select(word => word.ToUpper());
// foreach (var item in toUpperCase)
// {
//     System.Console.WriteLine(item);
// }
// Console.ReadKey();

// IEnumerable<string> numbersAsStrings = numbers.Select(number => number.ToString());

// //> AVERAGE
// var listsOfNumbers = new List<List<int>>
// {
//     new List<int> { 15, 68, 20, 12, 19, 8, 55 },
//     new List<int> { 12, 1, 3, 4, -19, 8, 7, 6 },
//     new List<int> { 5, -6, -2, -12, -10, 7 }
// };

// var result = listsOfNumbers.Select(listOfNumbers => new
// {
//     Count = listOfNumbers.Count(),
//     Average = listOfNumbers.Average()
// })
// .OrderByDescending(countAndAverage => countAndAverage.Average)
// .Select(countAndAverage => $"Count is: {countAndAverage.Count}, " + $"Average is: {countAndAverage.Average}");

// System.Console.WriteLine(string.Join(Environment.NewLine, result));
// Console.ReadKey();

// var listsOfNumbers = new List<List<int>>
// {
//     new List<int> { 15, 68, 20, 12, 19, 8, 55 },
//     new List<int> { 12, 1, 3, 4, -19, 8, 7, 6 },
//     new List<int> { 5, -6, -2, -12, -10, 7 }
// };

// var result = listsOfNumbers.Select(listOfNumbers => new Tuple<int, double>
// (listOfNumbers.Count(), listOfNumbers.Average())).OrderByDescending(countAndAverage => countAndAverage.Item2).Select(countAndAverage => $"Count is: {countAndAverage.Item1}, " + $"Average is: {countAndAverage.Item2}");

// System.Console.WriteLine(string.Join(Environment.NewLine, result));
// Console.ReadKey();

// var listsOfNumbers = new List<List<int>>
// {
//     new List<int> { 15, 68, 20, 12, 19, 8, 55 },
//     new List<int> { 12, 1, 3, 4, -19, 8, 7, 6 },
//     new List<int> { 5, -6, -2, -12, -10, 7 }
// };
// var result = listsOfNumbers.Select(listOfNumbers => new CountAndAverage
// {
//     Count = listOfNumbers.Count(),
//     Average = listOfNumbers.Average()
// }).OrderByDescending(countAndAverage => countAndAverage.Average).Select(countAndAverage => $"Count is: {countAndAverage.Count}, " + $"Average is: {countAndAverage.Average}");
// foreach (var item in result)
// {
//     System.Console.WriteLine(item);
// }
// Console.ReadKey();
// public class CountAndAverage
// {
//     public int Count { get; init; }
//     public double Average { get; init; }
// }

// //> ANONYMOUS TYPES
// var pet = new { Name = "Jackie", Type = "Dog" };
// pet.Name = "King"; //not possible....they have only getters no setters.

// Console.ReadKey();

// public static double CalculateAverageDurationInMilliseconds(IEnumerable<TimeSpan> timeSpans)
// {
//     try
//     {
//         return timeSpans.Select(timeSpan => timeSpan.Milliseconds).Average();
//     }
//     catch (Exception ex)
//     {
//         throw new Exception("The list is empty");
//     }
// }
