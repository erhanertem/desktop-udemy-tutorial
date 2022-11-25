// Section 6
// Constants

/*
    Frank's Carpet Cleaning Service
    Charges $30 per room
    Sales tax rate is 6%
    Estimates are valid for 30 days

    Prompt the user for the number of rooms they would like cleaned
    and provide an estimate such as:

Estimate for carpet cleaning service:
Number of rooms: 2
Price per room: $30
Cost: $60
Tax: $3.6
====================================
Total estimate: $63.6
This estimate is valid for 30 days

Pseudocode:
    Prompt the user to enter the number of rooms
    Display number of rooms
    Display price per room

    Display cost:  (number of rooms * price per room)
    Display tax:   number of rooms * price per room * tax rate
    Display total estimate: (number of rooms * price per room) + (number of rooms * price per room * tax rate)
    Display estimate expiration time
*/

#include <iostream>

using namespace std;

int main()
{
    cout << "Hello, welcome to Frank's Carpet Cleaning Service" << endl;
    cout << "\nHow many rooms would you like cleaned? "; // Character Literal Constants (escape character) in a literal string

    int number_of_rooms{0}; // Initialize it first
    cin >> number_of_rooms; // Entered value is stored in this variable

    const double price_per_room{30.0};
    const double sales_tax{0.06};
    const int estimate_expiry{30}; // days

    cout << "\nEstimate for carpet cleaning service";
    cout << "\nNumber of rooms: " << number_of_rooms;
    cout << "\nPrice per room: $" << price_per_room;
    cout << "\nCost : $" << price_per_room * number_of_rooms;
    cout << "\nTax: $" << price_per_room * number_of_rooms * sales_tax;
    cout << "\n===============================";
    cout << "\nTotal estimate: $" << (price_per_room * number_of_rooms) + (price_per_room * number_of_rooms * sales_tax);
    cout << "\nThis estimate is valid for " << estimate_expiry << " days" << endl;

    cout << endl;
    return 0;
}
