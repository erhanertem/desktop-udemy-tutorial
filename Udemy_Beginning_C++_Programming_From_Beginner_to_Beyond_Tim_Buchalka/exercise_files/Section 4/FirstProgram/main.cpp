#include <iostream> //we include the library that enables cout cin

int main()
{                      // IMPORTANT Each file includes one main() function : entry point of execution
  int favorite_number; // create an integer variable

  std::cout << "Enter your favorite number betwqeen 1 and 100: ";      // console.log out
  std::cin >> favorite_number;                                         // input the variable - type into console  / >> extraction operator
  std::cout << "Amazing! That's my favorite number too!" << std::endl; // console.log out - finishes with end line - flushes the buffer

  return 0; // indicates that the program terminated succesfully
}
