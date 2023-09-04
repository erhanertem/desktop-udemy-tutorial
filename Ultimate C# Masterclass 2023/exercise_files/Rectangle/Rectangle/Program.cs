//SECTION #3

// //> ENUMS
// Season firstSeason = Season.Spring;
// int firstSeasonAsNumber = (int)firstSeason;
// System.Console.WriteLine(firstSeason + " " + firstSeasonAsNumber);
// public enum Season
// {
//     Spring = 1, Summer, Autumn, Winter
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
