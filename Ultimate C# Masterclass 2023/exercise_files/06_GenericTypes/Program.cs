// SECTION 6 

// //> GENERIC TYPES

// var numbers = new ListOfInts();
// numbers.Add(10);
// numbers.Add(20);
// numbers.Add(30);
// numbers.Add(40);
// numbers.Add(50);
// numbers.RemoveAt(4);

// var words = new ListOfStrings();
// words.Add("aaa");
// words.Add("bbb");
// words.Add("ccc");

// Console.ReadKey();

// //INDIVIDUAL CLASSES FOR EACH TYPE 
// class ListOfStrings
// {
//     private string[] _items = new string[4];
//     private int _size = 0;

//     public void Add(string item)
//     {
//         if (_size >= _items.Length)
//         {
//             var newItems = new string[_items.Length * 2];
//             for (int i = 0; i < _items.Length; i++)
//             {
//                 newItems[i] = _items[i];
//             }
//             _items = newItems;
//         }
//         _items[_size] = item;
//         ++_size;
//     }

//     public void RemoveAt(int index)
//     {
//         if (index < 0 || index > _size)
//         {
//             throw new IndexOutOfRangeException($"Index {index} is outside the bounds of the list.");
//         }
//         --_size; //SET THE NEW REDUCED SIZE

//         for (int i = index; i < _size; i++)
//         {
//             _items[i] = _items[i + 1];
//         }
//         _items[_size] = 0; //CLEAR THE LAST ITEM
//     }

//     public string GetAtIndex(int index)
//     {
//         if (index < 0 || index >= _size)
//         {
//             throw new IndexOutOfRangeException($"Index {index} is outside the bounds of the list.");
//         }
//         return _items[index];
//     }
// }

// class ListOfInts
// {
//     private int[] _items = new int[4];
//     private int _size = 0;

//     public void Add(int item)
//     {
//         if (_size >= _items.Length)
//         {
//             var newItems = new int[_items.Length * 2];
//             for (int i = 0; i < _items.Length; i++)
//             {
//                 newItems[i] = _items[i];
//             }
//             _items = newItems;
//         }
//         _items[_size] = item;
//         ++_size;
//     }

//     public void RemoveAt(int index)
//     {
//         if (index < 0 || index > _size)
//         {
//             throw new IndexOutOfRangeException($"Index {index} is outside the bounds of the list.");
//         }
//         --_size; //SET THE NEW REDUCED SIZE

//         for (int i = index; i < _size; i++)
//         {
//             _items[i] = _items[i + 1];
//         }
//         _items[_size] = 0; //CLEAR THE LAST ITEM
//     }

//     public int GetAtIndex(int index)
//     {
//         if (index < 0 || index >= _size)
//         {
//             throw new IndexOutOfRangeException($"Index {index} is outside the bounds of the list.");
//         }
//         return _items[index];
//     }
// }

// var numbers = new SimpleList<int>();
// numbers.Add(10);
// numbers.Add(20);
// numbers.Add(30);
// numbers.Add(40);
// numbers.Add(50);
// numbers.RemoveAt(4);

// var dates = new SimpleList<DateTime>();
// dates.Add(new DateTime(2025, 1, 5));
// dates.Add(new DateTime(2023, 2, 15));
// dates.Add(new DateTime(2028, 3, 25));

// var words = new SimpleList<string>();
// words.Add("aaa");
// words.Add("bbb");
// words.Add("ccc");

// Console.ReadKey();

// // GENERIC CLASS COVERING ALL TYPES
// // class SimpleList<T, B>
// class SimpleList<T>
// {
//     private T[] _items = new T[4];
//     private int _size = 0;

//     public void Add(T item)
//     {
//         if (_size >= _items.Length)
//         {
//             var newItems = new T[_items.Length * 2];
//             for (int i = 0; i < _items.Length; i++)
//             {
//                 newItems[i] = _items[i];
//             }
//             _items = newItems;
//         }
//         _items[_size] = item;
//         ++_size;
//     }

//     public void RemoveAt(int index)
//     {
//         if (index < 0 || index > _size)
//         {
//             throw new IndexOutOfRangeException($"Index {index} is outside the bounds of the list.");
//         }
//         --_size; //SET THE NEW REDUCED SIZE

//         for (int i = index; i < _size; i++)
//         {
//             _items[i] = _items[i + 1];
//         }
//         // _items[_size] = 0; //CLEAR THE LAST ITEM
//         _items[_size] = default(T); //CLEAR THE LAST ITEM
//     }

//     public T GetAtIndex(int index)
//     {
//         if (index < 0 || index >= _size)
//         {
//             throw new IndexOutOfRangeException($"Index {index} is outside the bounds of the list.");
//         }
//         return _items[index];
//     }
// }

// public class Pair<T>
// {
//     public T First { get; private set; }
//     public T Second
//     { get; private set; }
//     public Pair(T first, T second)
//     {
//         First = first;
//         Second = second;
//     }
//     public T ResetFirst() => First = default;
//     public T ResetSecond() => Second = default;
// }

// //> TUPLES
// var numbers = new List<int> { 5, 3, 2, 8, 16, 7 };
// TwoInts minAndMax = GetMinAndMax(numbers);
// System.Console.WriteLine("Smallest number is " + minAndMax.Int1);
// System.Console.WriteLine("Largest number is " + minAndMax.Int2);
// Console.ReadKey();

// // int, int GetMinAndMax(IEnumerable<int> input) 
// TwoInts GetMinAndMax(IEnumerable<int> input)
// {
//     if (!input.Any()) //Enumerable method Any()
//     {
//         throw new InvalidOperationException($"The input collection cannot be empty.");
//     }
//     int min = input.First(); //First() LINQ METHOD
//     int max = input.First();
//     foreach (var el in input)
//     {
//         if (el > max)
//         {
//             max = el;
//         }
//         if (el < min)
//         {
//             min = el;
//         }
//     }
//     return new TwoInts(min, max);
// }

// public class TwoInts
// {
//     public int Int1 { get; }
//     public int Int2 { get; }

//     public TwoInts(int int1, int int2)
//     {
//         Int1 = int1;
//         Int2 = int2;
//     }
// }

// var numbers = new List<int> { 5, 3, 2, 8, 16, 7 };
// SimpleTuple<int, int> minAndMax = GetMinAndMax(numbers);
// System.Console.WriteLine("Smallest number is " + minAndMax.Item1);
// System.Console.WriteLine("Largest number is " + minAndMax.Item2);
// Console.ReadKey();

// // int, int GetMinAndMax(IEnumerable<int> input) 
// SimpleTuple<int, int> GetMinAndMax(IEnumerable<int> input)
// {
//     if (!input.Any()) //Enumerable method Any()
//     {
//         throw new InvalidOperationException($"The input collection cannot be empty.");
//     }
//     int min = input.First(); //First() LINQ METHOD
//     int max = input.First();
//     foreach (var el in input)
//     {
//         if (el > max)
//         {
//             max = el;
//         }
//         if (el < min)
//         {
//             min = el;
//         }
//     }
//     return new SimpleTuple<int, int>(min, max);
// }
// public class SimpleTuple<T1, T2>
// {
//     private int min;
//     private int max;

//     public SimpleTuple(int min, int max)
//     {
//         this.min = min;
//         this.max = max;
//     }
// }

// public class SimpleTuple<T1, T2, T3>
// {
//     public SimpleTuple(T1 item1, T2 item2, T3 item3)
//     {
//         Item1 = item1;
//         Item2 = item2;
//         Item3 = item3;
//     }

//     public T1 Item1 { get; }
//     public T2 Item2 { get; }
//     public T3 Item3 { get; }

// }


// var numbers = new List<int> { 5, 3, 2, 8, 16, 7 };
// Tuple<int, int> minAndMax = GetMinAndMax(numbers);
// System.Console.WriteLine("Smallest number is " + minAndMax.Item1);
// System.Console.WriteLine("Largest number is " + minAndMax.Item2);
// Console.ReadKey();

// // int, int GetMinAndMax(IEnumerable<int> input) 
// Tuple<int, int> GetMinAndMax(IEnumerable<int> input)
// {
//     if (!input.Any()) //Enumerable method Any()
//     {
//         throw new InvalidOperationException($"The input collection cannot be empty.");
//     }
//     int min = input.First(); //First() LINQ METHOD
//     int max = input.First();
//     foreach (var el in input)
//     {
//         if (el > max)
//         {
//             max = el;
//         }
//         if (el < min)
//         {
//             min = el;
//         }
//     }
//     return new Tuple<int, int>(min, max);
// }

// var minmax = new Tuple<int, int>(2, 3);
// System.Console.WriteLine("Smallest number is " + minmax);
// System.Console.WriteLine("Largest number is " + minmax.Item2);
// Console.ReadKey();

// ArrayList ints = new ArrayList { 2, 3, 4, 5 };
// int sum = 0;
// foreach (object item in ints)
// {
//     sum += (int)item;
// }

// ArrayList strings = new ArrayList { "a", "b", "c" };

// ArrayList variousItems = new ArrayList { 1, false, "abc", new DateTime() };
// object[] objects = new object[] { 1, false, "abc", new DateTime() };

// public static class TupleSwapExercise
// {
//     public static Tuple<T2, T1> SwapTupleItems<T1, T2>(Tuple<T1, T2> tuple) => new Tuple<T2, T1>(tuple.Item2, tuple.Item1);
// }

// //> GENERIC METHODS
// var ints = new List<int> { 1, 2, 3, };
// ints.AddToFront(10);
// ints.AddToFront<int>(11); //NO NEED TO BE SPECIFIED AS ITS INFERED FROM THE GENERIC TYPE METHOD TEMPLATE
// static class ListExtensions
// {
//     public static void AddToFront<T>(this List<T> list, T item)
//     {
//         list.Insert(0, item);
//     }
// }

// var decimals = new List<decimal> { 1.1m, 0.5m, 22.5m, 12m };
// // var ints = (List<ints>)decimals; //TYPECASTING DO NOT WORK FOR CONVERSION OF DECIMALS TO INTS AS LIST
// var ints = decimals.ConvertTo<decimal, int>();
// var floats = new List<float> { 1.4f, -100.01f };
// var longs = floats.ConvertTo<float, long>();

// var dates = new List<Datetime> { new DateTime(2023, 5, 1) };
// var ints2 = dates.ConvertTo<DateTime, int>();

// Console.ReadKey();
// static class ListExtensions
// {
//     public static List<TTarget> ConvertTo<TSource, TTarget>(this List<TSource> input)
//     {
//         var result = new List<TTarget>();
//         foreach (var item in input)
//         {
//             TTarget itemAfterCasting = (TTarget)Convert.ChangeType(item, typeof(TTarget));
//             // result.Add((TTarget)item);
//             result.Add(itemAfterCasting);
//         }
//         return result;
//     }
//     // public static void AddToFront<T>(this List<T> list, T item)
//     // {
//     //     list.Insert(0, item);
//     // }
// }

// Type type1 = 1.GetType();
// System.Console.WriteLine(type1);
// Type type2 = typeof(int);
// System.Console.WriteLine(type2);
// Console.ReadKey();

// //> TYPE CONSTRAINTS

// using System.Diagnostics;

// Stopwatch stopwatch = Stopwatch.StartNew();
// // var points = CreateCollectionOfRandomLength<Point>(100); //PARAMETERSLESS CONSRTRUCTOR NOT POSSIBLE WITH POINT OBJECT
// var ints = CreateCollectionOfRandomLength<int>(100);

// stopwatch.Stop();
// System.Console.WriteLine($"Execution took {stopwatch.ElapsedMilliseconds} ms.");
// Console.ReadKey();

// IEnumerable<T> CreateCollectionOfRandomLength<T>(int maxlength) where T : new()
// {
//     // var length = new Random().Next(maxlength + 1);
//     // var result = new List<T>();
//     var length = 100_000_000;
//     var result = new List<T>(length);

//     for (int i = 0; i < length; ++i)
//     {
//         result.Add(new T());
//     }
//     return result;
// }

// //> ICOMPARABLE INTERFACE
// var numbers = new List<int> { 5, 1, 7, 2 };
// numbers.Sort();

// var words = new List<string> { "dddd", "aaaa", "cccc", "bbbb" };
// words.Sort();

// var people = new List<Person> {
//     new Person { Name = "John", YearOfBirth = 1980},
//     new Person { Name = "Anna", YearOfBirth = 1915},
//     new Person { Name = "Bill", YearOfBirth = 2011},
// };
// people.Sort();

// PrintInOrder(10, 5);
// PrintInOrder("ali", "veli");
// PrintInOrder(new Person { Name = "John", YearOfBirth = 1980 }, new Person { Name = "Anna", YearOfBirth = 2000 });

// Console.ReadKey();

// void PrintInOrder<T>(T first, T second) where T : IComparable<T>
// {
//     if (first.CompareTo(second) > 0)
//     {
//         System.Console.WriteLine($"{second} {first}");
//     }
//     else
//     {
//         System.Console.WriteLine($"{first} {second}");
//     }
// }

// public class Person : IComparable<Person>
// {
//     public string Name { get; init; }
//     public int YearOfBirth { get; init; }

//     public override string ToString() => $"{Name} born in {YearOfBirth}";

//     // //DESC ORDER
//     // public int CompareTo(Person other)
//     // {
//     //     if (YearOfBirth < other.YearOfBirth)
//     //     { return 1; }
//     //     else if (YearOfBirth > other.YearOfBirth)
//     //     { return -1; }
//     //     else return 0;
//     // }
//     //ASC ORDER
//     public int CompareTo(Person other)
//     {
//         if (YearOfBirth < other.YearOfBirth)
//         { return -1; }
//         else if (YearOfBirth > other.YearOfBirth)
//         { return 1; }
//         else return 0;
//     }
// }


// public class SortedList<T> where T : IComparable<T>
// {
//     public IEnumerable<T> Items { get; }

//     public SortedList(IEnumerable<T> items)
//     {
//         var asList = items.ToList();
//         asList.Sort();
//         Items = asList;
//     }
// }

// public class FullName : IComparable<FullName>
// {
//     public string FirstName { get; init; }
//     public string LastName { get; init; }

//     public override string ToString() => $"{FirstName} {LastName}";

//     public int CompareTo(FullName other)
//     {
//         var LastNameComparisonResult = LastName.CompareTo(other.LastName);
//         System.Console.WriteLine(LastNameComparisonResult);
//         if (LastNameComparisonResult != 0)
//         {
//             return LastNameComparisonResult;
//         }
//         else return FirstName.CompareTo(other.FirstName);
//     }
// }

// //> TYPE CONSTRAINTS - GENERIC MATH TYPES
// //OLD WAY OF DECLARING FOR MULTIPLE TYPES
// using System.Numerics;

// System.Console.WriteLine("Square of 2 is: " + Calculator.Square(2));
// System.Console.WriteLine("Square of 4m is: " + Calculator.Square(4m));
// System.Console.WriteLine("Square of 6d is: " + Calculator.Square(6d));

// Console.ReadKey();

// public static class Calculator
// {
//     public static int Square(int input) => input * input;
//     public static decimal Square(decimal input) => input * input;
//     public static double Square(double input) => input * input;
// }
// //NET7 GENERIC MATH
// public static class Calculator
// {
//     public static T Square<T>(T input) where T : INumber<T> => input * input;
// }

// //> MULTIPLE TYPE CONSTRAINTS
// void SomeMethod<TPet, TOwner>(TPet pet, TOwner owner) where TPet : Pet, IComparable<TPet> where TOwner : new()
// {

// }

// public class Pet { }
// public class PetOwner { }

// //> FUNCS

// var numbers = new[] { 1, 4, 7, 19, 2 };
// System.Console.WriteLine("IsAnyLargerThan10? " + IsAnyGreaterThan10(numbers));
// System.Console.WriteLine("IsAnyEven? " + IsAnyEven(numbers));
// Console.ReadKey();

// bool IsAnyGreaterThan10(IEnumerable<int> numbers)
// {
//     foreach (var number in numbers)
//     {
//         if (number > 10)
//         {
//             return true;
//         }
//     }
//     return false;
// }
// bool IsAnyEven(IEnumerable<int> numbers)
// {
//     foreach (var number in numbers)
//     {
//         if (number % 2 == 0)
//         {
//             return true;
//         }
//     }
//     return false;
// }

// bool IsAny(IEnumerable<int> numbers, Func<int, bool> predicate)
// {
//     foreach (var number in numbers)
//     {
//         if (predicate(number))
//         {
//             return true;
//         }
//     }
//     return false;
// }

// var numbers = new[] { 1, 4, 7, 19, 2 };

// System.Console.WriteLine("IsAnyLargerThan10? " + IsAny(numbers, IsLargerThan10));
// System.Console.WriteLine("IsAnyEven? " + IsAny(numbers, IsAnyEven));

// Console.ReadKey();

// bool IsAny(IEnumerable<int> numbers, Func<int, bool> predicate)
// {
//     foreach (var number in numbers)
//     {
//         if (predicate(number))
//         {
//             return true;
//         }
//     }
//     return false;
// }
// bool IsLargerThan10(int arg)
// {
//     return arg > 10;
// }
// bool IsAnyEven(int arg)
// {
//     return arg % 2 == 0;
// }

// //> LAMBDA FUNCTIONS
// var numbers = new[] { 1, 4, 7, 19, 2 };

// System.Console.WriteLine("IsAnyLargerThan10? " + IsAny(numbers, arg => arg > 10));
// System.Console.WriteLine("IsAnyEven? " + IsAny(numbers, arg => arg % 2 == 0));

// Console.ReadKey();

// bool IsAny(IEnumerable<int> numbers, Func<int, bool> predicate)
// {
//     foreach (var number in numbers)
//     {
//         if (predicate(number))
//         {
//             return true;
//         }
//     }
//     return false;
// }

// public class Exercise
// {
//     public Func<string, int> GetLength = n => n.Length;
//     public Func<int> GetRandomNumberBetween1And10 = () => new Random().Next(1, 11);
// }

// //> DELEGATES

// ProcessString processString1 = TrimTo5Letters;
// ProcessString processString2 = ToUpper;
// System.Console.WriteLine(processString1("Helloooooo"));
// System.Console.WriteLine(processString2("Helloooooo"));
// Console.ReadKey();

// string TrimTo5Letters(string input)
// {
//     return input.Substring(0, 5);
// }

// string ToUpper(string input)
// {
//     return input.ToUpper();
// }
// delegate string ProcessString(string input);

// Print print1 = text => System.Console.WriteLine(text.ToUpper());
// Print print2 = text => System.Console.WriteLine(text.ToLower());
// Print multicast = print1 + print2;
// Print print4 = text => System.Console.WriteLine(text.Substring(0, 3));
// multicast += print4;
// multicast("Crocodile");

// Console.ReadKey();
// delegate void Print(string input);

// //> GENERIC DELEGATES
// // Func<string, string, int> sumLenghts = (text1, text2) => text1.Length + text2.Length;
// Func<string, string, int> sumLenghts = SumLenghts;
// Console.ReadKey();
// int SumLenghts(string text1, string text2)
// {
//     return text1.Length + text2.Length
// }

// //> DICTIONARY
// var numbers = new List<int> { 1, 2, 3, 4, 5, 6 };
// var countryToCurrencyMapping = new Dictionary<string, string>
// {
//     ["USA"] = "USA",
//     ["India"] = "INR",
//     ["Spain"] = "EUR"
// };
// var countryToCurrencyMapping_OLDSYNTAX = new Dictionary<string, string>
// {
//     {"USA","USA"},
//     {"India","INR"},
//     {"Spain","EUR"}
// };
// if (countryToCurrencyMapping.ContainsKey("Italy"))
// {
//     System.Console.WriteLine($"The currency in Italy is {countryToCurrencyMapping["Italy"]}");
// }
// foreach (var countryCurrencyPair in countryToCurrencyMapping)
// {
//     System.Console.WriteLine($"Country: {countryCurrencyPair.Key}, currency: {countryCurrencyPair.Value}");
// }
// // var countryToCurrencyMapping = new Dictionary<string, string>();
// // countryToCurrencyMapping.Add("USA", "USD");
// // countryToCurrencyMapping.Add("India", "INR");
// // countryToCurrencyMapping.Add("Spain", "EUR");
// // countryToCurrencyMapping.Add("Spain", "SP");
// System.Console.WriteLine("Currency in Spain is " + countryToCurrencyMapping["Spain"]);
// countryToCurrencyMapping["Poland"] = "PLN";
// Console.ReadKey();


// var employees = new List<Employee> {
//     new Employee("Jake Smith", "Space Navigation", 25000),
//     new Employee("Anna Blake", "Space Navigation", 29000),
//     new Employee("Barbara Oak", "Xenobiology", 21500),
//     new Employee("Damien Parker", "Xenobiology", 22000),
//     new Employee("Nisha Patel", "Mechanics", 21000),
//     new Employee("Gustavo Sanchez", "Mechanics", 20000),
// };

// var result = CalculateAverageSalaryPerDepartment(employees);

// Console.ReadKey();

// Dictionary<string, decimal> CalculateAverageSalaryPerDepartment(IEnumerable<Employee> employees)
// {
//     var employeesPerDepartments = new Dictionary<string, List<Employee>>();
//     foreach (var employee in employees)
//     {
//         if (!employeesPerDepartments.ContainsKey(employee.Department))
//         {
//             employeesPerDepartments[employee.Department] = new List<Employee>();
//         }
//         employeesPerDepartments[employee.Department].Add(employee);
//     }
//     var result = new Dictionary<string, decimal>();
//     foreach (var employeesPerDepartment in employeesPerDepartments)
//     {
//         decimal sumOfSalaries = 0;
//         foreach (var employee in employeesPerDepartment.Value)
//         {
//             sumOfSalaries += employee.MonthlySalary;
//         }
//         var average = sumOfSalaries / employeesPerDepartment.Value.Count;

//         result[employeesPerDepartment.Key] = average;
//     }
//     return result;
// }
// public class Employee
// {
//     public Employee(string name, string department, decimal monthlySalary)
//     {
//         Name = name;
//         Department = department;
//         MonthlySalary = monthlySalary;
//     }
//     public string Name { get; init; }
//     public string Department { get; init; }
//     public decimal MonthlySalary { get; init; }
// }

// List<int> myList = new List<int>() { 1, 2, 3, 4 };

// int max = myList.Max();
// System.Console.WriteLine(max);
// Console.ReadKey();

// CODING CHALLENGE
// public static class Exercise
// {
//     public static Dictionary<PetType, double> FindMaxWeights(List<Pet> pets)
//     {
//         // CREATE DICTIONARY GROUPED BY PET TYPES AND CORRESPONDING WEIGHT LIST
//         var groupedByType = new Dictionary<PetType, List<double>>();
//         foreach (var pet in pets)
//         {
//             if (!groupedByType.ContainsKey(pet.PetType)) { groupedByType[pet.PetType] = new List<double>(); }
//             groupedByType[pet.PetType].Add(pet.Weight);
//         }
//         // CREATE RESULT DICTIONARY CONTAINING THE MAX VALUE FOR EACH PET TYPES
//         var result = new Dictionary<PetType, double>();
//         foreach (var line in groupedByType)
//         {

//             result[line.Key] = (line.Value).Max();
//         }
//         return result;
//     }
// }

// public class Pet
// {
//     public PetType PetType { get; }
//     public double Weight { get; }

//     public Pet(PetType petType, double weight)
//     {
//         PetType = petType;
//         Weight = weight;
//     }

//     public override string ToString() => $"{PetType}, {Weight} kilos";
// }

// public enum PetType { Dog, Cat, Fish }

//ALTERNATE SOLUTION
// public static Dictionary<PetType, double> FindMaxWeights(List<Pet> pets)
// {
//     var result = new Dictionary<PetType, double>();
//     foreach (var pet in pets)
//     {
//         if (!result.ContainsKey(pet.PetType) || pet.Weight > result[pet.PetType])
//         {
//             result[pet.PetType] = pet.Weight
//                 }
//     }
// }

// var numbers = new List<int> { 10, 12, -100, 55, 17, 22 };
// var filteringStrategySelector = new FilteringStrategySelector();

// // System.Console.WriteLine(@"Select filter: 
// // Even
// // Odd
// // Positive");
// System.Console.WriteLine("Select filter:");
// System.Console.WriteLine(string.Join(Environment.NewLine, filteringStrategySelector.FilteringStrategiesNames));


// var userInput = Console.ReadLine();

// var filteringStrategy = filteringStrategySelector.Select(userInput);

// var result = new Filter().FilterBy(filteringStrategy, numbers);

// Print(result);
// Console.ReadKey();

// static void Print(IEnumerable<int> numbers)
// {
//     System.Console.WriteLine(string.Join(", ", numbers));
// }

// public class FilteringStrategySelector
// {
//     private readonly Dictionary<string, Func<int, bool>> _filteringStrategies = new Dictionary<string, Func<int, bool>>
//     {
//         ["Even"] = number => number % 2 == 0,
//         ["Odd"] = number => number % 2 == 1,
//         ["Positive"] = number => number > 0,
//         ["Negative"] = number => number < 0,
//     };

//     public IEnumerable<string> FilteringStrategiesNames => _filteringStrategies.Keys;

//     public Func<int, bool> Select(string filteringType)
//     {
//         if (!_filteringStrategies.ContainsKey(filteringType))
//         {
//             throw new NotSupportedException(
//                     $"{filteringType} is not a valid filter"
//                 );
//         }
//         return _filteringStrategies[filteringType];
//     }
// }

// public class Filter
// {
//     public IEnumerable<T> FilterBy<T>(Func<T, bool> predicate, IEnumerable<T> numbers)
//     {
//         var result = new List<T>();
//         foreach (var number in numbers)
//         {
//             if (predicate(number))
//             {
//                 result.Add(number);
//             }
//         }
//         return result;
//     }
// }

// //> CACHING

// var dataDownloader = new SlowDataDownloader();

// System.Console.WriteLine(dataDownloader.DownloadData("id1"));
// System.Console.WriteLine(dataDownloader.DownloadData("id2"));
// System.Console.WriteLine(dataDownloader.DownloadData("id3"));
// System.Console.WriteLine(dataDownloader.DownloadData("id1"));
// System.Console.WriteLine(dataDownloader.DownloadData("id3"));
// System.Console.WriteLine(dataDownloader.DownloadData("id1"));
// System.Console.WriteLine(dataDownloader.DownloadData("id2"));

// Console.ReadKey();

// public interface IDataDownloader
// {
//     string DownloadData(string resourceId);
// }
// public class SlowDataDownloader : IDataDownloader
// {
//     public string DownloadData(string resourceId)
//     {
//         //let's imagine this method downloads real data, 
//         //and it does it slowly
//         Thread.Sleep(1000);
//         return $"Some data for {resourceId}";
//     }
// }
