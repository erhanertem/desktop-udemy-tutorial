//SECTION #3

//> JSON

using System.Text.Json;

var person = new Person { FirstName = "John", LastName = "Mc Callisto", YearOfBirth = 1922 };

var asJson = JsonSerializer.Serialize(person);
System.Console.WriteLine($"Our fellow JSON file is :  {asJson}");

var personJson = "{ \"FirstName\":\"John\",\"LastName\":\"Mc Callisto\",\"YearOfBirth\":1922}";

var persomFromJson = JsonSerializer.Deserialize<Person>(personJson);

Console.ReadKey();
public class Person
{
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public int YearOfBirth { get; set; }
}

// //> INTERFACES

// public static class Exercise
// {
//     public static int Transform(
//         int number)
//     {
//         var transformations = new List<INumericTransformation>
//             {
//                 new By1Incrementer(),
//                 new By2Multiplier(),
//                 new ToPowerOf2Raiser()
//             };

//         var result = number;
//         foreach (var transformation in transformations)
//         {
//             result = transformation.Transform(result);
//         }
//         return result;
//     }
// }

// public interface INumericTransformation
// {
//     int Transform(int input);
// }

// public class By1Incrementer : INumericTransformation
// {
//     public int Transform(int input) => ++input;
// }
// public class By2Multiplier : INumericTransformation
// {
//     public int Transform(int input) => input * 2;
// }
// public class ToPowerOf2Raiser : INumericTransformation
// {
//     public int Transform(int input) => input * input;
// }

// //INTERFACE CLASS
// public interface IFlyable
// {
//     void Fly();
// }

// //CLASS WITH INTERFACE INHERITANCE
// public class Bird : IFlyable
// {
//     int CurrentHeight = 200;
//     public void Tweet() => System.Console.WriteLine("Tweet");
//     // private void Fly() => System.Console.WriteLine("Fly me");
//     public void Fly() => System.Console.WriteLine("Fly me");
// }

// public class Hawk : IFlyable
// {
//     public void Gark() => System.Console.WriteLine("Gark");
//     public void Fly() => System.Console.WriteLine("Fly me");
//     // public void Fly(int arg) => System.Console.WriteLine($"Fly me {arg} meters");
// }

// var bakeableDishes = new List<IBakeable> {
//     new Pizza(),
//     new Panettone(),
// }

// foreach (var bakeableDish in bakeableDishes)
// {
//     System.Console.WriteLine(bakeableDish.GetInstructions());
// }

// Console.ReadKey();

// public abstract class Dessert { }
// public interface IBakeable
// {
//     string GetInstructions();
// }
// public class Panettone : Dessert, IBakeable
// {
//     public string GetInstructions() => "Bake at 180 degree Celcius for 20 mins";
// }

// public class Pizza : IBakeable
// {
//     public string GetInstructions() => "Bake at 200 degree Celcius for 10mins";
// }

// //> EXTENSION METHOD
// using Rectangle.Extensions;

// var list = new List<int> { 1, 5, 108, 12, 4, 5, 6 };
// var result = list.TakeEverySecond();

// var multilineText = @"aaaa
// bbbb
// cccc
// dddd";
// int CountLines(string input) => input.Split(Environment.NewLine).Length;
// System.Console.WriteLine($"Count of lines is {CountLines(multilineText)}");

// System.Console.WriteLine($"Count of lines is {multilineText.CountLines()}");

// Console.WriteLine($"Next after spring is {Season.Spring.Next()}");
// Console.ReadKey();
// public enum Season
// {
//     Spring,
//     Summer,
//     Autumn,
//     Winter
// }


// //> SEALED CLASSES
// //> ABSTRACT CLASSES

// Cheddar cheddar1 = new Cheddar();
// System.Console.WriteLine(Ingredient.PublicMethod());
// System.Console.WriteLine(cheddar1.Name);
// Ingredient mozzy = new Mozzarella();
// System.Console.WriteLine(Ingredient.PublicMethod());
// System.Console.WriteLine(mozzy.Name);
// System.Console.WriteLine("!!" + mozzy);
// Console.ReadKey();

// //BASE CLASS
// public abstract class Ingredient
// {
//     public abstract void Prepare();
//     public virtual string? Name { get; }
//     public static string PublicMethod()
//     {
//         return "This method is PUBLIC in Ingredient Class";
//     }

//     protected string ProtectedMethod() => "This method is PROTECTED in Ingredient Class";
//     // private string PrivateMethod() => "This method is PRIVATE in Ingredient Class";
// }
// //1ST DEPTH DERIVED CLASS
// public abstract class Cheese : Ingredient { }
// //2ND LEVEL DERVIED CLASS
// public sealed class Mozzarella : Cheese
// {
//     public override string Name => "Amorella";
//     public bool IsLight { get; }

//     public override void Prepare() => Console.WriteLine("I am MOzzy!");
// }

// public class SpecialMozzarella : Mozzarella { }

// public class Cheddar : Cheese
// {
//     public override void Prepare() => Console.WriteLine("I am PREPARING CHEDDAR NOW!");

//     public override string Name => "Cheddar cheese";
//     public int AgedForMonths { get; }
// }


// Ernie newErnie = new Ernie();
// abstract class Ernie
// {
//     public string getName() => "I am Ernie";
// }

// //> NULL

// public static class NumericTypesDescriber
// {
//     public static string Describe(object someObject)
//     {
//         if (someObject is int)
//         {
//             return $"Int of value {someObject}";
//         }
//         else if (someObject is double)
//         {
//             return $"Double of value {someObject}";
//         }
//         else if (someObject is decimal)
//         {
//             return $"Decimal of value {someObject}";
//         }
//         else return null;

//     }
// }
// var pizza = new Pizza();
// // System.Console.WriteLine(pizza.ingredient.message); //defaults to null
// Ingredient? nullIngredient = null;
// if (nullIngredient != null)
// {
//     System.Console.WriteLine(nullIngredient.message);
// }

// if (nullIngredient is not null)
// {
//     System.Console.WriteLine(nullIngredient.message);
// }

// // int nullInt = null;

// System.Console.WriteLine(pizza.ingredient); //defaults to null
// System.Console.WriteLine(pizza.pizzaName); //defaults to null
// System.Console.WriteLine(pizza.number); //defaults to 0
// System.Console.WriteLine(pizza.date); //1/1/0001 12:00:00 AM

// // Console.ReadKey();

// public class Pizza
// {
//     // public Ingredient ingredient = new Ingredient();
//     // public Ingredient ingredient = null;
//     public Ingredient ingredient;
//     public string pizzaName;
//     public int number;
//     public DateTime date;
// }
// public class Ingredient
// {
//     public string message = "I am an Ingredient";
// }
// //> IS OPERATOR
// string word = "hello";
// bool isString = word is string;
// bool isInt = word is int;
// System.Console.WriteLine(isString);
// System.Console.WriteLine(isInt);
// static string Format(int age, string firstName = "Unknown")
// {
//     return $"{firstName} who is {age} years old.";
// }
// var formatted = Format(25, "Toby");

// //> ENUMS
// Season firstSeason = Season.Spring;
// int firstSeasonAsNumber = (int)firstSeason;

// decimal a = 10.01m;
// double b = 10.01;

// int integer = 10;
// decimal c = integer;

// decimal d = 10.01m;
// int e = (int)d;

// // string s = (string)integer;
// string s = integer.ToString();

// int secondSeasonNumber = 1;
// Season summer = (Season)secondSeasonNumber;
// System.Console.WriteLine("!!!!" + summer);

// System.Console.WriteLine(firstSeason + " " + firstSeasonAsNumber);

// Console.ReadKey();
// public enum Season
// {
//     // Spring = 1, Summer, Autumn, Winter
//     Spring, Summer, Autumn, Winter
// }
// public enum HttpCode
// {
//     Ok = 200,
//     NotFound = 404,
//     InternalServerError = 500
// }

// //> STATIC FIELDS PROPERTIES CONSTRUCTORS

// public static class StringsTransformator
// {
//     public static string TransformSeparators(
//         string input,
//         string originalSeparator,
//         string targetSeparator)
//     {
//         string[] sanitize = input.Split(originalSeparator);
//         return string.Join(targetSeparator, sanitize);
//     }
// }

// var rectangle = new Rectangle(5, 10);
// System.Console.WriteLine(Rectangle.DescribeGenerally());
// System.Console.WriteLine($"Count of Rectangle objects is {Rectangle.CountOfInstances}");

// class Rectangle
// {
//     public static int CountOfInstances { get; private set; }
//     public int Width { get; }
//     private int _height;

//     public Rectangle(int width, int height)
//     {
//         Width = GetLengthOrDefault(width, nameof(Width));
//         _height = GetLengthOrDefault(height, nameof(_height));
//         ++CountOfInstances;
//     }
//     private int GetLengthOrDefault(int length, string name)
//     {
//         const int defaultValueIfNonPositive = 1;
//         if (length <= 0)
//         {
//             System.Console.WriteLine($"{name} must be a positive number");
//             return defaultValueIfNonPositive;
//         }
//         return length;
//     }

//     public int CalculateCircumference() => 2 * Width + 2 * _height;
//     public int CalculateArea() => Width * _height;
//     public string Description => $"A rectangle with width {Width}" + $"and height {_height}";
//     public static string DescribeGenerally() => $"A plane figure with 4 straight sides and four right angles";
// }
// //> STATIC METHODS AND CLASSES
// public static class NumberToDayOfWeekTranslator1
// {
//     public static string Translate(int day)
//     {
//         return day switch
//         {
//             1 => "Monday",
//             2 => "Tuesday",
//             3 => "Wednesday",
//             4 => "Thursday",
//             5 => "Friday",
//             6 => "Saturday",
//             7 => "Sunday",
//             _ => "Invalid day of the week",
//         };
//     }
// }

// public static class NumberToDayOfWeekTranslator2
// {
//     public static string Translate(int day)
//     {
//         switch (day)
//         {
//             case 1:
//                 return "Monday";
//             case 2:
//                 return "Tuesday";
//             case 3:
//                 return "Wednesday";
//             case 4:
//                 return "Thursday";
//             case 5:
//                 return "Friday";
//             case 6:
//                 return "Saturday";
//             case 7:
//                 return "Sunday";
//             default:
//                 return "Invalid day of the week";
//         }

//     }
// }

// // var calculator = new Calculator();

// System.Console.WriteLine($"1 + 2 is {Calculator.Add(1, 2)}");

// static class Calculator
// {
//     public static int Add(int a, int b) => a + b;
//     public static int Subtract(int a, int b) => a - b;
//     public static int Multiply(int a, int b) => a * b;
// }

// var rectangle = new Rectangle(5, 10);

// System.Console.WriteLine(Rectangle.DescribeGenerally());
// // System.Console.WriteLine(rectangle.DescribeGenerally());
// System.Console.WriteLine(Rectangle.NumberOfSides);


// class Rectangle
// {
//     // const int NumberOfSides = 4;
//     public const int NumberOfSides = 4;
//     readonly int NumberOfSidesReadOnly;
//     public int Width { get; private set; }
//     private int _height;
//     public Rectangle(int width, int height)
//     {
//         NumberOfSidesReadOnly = 4;
//         Width = GetLengthOrDefault(width, nameof(Width));
//         _height = GetLengthOrDefault(height, nameof(_height));
//     }
//     private int GetLengthOrDefault(int length, string name)
//     {
//         const int defaultValueIfNonPositive = 1;
//         if (length <= 0)
//         {
//             System.Console.WriteLine($"{name} must be a positive number");
//             return defaultValueIfNonPositive;
//         }
//         return length;
//     }
//     void DummyMethod()
//     {
//         Console.WriteLine($"height is +{_height}");
//     }
//     public int CalculateCircumference() => 2 * Width + 2 * _height;
//     public int CalculateArea() => Width * _height;
//     public string Description => $"A rectangle with width {Width}" + $"and height {_height}";
//     public static string DescribeGenerally() => $"A plane figure with 4 straight sides and four right angles";
// }

// //> COMPUTED PROPERTIES
// var rectangle = new Rectangle(5, 10);
// class Rectangle
// {
//     const int NumberOfSides = 4;
//     readonly int NumberOfSidesReadOnly;
//     public int Width { get; private set; }
//     private int _height;
//     public Rectangle(int width, int height)
//     {
//         NumberOfSidesReadOnly = 4;
//         Width = GetLengthOrDefault(width, nameof(Width));
//         _height = GetLengthOrDefault(height, nameof(_height));
//     }
//     private int GetLengthOrDefault(int length, string name)
//     {
//         const int defaultValueIfNonPositive = 1;
//         if (length <= 0)
//         {
//             System.Console.WriteLine($"{name} must be a positive number");
//             return defaultValueIfNonPositive;
//         }
//         return length;
//     }
//     void DummyMethod()
//     {
//         Console.WriteLine($"height is +{_height}");
//     }
//     public int CalculateCircumference() => 2 * Width + 2 * _height;
//     public int CalculateArea() => Width * _height;
//     public string Description => $"A rectangle with width {Width}" + $"and height {_height}";
// }

// //> OBJECT INITIALIZERS

// // var person = new Person("John Betz", 1981);
// var person = new Person { Name = "John Betz", YearOfBirth = 1981 };
// person.Name = "Adam Betz";
// // person.YearOfBirth = 1992;

// class Person
// {
//     public string Name { get; set; }
//     public int YearOfBirth { get; init; }
//     // public Person(string name, int yearOfBirth)
//     // {
//     //   Name = name;
//     //   YearOfBirth = yearOfBirth;
//     // }
// }

// //> EXPRESSION BODIED METHODS

// public class Order
// {
//   public string Item { get; }
//   private DateTime _date;
//   public DateTime Date
//   {
//     get
//     {
//       return _date;
//     }
//     private set
//     {
//       if (Convert.ToDateTime(value).Year == DateTime.Now.Year)
//       { _date = value; }
//     }
//   }

//   public Order(string item, DateTime date)
//   {
//     Item = item;
//     Date = date;
//   }
// }

// var rectangle = new Rectangle(5, 10);

// // rectangle.Width = -10;
// // rectangle.GetHeight();


// class Rectangle
// {
//     //CLASS VARIABLES
//     const int NumberOfSides = 4;
//     readonly int NumberOfSidesReadOnly;
//     // public readonly int Width = 1; //default value
//     // private int _width;
//     public int Width { get; private set; }
//     private int _height;

//     //CONSTRUCTOR 
//     public Rectangle(int width, int height)
//     {
//         NumberOfSidesReadOnly = 4;
//         // Width = GetLengthOrDefault(width, "Width");
//         _width = GetLengthOrDefault(width, nameof(_width));
//         // Height = GetLengthOrDefault(height, "Height");
//         _height = GetLengthOrDefault(height, nameof(_height));
//     }

//     // public int GetHeight() => _height;
//     // public void SetHeight(int value)
//     // {
//     //   if (value > 0)
//     //   {
//     //     _height = value;
//     //   }
//     // }

//     private int GetLengthOrDefault(int length, string name)
//     {
//         const int defaultValueIfNonPositive = 1;
//         if (length <= 0)
//         {
//             System.Console.WriteLine($"{name} must be a positive number");
//             return defaultValueIfNonPositive;
//         }
//         return length;
//     }

//     //CLASS METHOD
//     void DummyMethod()
//     {
//         Console.WriteLine($"height is +{_height}");
//     }

//     public int CalculateCircumference() => 2 * _width + 2 * _height;

//     public int CalculateArea() => _width * _height;
// }

// public class Dog
// {
//   public string Name;
//   public string Breed;
//   public int Weight;
//   public Dog(string name, string breed, int weight)
//   {
//     Name = name;
//     Breed = breed;
//     Weight = weight;
//   }
//   public Dog(string name, int weight)
//   {
//     Name = name;
//     Weight = weight;
//     Breed = "mixed-breed";
//   }
//   public string Describe()
//   {
//     string shape;
//     if (Weight < 5) { shape = "tiny"; }
//     else if (Weight > 5 && Weight < 30) { shape = "medium"; }
//     else { shape = "large"; }
//     return $"This dog is named {Name}, it's a {Breed}, and it weighs {Weight} kilograms, so it's a {shape} dog.";
//   }
// }

// //> ENCAPSULATION - METHOD OVERLOADING 
// var medicalAppointment = new MedicalAppointment("John Smith", new DateTime(2023, 4, 3));

// //overwrite month and day 
// medicalAppointment.Reschedule(5, 1);
// //add a given number of months and days
// medicalAppointment.Reschedule(1, 2);

//simple reschedule
// medicalAppointment.Reschedule(new DateTime(2023, 4, 4));
// Console.ReadKey();

// class MedicalAppointmentPrinter
// {
//   public void Print(MedicalAppointment medicalAppointment)
//   {
//     System.Console.WriteLine(" Appointment will take place on " + medicalAppointment.GetDate());
//   }
// }

// class MedicalAppointment
// {
//   private string _patientName;
//   // private string patientName;
//   private DateTime _date;
//   //BASE CONSTRUCTOR
//   public MedicalAppointment(string patientName, DateTime date)
//   {
//     _patientName = patientName;
//     // this.patientName = patientName;
//     _date = date;
//   }
//   public DateTime GetDate() => _date;
//   //OVERLOADING CONSTRUCTOR
//   // public MedicalAppointment(string patientName)
//   // {
//   //   _patientName = patientName;
//   //   _date = DateTime.Now.AddDays(7);
//   // }
//   // public MedicalAppointment(string patientName) : this(patientName, 7) { }
//   //OVERLOADING CONSTRUCTOR
//   public MedicalAppointment(string patientName, int daysFromNow = 7)
//   {
//     _patientName = patientName;
//     _date = DateTime.Now.AddDays(daysFromNow);
//   }
//   //BASE METHOD
//   public void Reschedule(DateTime date)
//   {
//     _date = date;
//     var printer = new MedicalAppointmentPrinter();
//     printer.Print(this);
//   }
//   //METHODS OVERLOADING
//   public void Reschedule(int month, int day)
//   {
//     _date = new DateTime(_date.Year, month, day);
//   }
//   // NOTE: problem with method overloading - cant be same signature arguments
//   // public void Reschedule(int monthsToAdd, int daysToAdd)
//   // {
//   //   _date = new DateTime(_date.Year, _date.Month + monthsToAdd, _date.Day + daysToAdd);
//   // }
// }

// //> ABSTRACTION
// var internationalPizzaDay23 = new DateTime(2023, 2, 9);
// internationalPizzaDay23 = internationalPizzaDay23.AddYears(1);
// System.Console.WriteLine("Year is " + internationalPizzaDay23.Year);
// System.Console.WriteLine("Month is " + internationalPizzaDay23.Month);
// System.Console.WriteLine("Day is " + internationalPizzaDay23.Day);
// System.Console.WriteLine("Day of the week is " + internationalPizzaDay23.DayOfWeek);
// Console.ReadKey();

// // var rectangle1 = new Rectangle(); //No constructor
// var rectangle1 = new Rectangle(5, 10); //With constructor
// var calculator = new ShapesMeasurementCalculator();
// // rectangle1.Width = 5;
// // rectangle1.Height = 5;
// // Console.WriteLine(Rectangle.DummyMethod()); //private method cant be accessed - implicit private

// System.Console.WriteLine($"Width is {rectangle1.Width}");
// System.Console.WriteLine($"Height is {rectangle1.Height}");
// System.Console.WriteLine($"Area is {calculator.CalculateRectangleCircumference(rectangle1)}");
// System.Console.WriteLine($"Circumference is {calculator.CalculateRectangleArea(rectangle1)}");
// // System.Console.WriteLine($"Area is {rectangle1.CalculateCircumference()}");
// // System.Console.WriteLine($"Circumference is {rectangle1.CalculateArea()}");

// Console.ReadKey();
// class Rectangle
// {
//   //CLASS VARIABLES
//   public int Width = 1; //default value
//   public int Height = 1; //private by default

//   //CONSTRUCTOR 
//   public Rectangle(int width, int height)
//   {
//     Width = width;
//     Height = height;
//   }
//   //CLASS METHOD
//   void DummyMethod()
//   {
//     Console.WriteLine($"height is +{Height}");
//   }

//   public int CalculateCircumference()
//   {
//     return 2 * Width + 2 * Height;
//   }

//   public int CalculateArea()
//   {
//     return Width * Height;
//   }
// }
// //> ENCAPSULATION
// class ShapesMeasurementCalculator
// {
//   public int CalculateRectangleCircumference(Rectangle rectangle)
//   {
//     return 2 * rectangle.Width + 2 * rectangle.Height;
//   }
//   public int CalculateRectangleArea(Rectangle rectangle)
//   {
//     return rectangle.Width * rectangle.Height;
//   }
// }
// //> CLASS STRUCTURE
// public class HotelBooking
// {
//   public string GuestName;
//   public DateTime StartDate;
//   public DateTime EndDate;
//   public HotelBooking(string guestName, DateTime startDate, int lengthOfStayInDays)
//   {
//     GuestName = guestName;
//     StartDate = startDate;
//     EndDate = startDate.AddDays(lengthOfStayInDays);
//   }
// }
