
/*****************************************************
 * ERHAN ERTEM
 *
 * THIS IS A SIMPLE PROGRAM SING MULTILINE AND SINGLE LINE COMMENTING
 * THIS IS A SIMPLE PROGRAM
 *
 ****************************************************/

#include <iostream>

// This is a comment

/* This is a multiple
        line
         comment
*/

int main()
{
   int favorite_number; // this is where my favorite number is stored

   std::cout << "Enter your favorite number between 1 and 100: ";

   std::cin >> favorite_number;

   std::cout << "Amazing!! That's my favorite number too!" << std::endl;
   std::cout << "No really!!, " << favorite_number << " is my favorite number!" << std::endl;

   return 0;
}
