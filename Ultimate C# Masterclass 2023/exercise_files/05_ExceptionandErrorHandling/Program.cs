// SECTION 5

//> EXCEPTION OBJECT
// string input = "hello";
// var number = int.Parse(input);
// Console.ReadKey();

// string input = "hello there";
// int number = ParseStringToInt(input);

// Console.ReadKey();

// int ParseStringToInt(string input)
// {
//     return int.Parse(input);
// }

// //> TRY...CATCH...FINALLY
// System.Console.WriteLine("Enter a number: ");
// string input = Console.ReadLine();
// try
// {
//     int number = ParseStringToInt(input);
//     var result = 10 / number;
//     System.Console.WriteLine($"10  /{number} is {result}");
// }
// catch (FormatException ex)
// {
//     System.Console.WriteLine($"Wrong format. Inout an integer value." + $"Exception message: {ex.Message}");
// }
// catch (DivideByZeroException ex)
// {
//     System.Console.WriteLine("Division by zero is not permissable." + $"Exception message: {ex.Message}");
// }
// catch (Exception ex)
// {
//     System.Console.WriteLine($"Unexpected exception occured. " + $"Exception message: {ex.Message}");
// }
// finally
// {
//     System.Console.WriteLine("Finally block is being executed");
// }

// Console.ReadKey();

// int ParseStringToInt(string input)
// {
//     return int.Parse(input);
//     // try
//     // {
//     //     return int.Parse(input);
//     // }
//     // catch
//     // {
//     //     System.Console.WriteLine($"Parsin error " + $"in the {nameof(ParseStringToInt)} method.");
//     //     return 0;
//     // }
// }

// // //> THROWING EXCEPTIONS
// var emptyCollection = new List<int>();
// var firstElement = GetFirstElement(emptyCollection);
// var firstUsingLinq = emptyCollection.First();

// var numbers = new int[] { 1, 2, 3 };
// // var fourth = numbers[3];

// // var result = GetFirstElement(new int[0]);
// Console.ReadKey();

// var numbers = new int[] { };
// IsFirstElementPositive(numbers);
// IsFirstElementPositive(null);
// try
// {
//     var result = IsFirstElementPositive(null);
// }
// catch (NullReferenceException ex)
// {

// }
// Console.ReadKey();
// int GetFirstElement(IEnumerable<int> numbers)
// {
//     foreach (var number in numbers)
//     {
//         return number;
//     }
//     throw new InvalidOperationException();
// }
// bool IsFirstElementPositive(IEnumerable<int> numbers)
// {
//     try
//     {
//         var firstElement = GetFirstElement(numbers);
//         return firstElement > 0;
//     }
//     catch (InvalidOperationException ex)
//     {
//         System.Console.WriteLine("The collection is empty", ex);
//         return true;
//     }
//     catch (NullReferenceException ex) // NullReferenceException only tells there is a null value 
//     {
//         System.Console.WriteLine("Sorry! The application experienced " + "an unexpected error.");
//         throw;
//         // throw ex;
//         // throw new ArgumentNullException("The collection is null", ex);
//     }
// }

// public static int GetMaxValue(List<int> numbers)
// {
//     try
//     {

//         return numbers.Max();
//     }
//     catch (ArgumentNullException ex)
//     {
//         throw new ArgumentNullException("The numbers list cannot be  null.", ex);
//     }
//     catch (InvalidOperationException ex)
//     {
//         Console.WriteLine("The numbers list cannot be empty.");
//         throw;
//     }
// }

// var invalidPersonObject = new Person("", -100);
// Console.ReadKey();
// class Person
// {
//     public string Name { get; }
//     public int YearOfBirth { get; }
//     public Person(string name, int yearOfBirth)
//     {
//         if (name is null)
//         {
//             throw new ArgumentNullException("The name cannot be null.");
//         }
//         if (name == string.Empty)
//         {
//             throw new ArgumentException("The name cannot be empty.");
//         }
//         if (yearOfBirth < 1900 || yearOfBirth > DateTime.Now.Year)
//         {
//             throw new ArgumentOutOfRangeException("The year cannot be below 1900 and above current year.");
//         }
//         Name = name;
//         YearOfBirth = yearOfBirth;
//     }
// }

// RecursiveMethod(1);
// Console.ReadKey();
// void RecursiveMethod(int counter)
// {
//     System.Console.WriteLine("I am going to call myself. Counter is " + counter);
//     if (counter < 10)
//     {
//         RecursiveMethod(++counter);
//     }
// }

// public interface IPeopleRepository
// {
//     Person Read(int personId);
// }

// public interface ILogger
// {
//     void Log(Exception ex);
// }

// public class PersonDataReader
// {
//     private readonly IPeopleRepository _peopleRepository;
//     private readonly ILogger _logger;

//     public PersonDataReader(
//         IPeopleRepository personRepository,
//         ILogger logger)
//     {
//         _peopleRepository = personRepository;
//         _logger = logger;
//     }

//     public Person ReadPersonData(int personId)
//     {
//         try
//         {
//             return _peopleRepository.Read(personId);
//         }
//         catch (Exception ex)
//         {
//             _logger.Log(ex);
//             throw;
//         }
//     }
// }

// public class Person
// {
//     public string Name { get; }
//     public int YearOfBirth { get; }

//     public Person(string name, int yearOfBirth)
//     {
//         if (name is null)
//         {
//             throw new ArgumentNullException("The name cannot be null.");
//         }
//         if (name == string.Empty)
//         {
//             throw new ArgumentException("The name cannot be empty.");
//         }
//         if (yearOfBirth < 1900 || yearOfBirth > DateTime.Now.Year)
//         {
//             throw new ArgumentOutOfRangeException("The year of birth must be " +
//                 "between 1900 and the current year.");
//         }

//         Name = name;
//         YearOfBirth = yearOfBirth;
//     }
// }

// //> CUSTOM EXCEPTIONS
// using System.Runtime.Serialization;

// throw new CustomException();
// Console.ReadKey();

// [Serializable]
// public class CustomException : Exception
// {
//     public int StatusCode { get; }

//     protected CustomException(SerializationInfo info, StreamingContext context) : base(info, context) { }

//     public CustomException() { }
//     public CustomException(string message) : base(message) { }
//     public CustomException(string message, int statusCode) : base(message)
//     {
//         StatusCode = statusCode;
//     }
//     public CustomException(string message, int statusCode, Exception innerException) : base(message, innerException)
//     {
//         StatusCode = statusCode;
//     }
//     public CustomException(string message, Exception innerException) : base(message, innerException) { }
// }

// Person ReadPersonData(int personId)
// {
//     return _externalDataReader.Read(personId);
// }

// Person ReadPersonData(int personId)
// {
//     try
//     {
//         return _externalDataReader.Read(personId);
//     }
//     catch (NoDataException ex)
//     {
//         return null;
//     }
// }

var logger = new Logger();
try
{
    Run();
}
catch (Exception ex)
{
    System.Console.WriteLine("Sorry. The app has experienced an error." + "The error message : " + ex.Message);
    logger.Log(ex);
}

void Run()
{
    try
    {
        System.Console.WriteLine("Enter a word");
        var word = Console.ReadLine();
        System.Console.WriteLine("Count of characters is " + word.Length);
    }
    catch (NullReferenceException ex)
    {
        System.Console.WriteLine("The input is null, and its length cannot be calculated");
        throw;
    }
}