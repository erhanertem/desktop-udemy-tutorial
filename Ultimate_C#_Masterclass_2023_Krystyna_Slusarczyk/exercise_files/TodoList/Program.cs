// SECTION #2
// *************************************************************
// ****************TODOLIST APP*********************************

var userChoice = "";
// var toDoList = new List<string>();
var toDoList = new List<string> { "Go to dentist", "Hello my dear" };

Console.WriteLine("Hello!");
string InitMenu()
{
  bool choiceIsValid = false;
  bool ChoiceIsValid(string userChoice)
  {
    switch (userChoice.ToUpper())
    {
      case "S":
        return true;
      case "A":
        return true;
      case "R":
        return true;
      case "E":
        return true;
      default:
        System.Console.WriteLine("Invalid Choice!");
        return false;
    }
  }

  do
  {
    Console.WriteLine("What do you want to do ?");
    Console.WriteLine("[S]ee all TODOs");
    Console.WriteLine("[A]dd a TODO");
    Console.WriteLine("[R]emove a TODO");
    Console.WriteLine("[E]xit");
    userChoice = Console.ReadLine();
    Console.WriteLine(" ");
    choiceIsValid = ChoiceIsValid(userChoice);

  } while (!choiceIsValid);

  return userChoice;
}

while (true)
{
  InitMenu();
  switch (userChoice.ToUpper())
  {
    case "S":
      SeeAllToDos(toDoList);
      continue;
    case "A":
      AddAToDo(toDoList);
      continue;
    case "R":
      RemoveAToDo(toDoList);
      continue;
    case "E":
      break;
  }
  System.Console.WriteLine("Program Ended, Click any to close");
  Console.ReadKey(); //preventing window closing
  System.Environment.Exit(0);
}

void RemoveAToDo(List<string> list)
{
  //RENDER PREVIEW LIST
  RenderList("Select the index of the TODO you want to remove", list, "");
  //GET INPUT
  int maxIndex = list.Count;
  while (true)
  {
    var userInput = Console.ReadLine();
    bool isParsingSuccess = int.TryParse(userInput, out int targetIndex);
    System.Console.WriteLine(isParsingSuccess);
    if (isParsingSuccess && targetIndex >= 1 && targetIndex <= maxIndex)
    {
      System.Console.WriteLine(targetIndex);
      list.RemoveAt(targetIndex - 1);
      break;
    }
  }
}

void AddAToDo(List<string> list)
{
  int count = 0;
  string userInput;
  do
  {
    // GREETINGS
    if (count > 0) { WarnUserForDupEntry(); }
    else
    {
      Console.WriteLine("Type your ToDo Item: ");

    }
    //GET INPUT
    userInput = Console.ReadLine();
    //SANITIZE INPUT
    userInput = SanitizeInput(userInput);
    //Increment Count
    count++;
  } while (list.Contains(userInput));
  //IF OK, ADD TO THE LIST
  if (count > 1) { System.Console.WriteLine("Okay, thats better!"); }
  list.Add(userInput);
}


void WarnUserForDupEntry()
{
  System.Console.WriteLine("This is a dupe entry! Please provide a unique one:)");
}

string SanitizeInput(string userInput)
{
  return userInput.ToUpper().Substring(0, 1) + userInput.Substring(1).ToLower();
}

void SeeAllToDos(List<string> list)
{
  RenderList("", list, " ");
  // Console.WriteLine(" ");
}

void RenderList(string preText, List<string> list, string postText)
{
  System.Console.WriteLine(preText);
  foreach (var item in list)
  {
    System.Console.WriteLine($"{list.IndexOf(item) + 1}. {item}");
  }
  System.Console.WriteLine(postText);
}

// **********************************************************

// //>TRYPARSE METHOD
// // System.Console.WriteLine("Enter a number: ");
// // var userInput = Console.ReadLine();
// // int asNumber = int.Parse(userInput); //-->THROWS AN RUNTIME EXCEPTION OF A STRING IS INPUT
// bool isParsingSuccesful;
// do
// {
//   System.Console.WriteLine("Enter a number: ");
//   var userInput = Console.ReadLine();
//   isParsingSuccesful = int.TryParse(userInput, out int number);
//   if (isParsingSuccesful)
//   {
//     System.Console.WriteLine($"Parsing worked, number is : {number}");
//   }
//   else
//   {
//     System.Console.WriteLine("Parsing was not succesful");
//   }
// } while (!isParsingSuccesful);
// Console.ReadKey();

//>OUT KEYWORD
// var numbers = new[] { 10, -8, 2, 12, -17 };
// int nonPositiveCount; //INITIALZIE IT HERE 
// // foreach (var item in GetOnlyPositive(numbers, out int nonPositiveCount)) //OR INITIALIZE IT RIGHT IN THE ARGUMENT FIELD
// foreach (var item in GetOnlyPositive(numbers, out nonPositiveCount)) //OR INITIALIZE IT RIGHT IN THE ARGUMENT FIELD
// {
//   System.Console.WriteLine(item);
// }
// System.Console.WriteLine("Count of non positive: " + nonPositiveCount);

// static List<int> GetOnlyPositive(int[] numbers, out int countOfNonPositive)
// {
//   countOfNonPositive = 0;
//   var result = new List<int>();
//   foreach (var number in numbers)
//   {
//     if (number > 0) { result.Add(number); }
//     else
//     {
//       countOfNonPositive++;
//     }
//   }
//   return result;
// }
// Console.ReadKey();

// //>LISTS
// List<string> words = new List<string>();
// var words = new List<string> { "one", "two" };
// System.Console.WriteLine("Count of elements is " + words.Count);
// words.Add("hello");
// System.Console.WriteLine("Count of elements is " + words.Count);
// words[0] = "uno";
// words.Remove("two");
// words.RemoveAt(0);
// System.Console.WriteLine($"superman is @ flat {words[0]}");
// words.AddRange(new string[] { "three", "four", "five", "four" });

// System.Console.WriteLine("Index of element 'four' is " + words.IndexOf("four"));
// System.Console.WriteLine("Contains 'seven'?: " + words.Contains("seven"));

// words.Clear();

// foreach (var word in words)
// {
//   System.Console.WriteLine(word);
// }

// List<string> GetOnlyUpperCaseWords(List<string> words)
// {
//   var deDup = new List<string>();
//   foreach (var word in words)
//   {
//     //deDup THE WORDS
//     if (deDup.Contains(word))
//     {
//       continue;
//     }
//     //CHECK IF uppercase
//     if (IsUpperCase(word))
//     {
//       deDup.Add(word);
//     }
//   }
//   bool IsUpperCase(string word)
//   {
//     foreach (char letter in word)
//     {
//       if (!char.IsUpper(letter))
//       {
//         return false;
//       }
//     }
//     return true;
//   }
//   return deDup;
// }
// var words = new List<string> { "one", "TWO", "THREE", "four", "THREE", "one" };
// GetOnlyUpperCaseWords(words);
// Console.ReadKey();



// //>ARRAYS
// int[] numbers = new int[3];
// string[] txt = new string[3];
// numbers[0] = 5;
// numbers[1] = 33;
// numbers[2] = -1;
// System.Console.WriteLine(Array.IndexOf(numbers, 33));

// int firstFromEnd = numbers[^1];
// int secondFromEnd = numbers[^2];
// System.Console.WriteLine(firstFromEnd);
// System.Console.WriteLine(secondFromEnd);

// for (int i = 0; i < 3; i++)
// {
//   // System.Console.WriteLine($"Element at index 0 is {numbers[i]}");
//   System.Console.WriteLine($"Element at index {i} is {txt[i]}");
// }

// int[] numbers2 = new int[] { 1, 2, 3 };

// var sum = 0;
// for (int i = 0; i < numbers2.Length; i++)
// {
//   sum += numbers2[i];
// }
// System.Console.WriteLine($"The array total is {sum}");

//>2DARRAYS
// char[,] letters = new char[2, 3];
// letters[0, 0] = 'A';
// letters[0, 1] = 'B';
// letters[0, 2] = 'C';
// letters[1, 0] = 'D';
// letters[1, 1] = 'E';
// letters[1, 2] = 'F';


// var height = letters.GetLength(0);
// var width = letters.GetLength(1);
// System.Console.WriteLine($"Height is {height}");
// System.Console.WriteLine($"Width is {width}");

// // for (int i = 0; i < height; i++)
// for (int i = 0; i < letters.GetLength(0); i++)
// {
//   // for (int j = 0; j < width; j++)
//   for (int j = 0; j < letters.GetLength(1); j++)
//   {
//     System.Console.WriteLine($"Node is {letters[i, j]}");
//   }
// }

// int FindMax(int[,] numbers)
// {
//   if (numbers.GetLength(0) == 0 || numbers.GetLength(1) == 0) { return -1; }
//   int maxNum = [0, 0];
//   for (int i = 0; i < numbers.GetLength(0); i++)
//   {
//     for (int j = 0; j < numbers.GetLength(1); j++)
//     {
//       if (numbers[i, j] < maxNum) { maxNum = numbers[i, j]; }
//     }

//   }
//   return maxNum;
// }

// //>FOREACH LOOP
// var words = new[] { "one", "two", "three", "four", };
// foreach (var word in words)
// {
//   System.Console.WriteLine(word);
// }
// Console.ReadKey();

//>WHILE LOOP
// var number = 0;
// while (number < 10)
// {
//   // ++number;
//   // number++;
//   // number *= 2;
//   number += 2;
//   System.Console.WriteLine("Number is: " + number);
// }
// System.Console.WriteLine("Enter a word");
// var userInput = Console.ReadLine();
// while (userInput.Length < 15)
// {
//   userInput += 'a';
//   System.Console.WriteLine(userInput);
// }
// System.Console.WriteLine("The loop is finished");
// //>DO WHILE LOOP
// string word;
// do
// {
//   System.Console.WriteLine("Enter a word longer than 10 letters");
//   word = Console.ReadLine();
// }
// while (word.Length <= 10);
// //>FOR LOOP
// for (int i = 0; i < 5; i++)
// {
//   System.Console.WriteLine("Hello");
// }
// for (var i = 0; i < 100; i++)
// {
//   System.Console.WriteLine($"i is +{i}");
//   if (i > 25)
//   {
//     System.Console.WriteLine("Gotchya!!");
//     break;
//   }
// }

// int userNumber;
// do
// {
//   System.Console.WriteLine("Enter a number larger than 10: ");
//   var userInput = Console.ReadLine();
//   if (userInput == "stop")
//   {
//     break;
//   }
//   bool isParsableToInt = userInput.All(char.IsDigit);

//   if (!isParsableToInt)
//   {
//     userNumber = -1;
//     continue;
//   }
//   userNumber = int.Parse(userInput);
// } while (userNumber <= 10);

// for (var i = 0; i < 20; i++)
// {
//   if (i % 2 == 0)
//   {
//     continue;
//   }
//   System.Console.WriteLine($"i is {i}");
// }

// for (int i = 0; i < 4; i++)
// {
//   for (int j = 0; j < 3; j++)
//   {
//     System.Console.WriteLine($"is is {i}, j is {j}");
//   }
// }
// System.Console.WriteLine("The loop is finished");
// System.Console.ReadKey(); //preventing window closing

// int i = 3;
// Console.WriteLine(i++); // output: 3
// Console.WriteLine(++i); // output: 4

// //>CHAR
// char ConvertPointsToGrade(int points)
// {
//   switch (points)
//   {
//     case 10:
//     case 9:
//       return 'A';
//     case 8:
//     case 7:
//     case 6:
//       return 'B';
//     case 5:
//     case 4:
//     case 3:
//       return 'C';
//     case 2:
//     case 1:
//       return 'D';
//     case 0:
//       return 'E';
//     default:
//       return '!';
//   }
// }

// //>SWITCH STATEMENTS
// Console.WriteLine("Hello!");
// Console.WriteLine("[S]ee all TODOs");
// Console.WriteLine("[A]dd a TODO");
// Console.WriteLine("[R]emove a TODO");
// Console.WriteLine("[E]xit");
// var userChoice = Console.ReadLine();
// switch (userChoice)
// {
//   case "s":
//   case "S":
//     PrintSelectedOption("See all TODOs");
//     break;
//   case "a":
//   case "A":
//     PrintSelectedOption("Add a TODO");
//     break;
//   case "R":
//     PrintSelectedOption("Remove a TODO");
//     break;
//   case "E":
//     PrintSelectedOption("Exit");
//     break;
//   default:
//     System.Console.WriteLine("Invalid Choice!");
//     break;
// }
// void PrintSelectedOption(string selectedOption)
// {
//   System.Console.WriteLine("Selected option: " + selectedOption);
// }
// Console.ReadKey(); //preventing window closing

// string ConvertPointsToGrade(int points)
// {
//   switch (points)
//   {
//     case 10:
//     case 9:
//       return "A";
//     case 8:
//     case 7:
//     case 6:
//       return "B";
//     case 5:
//     case 4:
//     case 3:
//       return "C";
//     case 2:
//     case 1:
//       return "D";
//     case 0:
//       return "E";
//     default:
//       return "Invalid Entry";
//   }
// }

// //>STRING INERNPOLATION
// int a = 4, b = 2, c = 10;
// System.Console.WriteLine("First is: " + a + ", second is: " + b + ", third is: " + c);
// System.Console.WriteLine($"First is {a}, second is: {b}, third is: {c}");
// System.Console.WriteLine($"Total is {a + b + c}");

// //>VERBATIM STRINGS
// string str = @"This is a
// ""multiline""
// string in C#.";
// System.Console.WriteLine(str);


// Console.WriteLine("Provide a number.");
// int number = int.Parse(Console.ReadLine());
// Console.WriteLine(number);



// int Add(int a, int b)
// {
//   return a + b;
// }
// var result = Add(10, 5);
// bool IsLong(string input)
// {
//   if (input.Length > 10)
//   {
//     return true;
//   }
//   return false;
// }
// bool IsLong2(string input)
// {
//   return input.Length > 10;
// }
// bool isLong = IsLong(userChoice);

// //>IF STATEMENTS
// Console.WriteLine("Hello!");
// Console.WriteLine("[S]ee all TODOs");
// Console.WriteLine("[A]dd a TODO");
// Console.WriteLine("[R]emove a TODO");
// Console.WriteLine("[E]xit");
// var userChoice = Console.ReadLine();
// if (userChoice == "S") { PrintSelectedOption("See all TODOs"); }
// else if (userChoice == "A") { PrintSelectedOption("Add a TODO"); }
// else if (userChoice == "R") { PrintSelectedOption("Remove a TODO"); }
// else if (userChoice == "E") { PrintSelectedOption("Exit"); }
// void PrintSelectedOption(string selectedOption)
// {
//   System.Console.WriteLine("Selected option: " + selectedOption);
// }
// Console.ReadKey(); //preventing window closing

// if (userChoice.Length == 0)
// {
//   Console.WriteLine("Empthy Choice!");
//   int number = 5;
//   Console.WriteLine(number);
//   var word = "ABC";
//   if (word.Length > 0)
//   {
//     // var number = 10;
//     System.Console.WriteLine(userChoice);
//     System.Console.WriteLine(number);
//   }
// }
// else
// {
//   // int number = 10;
//   // System.Console.WriteLine(number);
//   Console.WriteLine("Non-empty choice: " + userChoice);
//   // System.Console.WriteLine(number);
// }
// Console.WriteLine("User Input: " + userChoice);
// // System.Console.WriteLine(number);

// todo: handle user's input
/* this
is
multiple line
commenting
*/
// if (userChoice.Length < 10)
// {
//   Console.WriteLine("Short Answer!");
// }

// if (userChoice.Length <= 3)
// {
//   Console.WriteLine("Short Answer!");
// }
// else if (userChoice.Length < 10)
// {
//   Console.WriteLine("Medium Answer");
// }
// else Console.WriteLine("Large Answer")

// if (userChoice == "ABC")
// {
//   Console.WriteLine("User typed ABC");
// }
// else
// {
//   Console.WriteLine("User did not type ABC");
// }

// int number = 0;

// string result;

// if (number < 0)
// {
//   result = "negative";
// }
// else if (number == 0)
// {
//   result = "zero";
// }
// else
// {
//   result = "positive";
// }
// Console.WriteLine(result);

// var number = 10;
// var isLargerThan4AndSmallerThan9 = number > 4 && number < 9;
// var isEqualTo2OrLargerThan6 = number == 20 || number > 6;
// var condition = number == 123 || (number % 2 == 0 && number < 20);
// var comdition2 = number < 0 && (number % 2 == 1); //SHORTCIRCUTING OPERATION

// int number = 4;
// bool isUserInputAbc1 = !(userChoice == "ABC");
// bool isUserInputAbc2 = userChoice == "ABC";
// bool isUserInputAbc3 = userChoice != "ABC";
// var isLargerThan5 = number > 5;
// var is10Module3EqualTo1 = 10 % 3 == 1;
// var isEven = 10 % 2 == 0;
// bool someBoolean = true;
// var someOtherBoolean = false;
// bool isUserInputAbc = userChoice == "ABC";

// userChoice = "ABC";
// var result = "abc" + "def" + "ghi";

// string userInput = "A";
// Console.WriteLine(userInput);
// userInput = "ABC";
// Console.WriteLine(userInput);
// int number; //DECLARE A VARIABLE
// Console.WriteLine(number);
// number = 7; //INITIALZIE A VARIABLE
// number = "zsyz"; //TYPE MISMATCH
// //>MULTIPLE DECLARATION
// int a = 1, b = 2;
// //>MULTIPLE INITIALIZATION
// string name, lastname; 
// string sir = "John";
// Console.WriteLine(number);
// //>RESERVED KEYWORDS
// int int =10;
// //>BYPASS RESERVED KEYWORDS VIA @PREFIX
// string @class = "First";
// int 1number;
// int number_one;
// int count;
// int Count;
// string thisSentenceIsWritten;

// //>OPERATORS
// int a = 10;
// int b = 5;
// ++a;
// --b;
// Console.WriteLine("Addition: " + (a + b));
// Console.WriteLine("Subtraction: " + (a - b));
// Console.WriteLine("Multiplication: " + (a * b));
// Console.WriteLine("Division: " + (a / b));
// Console.WriteLine("Jason" + " " + "Smith");
// string word = "abc";
// Console.WriteLine(word + a);

// var word = "Ernie";
// var number = 5;
// word = 1232;
// var wordy;
// wordy = 121321;