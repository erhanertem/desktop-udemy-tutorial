#pragma once
#include "Actor.h"

class Pawn : public Actor {
public:
   void BeginPlay() override;

   void PawnFn();
};