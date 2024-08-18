#include "../Headers/Actor.h"
#include <iostream>
using namespace std;

void Actor::BeginPlay() {
   cout << "Actor BeginPlay() called. \n\n";
}

void Actor::ActorFn() {
   cout << "Actor Function called.\n\n";
}