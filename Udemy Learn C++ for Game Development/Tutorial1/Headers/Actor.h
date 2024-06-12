#pragma once
#include "Object.h"

class Actor : public Object {
public:
   void BeginPlay() override;

   void ActorFn();
};