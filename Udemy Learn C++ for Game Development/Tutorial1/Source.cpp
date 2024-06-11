// Section 02

// #include <iostream>
// using namespace std;
// Removes the need to prefix cout

// int main()
// {
//    // std::cout << "You Died!\n";
//    cout << "You Died!\n";

//    char myCharacter;
//    myCharacter = 'y';

//    int myInt;
//    myInt = 13;

//    // std::cout << myCharacter << std::endl;
//    cout << myCharacter << endl;
//    cout << myInt << endl;

//    myCharacter = 'n';
//    myInt = 12;

//    cout << myCharacter << endl;
//    cout << myInt << endl;

// int a = 5;
// int b = 4;
// if (a == b)
// {
//    cout << "Hello!";
// }
// if (a != b)
// {
//    cout << "Oppsy!";
// }

// system("pause");
// }

// int main()
// {
//    int a(1);
//    int b = 13;

//    if (a < b)
//    {
//       cout << "A is less than B" << endl;
//    }
//    else
//    {
//       cout << "A is bigger than B" << endl;
//    }

//    system("pause");
// }

// int main()
// {
//    int a(5);
//    int b(5);

//    if (a == b)
//    {
//       cout << "A is equal to B" << endl;
//    }
//    if (a <= b)
//    {
//       cout << "A is lesser or equal to  B" << endl;
//    }
// }

// int main()
// {
//    int a(6);
//    int b(5);

//    if (a == b)
//    {
//       cout << "A is equal to B" << endl;
//    }
//    else if (a != b)
//    {
//       cout << "A is not equal to B" << endl;
//    }
// }

// Section 3

// #include <iostream>
// using namespace std;

// // Global scope variable
// int a(12);

// int main()
// {
//    // Local block within curlies
//    {
//       // Local block scope variable
//       int b(10);
//       cout << b << endl; // b -> 10

//       // Inner local block scope variable
//       {
//          int c;
//          c = 100;
//          cout << c << endl; // b -> 10
//       }
//    }

//    // Local scope variable overrides global scope variable
//    int a(1000);
//    cout << a << endl; // a -> 12
//    // cout << b << endl; // a -> 12
// }

// // > Functions

// #include <iostream>
// using namespace std;

// void welcome()
// {
//    cout << "Welcome! \n";
// };

// void printNumber(int numToPrint)
// {
//    cout << numToPrint << endl;
// }

// int add(int a, int b)
// {
//    int result;
//    result = a + b;
//    return result;
// }

// int main()
// {
//    welcome();
//    printNumber(4);
//    int c;
//    c = add(1, 4);
//    printNumber(c);

//    system("pause");
// }

// Section 4

// #include <iostream>
// #include <string>
// using namespace std;

// > Prototype Functions
// // // Function declaration
// // void welcome()
// // {
// //    cout << "Welcome!\n";
// // }

// // Function prototype
// void welcome();
// char getYesNo();
// void printResponse(char responseTpPrint);
// void askYesOrNoQuestion();

// int main()
// {
//    askYesOrNoQuestion();
//    system("pause");
// }

// void welcome()
// {
//    cout << "Welcome!\n";
// }

// char getYesNo()
// {
//    cout << "Please answer: y or n.\n";
//    char response;
//    cin >> response;
//    return response;
// }

// void printResponse(char responseToPrint)
// {
//    cout << "Your answer was: " << responseToPrint << endl;
// }

// void askYesOrNoQuestion()
// {
//    welcome();
//    char answer = getYesNo();
//    printResponse(answer);
// }

// > Increment Operators
// int main()
// {
//    int i = 3;
//    int j = ++i;
//    // int j = i++;

//    cout << "I" << i << endl;
//    cout << "J" << j << endl;

//    // float j = 2.0;
//    // // float k = j / i;
//    // int k = j / i;

//    // i /= 2;
//    // i *= 2;
//    // i -= 2;

//    // --i;
//    // i--;
//    // cout << i-- << endl;
//    // cout << --i << endl;
// }

// > While Loops
// int main()
// {
// > While Loop
// int MyInt(0);
// int count(0);
// while (count <= 10)
// {
//    cout << MyInt << endl;
//    MyInt++;
//    count++;
// }

// // > break keyword
// int a = 1;
// while (a <= 100)
// {
//    a++;
//    if (a > 50)
//       break;
// }
// // >continue keyword
// while (a <= 100)
// {
//    a++;
//    if (a > 50)
//       continue;
//    cout << a << endl;
// }

// >Do while loop
// double NumberPi = 3.14159;
// double NumberE = 2.718281828;
// bool Condition = true;
// int count = 0;

// do
// {
//    cout << "The number PI is: " << NumberPi << endl;
//    cout << "The number E is: " << NumberE << endl;
//    cout << "Count: " << NumberE << endl;
//    cout << "Pi + E*count = " << NumberPi + NumberE * count << endl;
//    count++;
//    if (count <= 100)
//    {
//       Condition = true;
//    }
//    else
//    {
//       Condition = false;
//    }
// } while (Condition);

// > For Loop
// for (int i = 1; i < 10; i++)
// {
//    for (int j = 0; j <= 10; j++)
//    {
//       cout << "I: " << i << "J: " << j << endl;
//    }
// }
// }

// > REFERENCES
// // >>Passing By value
// int a = 1;
// void AddOne(int num)
// {
//    num++;
// }

// int main()
// {
//    cout << a << endl;
//    AddOne(a);
//    cout << a << endl;
// }
// >> Passing by Reference
// int a = 1;
// void AddOne(int &num)
// {
//    num++;
// }

// int main()
// {
//    cout << a << endl;
//    AddOne(a);
//    cout << a << endl;
// }

// int main()
// {
//    string myStr = "Druid";
//    string &myRef = myStr;
//    cout << myStr << endl;
//    cout << myRef << endl;

//    myRef += " Mechanics";
//    cout << myStr << endl;
//    cout << myRef << endl;
// }

// void ChangeStr(string &str);
// int main()
// {
//    string myStr = "Druid";
//    ChangeStr(myStr);
//    cout << myStr;
// }

// void ChangeStr(string &str)
// {
//    str += "!";
// }

// > Function Overloading
// void Print(string str);
// void Print(int i);
// void Print(string str1, string str2);
// void Print(string str1, int num);
// // Note: Return type itself does not suffice function overlading as another function with the same arg already exists
// //  string Print(int i);
// int main()
// {
//    Print("Hello World");
//    Print(3);
//    Print("Hello", "Mellow");
//    Print("Hello", 3);
// }
// void Print(string str)
// {
//    cout << str << endl;
// }
// void Print(int i)
// {
//    cout << i << endl;
// }
// void Print(string str1, string str2)
// {
//    cout << str1 << " " << str2 << endl;
// }
// void Print(string str1, int num)
// {
//    cout << str1 << " " << num << endl;
// }

// > STRINGS
// #include <iostream>
// #include <string>
// using namespace std;

// int main()
// {
//    string first;
//    first = "Allen";
//    string last = "Jones";
//    string full = first + " " + last;
//    string pet("Spotty");

//    // // >> C char string
//    // char MyCharstring[5] = {'H', 'e', 'l', 'l', 'o'};
//    // char MyCharstring[6] = "Hello";
// }

// > CONSTANTS
// #include <iostream>
// #include <string>
// using namespace std;

// const float PI = 3.14159;
// int main()
// {
//    PI++;
// }
// const int A;

// void AddOne(const int A)
// {
//    A++;
// }

// void ShowOne(int &num)
// {
//    cout << num << endl;
// }

// void ShowOneConst(const int &num)
// {
//    cout << num << endl;
// }
// int main()
// {
//    // ShowOne(3);

//    int b = 2;
//    ShowOneConst(b);
//    ShowOneConst(3);
// }

// > AND/OR and Truth Tables
// #include <iostream>
// #include <string>
// using namespace std;

// int main()
// {
//    // int a = 5;
//    // int b = -5;

//    // if (a < 10 && b > -10)
//    // {
//    //    cout << "Hellow";
//    // }
//    // if (a > 10 || b > 6)
//    // {
//    //    cout << "Mellon";
//    // }

//    int i = 1;
//    int j = 2;
//    int k = 3;
//    if ((i <= k && i < j) && j == k)
//    {
//       cout << "This will be printed. " << endl;
//    }
// }

// > ARRAYS
// #include <iostream>
// #include <string>
// using namespace std;

// int main()
// {
//    int myIntArray[3];
//    myIntArray[0] = 1;
//    myIntArray[1] = 2;
//    myIntArray[2] = 3;

//    double myDubArray[] = {{3.14159}, {2.718122}};
//    cout << myDubArray[1];
//    cout << myDubArray[0];

//    int MyIntArray[10];
//    for (int i = 0; i < 10; i++)
//    {
//       MyIntArray[i] = 1;
//       cout << MyIntArray[i] << endl;
//    }

//    int MyArray[5] = {1,
//                      2,
//                      99,
//                      11,
//                      15};

//    for (int i = 0; i < 5; i++)
//    {
//       cout << "MyArray[" << i << "] -> " << MyArray[i] << endl;
//    }
// }

// > ENUMS
// #include <iostream>
// #include <string>
// using namespace std;

// enum PlayerStatus
// {
//    PS_Crouched,
//    PS_Standing,
//    PS_Walking,
//    PS_Running,
// };

// enum MovementStatus
// {
//    MS_Crouched,
//    MS_Running,
// };

// int main()
// {
//    PlayerStatus status;  // Declare this variable as enum type
//    status = PS_Crouched; // Assign one of enum const options
//    if (status == PlayerStatus::PS_Crouched)
//    {
//       cout << "The player is crouching! \n";
//    }
//    status = MovementStatus::MS_Running; // Assign one of enum const options
//    if (status == PS_Crouched)
//    {
//       cout << "The player is crouching! \n";
//    }
// }

// > SWITCH STATEMENTS
// #include <iostream>
// #include <string>
// using namespace std;

// enum PlayerStatus
// {
//    PS_Running,
//    PS_Walking,
//    PS_Crouching,
// };

// const float RunSpeed = 800.f;
// const float WalkSpeed = 500.f;
// const float CrouchSpeed = 350.f;

// void GetMovementSpeed(PlayerStatus P_Status, float &speed);

// int main()
// {
//    float MovementSpeed;

//    PlayerStatus status = PS_Crouching;

//    GetMovementSpeed(status, MovementSpeed);
//    cout << "Movement Speed = " << MovementSpeed << endl;
// }

// void GetMovementSpeed(PlayerStatus P_Status, float &speed)
// {
//    // if (P_Status == PlayerStatus::PS_Running)
//    // {
//    //    speed = RunSpeed;
//    // }
//    // else if (P_Status == PlayerStatus::PS_Walking)
//    // {
//    //    speed = WalkSpeed;
//    // }
//    // else if (P_Status == PlayerStatus::PS_Crouching)
//    // {
//    //    speed = CrouchSpeed;
//    // }

//    switch (P_Status)
//    {
//    case PlayerStatus::PS_Running:
//       speed = RunSpeed;
//       break;
//    case PlayerStatus::PS_Walking:
//       speed = WalkSpeed;
//       break;
//    case PlayerStatus::PS_Crouching:
//       speed = CrouchSpeed;
//       break;
//    default:
//       cout << "Out of bound status" << endl;
//    }
// }

// > STRUCTS
// #include <iostream>
// #include <string>
// using namespace std;

// struct LocationVector
// {
//    float X;
//    float Y;
//    float Z;
// };

// struct Player
// {
//    int Level;
//    float Health;
//    float Damage;
//    float Stamina;

//    LocationVector Location = {0.f, 0.f, 0.f};
//    void DisplayLocation()
//    {
//       cout << "Location.X= " << Location.X << endl;
//       cout << "Location.Y= " << Location.Y << endl;
//       cout << "Location.Z= " << Location.Z << endl;
//    }
//    void TakeDamage(float dmg)
//    {
//       Health -= dmg;
//    }
//    int GetLevel()
//    {
//       if (Level > 10)
//       {
//          cout << "Level is over 10!\n";
//       }
//       return Level;
//    }
// };

// int main()
// {
//    Player p_1;     // Instantiate a struct
//    p_1.Level = 11; // Provide values later
//    p_1.Health = 100.f;
//    p_1.Damage = 10.f;
//    p_1.Stamina = 20.f;

//    cout << "p_1 level = " << p_1.Level << endl;
//    cout << "p_1 level = " << p_1.GetLevel() << endl;

//    p_1.TakeDamage(40.f);
//    cout << "p_1 Health = " << p_1.Health << endl;

//    p_1.DisplayLocation();

//    Player p_2 = {1, 50.f, 40.f, 35.54f, {35.5f, 67.54f, 100.003f}}; // Instantiate a struct with values directly
//    p_2.DisplayLocation();
// }

// > POINTERS
// #include <iostream>
// #include <string>
// using namespace std;

// struct Container {
//    string Name;

//    int X;
//    int Y;
//    int Z;
// };

// int main()
// {
//    int MyInt = 2;

//    int* pointer;     // Create a pointer variable
//    pointer = &MyInt; // Referenceto MyInt via & (address of operator)
//    cout << pointer << endl;  // 0xb8275ffaf4 --> We are not interested in this value. It will change the next time run!
//    cout << *pointer << endl; // 2

//    int a = 50;
//    pointer = &a;
//    cout << *pointer << endl; // 2

//    // > Pointer arithmetics
//    int numbers[] = { 0,1,2,3,4,5,6,7,8,10 };
//    int* NumPtr = numbers; // 0 - gets the first element on the array
//    cout << *NumPtr << endl;
//    NumPtr++;
//    cout << *NumPtr << endl;
//    NumPtr--;
//    cout << *NumPtr << endl;
//    NumPtr += 3;
//    cout << *NumPtr << endl;


//    Container container = { "Sam", 5,6,7 };
//    Container* PtrToCont = &container;
//    cout << (*PtrToCont).Name << endl;
//    cout << PtrToCont->Name << endl;

// }

// > OBJECTS & CLASSES
// #include <iostream>
// #include <string>
// using namespace std;

// class Dog {
//    //Accessor keyword
// public:
//    // // -> Class constructor function created within the class itself
//    // Dog() {
//    //    Bark();

//    //    Name = "Default Name";
//    //    Age = 30;
//    //    Health = 100.f;
//    // };
//    // -> Class constructor function 
//    Dog();

//    // Class Variables & functions
//    string Name;
//    int Age;
//    float Health;
//    void Bark() {
//       cout << "Woof" << endl;
//    }
// };

// int main()
// {
//    Dog dog; // Create an instance object from a Dog class 
//    cout << dog.Name << endl;
//    cout << dog.Age << endl;
//    cout << dog.Health << endl;

//    dog.Name = "Sam";
//    dog.Age = 10;
//    dog.Health = 50.f;
//    cout << dog.Name << endl;
//    cout << dog.Age << endl;
//    cout << dog.Health << endl;

// }

// Dog::Dog() {
//    Bark();
//    Name = "Default Name";
//    Age = 30;
//    Health = 100.f;
// };

// #include <iostream>
// #include <string>
// using namespace std;

// struct Cat {
//    Cat();

//    int age;
//    float health;

//    void Meow();
// };
// // Externally Define Struct Constructor
// Cat::Cat() {
//    cout << "A new cat is born!" << endl;

//    age = 3;
//    health = 75.f;

//    Meow();
// }
// // Externally Define A Struct Function
// void Cat::Meow() {
//    cout << "My age is: " << age << ".\n";
//    cout << "My health is: " << health << ".\n";
// };

// int main()
// {
//    Cat cat;

//    cat.age += 5;
//    cat.Meow();
// }

// >INHERITANCE
// #include <iostream>
// #include <string>
// using namespace std;

// class Animal {
// public:
//    // Blank consturctor declaration
//    Animal();
//    // Blank constructor declaration w/ overloading
//    Animal(string name, int age, int numberOfLimbs);

//    string name;
//    int age;
//    int numberOfLimbs;

//    void Report();
// };

// class Dog : public Animal {
// public:
//    // Regular Constructor function
//    Dog();
//    // Overload Dog constructor
//    Dog(string _name, int _age, int _numberOfLimbs);
// };

// // Dog constructor external declaration
// Dog::Dog() {
//    cout << "A dog is BORN!" << endl;
// };
// // Overloaded Dog constructor external declaration
// Dog::Dog(string _name, int _age, int _numberOfLimbs) :Animal(_name, _age, _numberOfLimbs) {
//    cout << "Overloaded dog is BORN!" << endl;
// };


// // Animal constructor external declaration
// Animal::Animal() {
//    cout << "An animal is born!" << endl;
//    name = "Default name";
//    age = 5;
//    numberOfLimbs = 2;
//    // Report();
// };
// // // Overloading constructor syntax
// // Animal::Animal(string _name, int _age, int _numberOfLimbs) {
// //    cout << "An animal is born!" << endl;
// //    name = _name;
// //    age = _age;
// //    numberOfLimbs = _numberOfLimbs;
// //    Report();
// // };
// // Shorthand Overloading constructor syntax
// Animal::Animal(string _name, int _age, int _numberOfLimbs) : name(_name), age(_age), numberOfLimbs(_numberOfLimbs) { Report(); };

// void Animal::Report() {
//    cout << "Name: " << name << endl;
//    cout << "Age: " << age << endl;
//    cout << "NumberOfLimbs: " << numberOfLimbs << endl;
// };

// int main()
// {
//    // Dog dog;
//    Dog dog("Maxi", 2, 2);

//    // Animal animal;
//    // Animal animal_2("Matrix", 2, 40);
// }

// > ACCESS MODIFIERS
#include <iostream>
#include <string>
using namespace std;

// PARENT CLASS
class Creature {
public:
   Creature(); //Constructor

   void Setname(string _name);
   string Getname();

   float Gethealth();

   void TakeDamage(float damage);

private:
   string name;
   float health;

protected:
   int NumberOfLimbs;

};

// INHERITING CHILD CLASS
class Goblin :public Creature {
public:
   Goblin(); //Constructor

   int GetNumberOfLimbs();
};

Goblin::Goblin() {
   NumberOfLimbs = 5;
}
int Goblin::GetNumberOfLimbs() {
   return NumberOfLimbs;
}

Creature::Creature() { cout << "A creature has been created!" << endl; };
void Creature::Setname(string _name) { name = _name; }
string Creature::Getname() { return name; }
float Creature::Gethealth() { return health; }

void Creature::TakeDamage(float damage) {
   float Total;
   Total = health - damage;

   if (Total <= 0.f) {
      cout << Getname() << "has died\n";
   }
   else {
      health -= damage;
   }
   cout << "health: " << Gethealth() << endl;
}

int main()
{
   Creature Igor;
   Igor.Setname("Maxi");
   cout << Igor.Getname() << endl;

   Goblin Gobby;
   Gobby.Setname("Gobby");
   cout << Gobby.Getname() << " " << Gobby.GetNumberOfLimbs() << endl;
}