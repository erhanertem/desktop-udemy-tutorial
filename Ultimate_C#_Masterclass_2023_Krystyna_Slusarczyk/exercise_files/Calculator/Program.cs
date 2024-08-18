Console.WriteLine("Hello from other project!");
Console.WriteLine("Input the first number: ");
int number1 = int.Parse(Console.ReadLine());
Console.WriteLine("Input the second number: ");
int number2 = int.Parse(Console.ReadLine());
Console.WriteLine("What do you want to do?");
Console.WriteLine("[A]dd numbers");
Console.WriteLine("[S]ubtract numbers");
Console.WriteLine("[M]ultiply numbers");
string response = Console.ReadLine().ToLower();

void PrintFinalEquation(int number1, int number2, int output, string @operator)
{
  System.Console.WriteLine(number1 + " " + @operator + " " + number2 + " = " + output);
}
int output = 0;
string @operator = "";
while (true)
{
  if (response == "a")
  {
    @operator = "+";
    output = number1 + number2;
    break;
  }
  else if (response == "s")
  {
    @operator = "-";
    output = number1 - number2;
    break;
  }
  else if (response == "m")
  {
    @operator = "*";
    output = number1 * number2;
    break;
  }
  else
  {
    Console.WriteLine("Invalid choice. Type again...");
  }
  response = Console.ReadLine().ToLower();
}
// Console.WriteLine("The output is " + output);
PrintFinalEquation(number1, number2, output, @operator);
Console.WriteLine("Press any key to close...");
Console.ReadKey();