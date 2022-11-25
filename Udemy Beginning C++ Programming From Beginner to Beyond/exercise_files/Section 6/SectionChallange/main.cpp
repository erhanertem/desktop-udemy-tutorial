#include <iostream>

using namespace std;

int main()
{
  cout << "Hello, welcome to Ernie's Carpet Cleaning Service" << endl
       << endl;

  cout << "How many small rooms would you like cleaned? ";
  int num_small_rooms{0};
  cin >> num_small_rooms;
  cout << "How many large rooms would you like cleaned? ";
  int num_large_rooms{0};
  cin >> num_large_rooms;
  cout << endl
       << endl;

  const double price_per_small_room{25.00};
  const double price_per_large_room{35.00};
  const double cost{0};
  const double tax{0.06};
  const int valid_period{30};

  cout << "Estimate for carpet cleaning service" << endl;
  cout << "Number of small rooms: " << num_small_rooms << endl;
  cout << "Number of large rooms: " << num_large_rooms << endl;
  cout << "Price per small room: $" << price_per_small_room << endl;
  cout << "Price per large room: $" << price_per_large_room << endl;
  cout << "Cost: $" << (num_small_rooms * price_per_small_room) + (num_large_rooms * price_per_large_room) << endl;
  cout << "Tax: $" << ((num_small_rooms * price_per_small_room) + (num_large_rooms * price_per_large_room)) * tax << endl;
  cout << "==========================" << endl;
  cout << "Total estimate: $" << ((num_small_rooms * price_per_small_room) + (num_large_rooms * price_per_large_room)) * (1 + tax) << endl;
  cout << "This estimate is valid for " << valid_period << " days." << endl
       << endl;

  return 0;
}