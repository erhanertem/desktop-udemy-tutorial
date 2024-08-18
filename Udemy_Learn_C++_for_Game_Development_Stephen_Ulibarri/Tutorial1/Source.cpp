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
// #include <iostream>
// #include <string>
// using namespace std;

// // PARENT CLASS
// class Creature {
// public:
//    Creature(); //Constructor

//    void Setname(string _name);
//    string Getname();

//    float Gethealth();

//    void TakeDamage(float damage);

// private:
//    string name;
//    float health;

// protected:
//    int NumberOfLimbs;

// };

// // INHERITING CHILD CLASS
// class Goblin :public Creature {
// public:
//    Goblin(); //Constructor

//    int GetNumberOfLimbs();
// };

// Goblin::Goblin() {
//    NumberOfLimbs = 5;
// }
// int Goblin::GetNumberOfLimbs() {
//    return NumberOfLimbs;
// }

// Creature::Creature() { cout << "A creature has been created!" << endl; };
// void Creature::Setname(string _name) { name = _name; }
// string Creature::Getname() { return name; }
// float Creature::Gethealth() { return health; }

// void Creature::TakeDamage(float damage) {
//    float Total;
//    Total = health - damage;

//    if (Total <= 0.f) {
//       cout << Getname() << "has died\n";
//    }
//    else {
//       health -= damage;
//    }
//    cout << "health: " << Gethealth() << endl;
// }

// int main()
// {
//    Creature Igor;
//    Igor.Setname("Maxi");
//    cout << Igor.Getname() << endl;

//    Goblin Gobby;
//    Gobby.Setname("Gobby");
//    cout << Gobby.Getname() << " " << Gobby.GetNumberOfLimbs() << endl;
// }

// Section 5
// > STACK & HEAP & POINTERS
// #include <iostream>
// #include <string>
// using namespace std;

// struct Character {

//    // Externally Provided Constructor
//    Character();
//    // Internally Priovided Constructor
//    // Character() {
//    //    Name = "Default Name";
//    //    Health = 100.f;
//    // }; // Constructor

//    string Name;
//    float Health;
// };

// Character::Character() {
//    Name = "Default Name";
//    Health = 100.f;
// }

// int main() {
//    Character Char; // Goes into STACK
//    Character* PtrToChar = new Character(); // Goes into HEAP
//    PtrToChar->Name = "Neo";
//    PtrToChar->Health = 100.f;
//    cout << PtrToChar->Name << endl;
//    cout << PtrToChar->Health << endl;
//    delete PtrToChar; //Removes the Dynamically allocated memory from the HEAP 
// }

// > DESTRUCTORS
// #include <iostream>
// #include <string>
// using namespace std;

// class Weapon {
// public:
//    // Constructor
//    Weapon() {
//       cout << "A new weapon is created" << endl;
//    };
//    // Destructor
//    ~Weapon() {
//       cout << "A new weapon is destroyed" << endl;
//    }
// };

// int main() {
//    // Create a dynamic memory allocated object @ HEAP
//    Weapon* gun = new Weapon;
//    // 
//    delete gun;
// }

// #include <iostream>
// #include <string>
// using namespace std;

// class Character {
// public:
//    Character() {
//       cout << "A new character is created \n";
//       CharacterAge = new int(1); // Initialize Dynamically Allocated variables 
//       CharacterHealth = new float(100.f); //Initialize Dynamically Allocated variables 
//    };
//    ~Character() {
//       cout << "A new character was destroyed \n";
//       delete CharacterAge; //Dispose Dynamically Allocated Memory
//       delete CharacterHealth; //Dispose Dynamically Allocated Memory
//    };

//    int* CharacterAge; //Declare Dynamically Allocated variables 
//    float* CharacterHealth; //Declare Dynamically Allocated variables 
// };

// int main() {
//    Character* Char = new Character;
//    delete Char;
// }

// > STATIC KEYWORD
// -> STATIC VARIABLES IN FUNCTIONS
// #include <iostream>
// #include <string>
// using namespace std;

// void update_count() {
//    static int count = 0;
//    count++;
//    cout << count << endl;
// };
// int main() {
//    update_count();
//    update_count();
// }

// -> STATIC KEYED CLASS
// #include <iostream>
// #include <string>
// using namespace std;
// // Create a class called Dog
// class Dog {};
// int main() {
//    // Create a Dog class with static key - Singleton
//    if (true) { static Dog; };
// }

// #include <iostream>
// #include <string>
// using namespace std;
// class Item {
// public:
//    Item() {
//       cout << "An item has been created \n";
//    }
//    ~Item() {
//       cout << "An item has been destroyed \n";
//    }
// };
// int main() {
//    { static Item item; }
// }

// -> STATIC VARIABLES INSIDE A CLASSE
// #include <iostream>
// #include <string>
// using namespace std;

// class Creature {
// public:
//    static int creature_count; //Declare a static variable inside a class

//    Creature() {
//       creature_count++;
//       cout << creature_count << endl;
//    }
// };
// // Cannot re-define, but make operations on it - Initialize the static variable of a class
// int Creature::creature_count = 0;

// int main() {
//    Creature cre_1; // 1
//    Creature cre_2; // 2
//    Creature cre_3; // 3
// }

// #include <iostream>
// #include <string>
// using namespace std;
// class Critter {
// public:
//    Critter() {
//       cout << "A critter is born \n";
//       CritterCount++;
//    };
//    static int CritterCount;
// };
// int Critter::CritterCount = 0;
// int main() {
//    // Critter::CritterCount = 13;
//    // cout << Critter::CritterCount << endl;

//    Critter crit;
//    cout << Critter::CritterCount << endl;
//    Critter crit_;
//    cout << Critter::CritterCount << endl;
// }

// -> STATIC FUNCTIONS INSIDE A CLASS
// #include <iostream>
// #include <string>
// using namespace std;

// class Announcer {
// public:
//    static void Announce() { cout << "Welcome!" << endl; }
// };

// int main() {
//    Announcer::Announce();
// }

// > VIRTUAL FUNCTIONS
// #include <iostream>
// #include <string>
// using namespace std;
// class Parent {
// public:
//    virtual void Greet() {
//       cout << "Hello\n";
//    }
// };
// class Child : public Parent {
// public:
//    void Greet() {
//       cout << "Ciao\n";
//    }
// };
// class GrandChild : public Child {
// public:
//    void Greet() override {
//       cout << "Mamamia\n";
//    }
// };
// int main() {
//    Parent parent;
//    Child child;
//    GrandChild grand_child;
//    parent.Greet();
//    child.Greet();
//    grand_child.Greet();
// }

// #include <iostream>
// #include <string>
// using namespace std;

// class Object {
// public:
//    virtual void BeginPlay();
// };


// class Actor : public Object {
// public:
//    void BeginPlay() override;
// };

// int main() {
//    Object* objPtr = new Object;
//    objPtr->BeginPlay();

//    Actor* actPtr = new Actor;
//    actPtr->BeginPlay();

//    delete objPtr;
//    delete actPtr;
// }

// void Object::BeginPlay() {
//    cout << "Object BeginPlay() called \n";
// };
// void Actor::BeginPlay() {
//    cout << "Actor BeginPlay() called \n";
// };

// > POLYMORPHISM
// #include <iostream>
// #include <string>
// using namespace std;
// class Object {
// public:
//    virtual void BeginPlay();
// };
// class Actor : public Object {
// public:
//    void BeginPlay() override;
// };
// class Pawn : public Actor {
// public:
//    void BeginPlay() override;
// };

// int main() {
//    Object* objPtr = new Object;
//    Actor* actorPtr = new Actor;
//    Pawn* pawnPtr = new Pawn;

//    Object* ObjectArray[] = { objPtr, actorPtr, pawnPtr };

//    delete objPtr;
//    delete actorPtr;
//    delete pawnPtr;
// }

// void Object::BeginPlay() {
//    cout << "Object BeginPlay() called.\n";
// }
// void Actor::BeginPlay() {
//    cout << "Actor BeginPlay() called.\n";
// }
// void Pawn::BeginPlay() {
//    cout << "Pawn BeginPlay() called.\n";
// }

// > MULTI INHERITANCE
// class P {
// public:
//    void f() {};
// };
// class A : public P {};
// class B : public P {};
// class C : public A, public B {};

// int main() {
//    C c;
//    c.B::f();
// }

// class P {
// public:
//    void fn() {};
// };
// class A : virtual public P {};
// class B : virtual public P {};
// class C : public A, public B {};

// int main() {
//    C c;
//    // c.B::f();
//    c.fn();
// }

// > TYPE CASTING
// ---> Implicit Type Casting
// float f = 50.f;
// int i = f;

// ---> Explicit Type Casting
// --> C TYPE TYPE-CASTING
// int main()
// {
//    double x = 1.2;

//    // Explicit conversion from double to int 
//    int sum = (int)x + 1;

//    cout << "Sum = " << sum;

//    return 0;
// }
// --> C++ TYPE TYPE-CASTING
// -> Static Casting
// #include <iostream>
// using namespace std;

// int main()
// {
//    float f = 3.5;

//    // Implicit type case
//    // float to int
//    int a = f;
//    cout << "The Value of a: " << a;

//    // using static_cast for float to int
//    int b = static_cast<int>(f);
//    cout << "\nThe Value of b: " << b;
// }

// -> Dynamic Casting
// #include <iostream>
// #include <string>
// using namespace std;
// class Object {
// public:
//    virtual void BeginPlay();

//    void ObjectFn() {
//       cout << "Object Function called.\n\n";
//    }
// };
// class Actor : public Object {
// public:
//    void BeginPlay() override;

//    void ActorFn() {
//       cout << "Actor Function called.\n\n";
//    }
// };
// class Pawn : public Actor {
// public:
//    void BeginPlay() override;

//    void PawnFn() {
//       cout << "Pawn Function called.\n\n";
//    }
// };

// int main() {
//    Object* objPtr = new Object;
//    Actor* actorPtr = new Actor;
//    Pawn* pawnPtr = new Pawn;

//    Object* ObjectArray[] = { objPtr, actorPtr, pawnPtr };

//    for (int i = 0; i < 3; i++) {
//       // ObjectArray[i]->BeginPlay();
//       // ObjectArray[i]->ObjectFn();
//       // ObjectArray[i]->ActorFn();

//       Object* obj = ObjectArray[i]; // Make a addreesable copy of the array element @ index i
//       Actor* act = dynamic_cast<Actor*>(obj);
//       if (act) {
//          act->ActorFn();
//       }
//       Pawn* pawn = dynamic_cast<Pawn*>(obj);
//       if (pawn) {
//          pawn->PawnFn();
//       }
//    }

//    delete objPtr;
//    delete actorPtr;
//    delete pawnPtr;
// }

// void Object::BeginPlay() {
//    cout << "Object BeginPlay() called.\n";
// }
// void Actor::BeginPlay() {
//    cout << "Actor BeginPlay() called.\n";
// }
// void Pawn::BeginPlay() {
//    cout << "Pawn BeginPlay() called.\n";
// }

// // C++ program to illustrate the dynamic_cast
// #include <iostream>
// using namespace std;

// // Base Class
// class Animal {
// public:
//    virtual void speak()
//    {
//       cout << "Animal speaks." << endl;
//    }
// };

// // Derived Class
// class Dog : public Animal {
// public:
//    void speak() override
//    {
//       cout << "Dog barks." << endl;
//    }
// };

// // Derived Class
// class Cat : public Animal {
// public:
//    void speak() override
//    {
//       cout << "Cat meows." << endl;
//    }
// };

// int main()
// {
//    // base class pointer to derived class object
//    Animal* animalPtr = new Dog;

//    // downcasting
//    Dog* dogPtr = dynamic_cast<Dog*>(animalPtr);

//    // checking if the typecasting is successfull
//    if (dogPtr) {
//       dogPtr->speak();
//    }
//    else {
//       cout << "Failed to cast to Dog." << endl;
//    }

//    // typecasting to other dervied class
//    Cat* catPtr = dynamic_cast<Cat*>(animalPtr);
//    if (catPtr) {
//       catPtr->speak();
//    }
//    else {
//       cout << "Failed to cast to Cat." << endl;
//    }

//    delete animalPtr;
//    delete catPtr;
//    delete dogPtr;
//    return 0;
// }

// -> Const Casting
// // C++ program to illustrate the const_cast
// #include <iostream>
// using namespace std;

// int main()
// {

//    const int number = 5;
//    // Pointer to a const int
//    const int* ptr = &number;

//    // int* nonConstPtr = ptr; if we use this
//    // instead of without using const_cast
//    // we will get error of invalid conversion
//    int* nonConstPtr = const_cast<int*>(ptr);
//    *nonConstPtr = 10;

//    cout << "Modified number: " << *nonConstPtr;

//    return 0;
// }

// -> Reinterpreted Casting
// // C++ program to illustrate the reinterpret_cast
// #include <iostream>
// using namespace std;

// int main()
// {
//    int number = 10;
//    // Store the address of number in numberPointer
//    int* numberPointer = &number;

//    // Reinterpreting the pointer as a char pointer
//    char* charPointer
//       = reinterpret_cast<char*>(numberPointer);

//    // Printing the memory addresses and values
//    cout << "Integer Address: " << numberPointer << endl;
//    cout << "Char Address: "
//       << reinterpret_cast<void*>(charPointer) << endl;

//    return 0;
// }

// > HEADER /SOURCE FILE PRACTICE
#include <iostream>
#include "./Headers/Object.h"
#include "./Headers/Actor.h"
#include "./Headers/Pawn.h"
using namespace std;

int main() {
   Object* objPtr = new Object;
   Actor* actorPtr = new Actor;
   Pawn* pawnPtr = new Pawn;

   Object* ObjectArray[] = { objPtr, actorPtr, pawnPtr };

   for (int i = 0; i < 3; i++) {
      Object* obj = ObjectArray[i]; // Make a addreesable copy of the array element @ index i
      Actor* act = dynamic_cast<Actor*>(obj);
      if (act) {
         act->ActorFn();
      }
      Pawn* pawn = dynamic_cast<Pawn*>(obj);
      if (pawn) {
         pawn->PawnFn();
      }
   }

   delete objPtr;
   delete actorPtr;
   delete pawnPtr;
}

