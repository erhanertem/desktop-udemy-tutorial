#include <iostream>

extern int x; // external referenced variable which is not defined

int main()
{
    std::cout << "Hello world" << std::endl;
    std::cout << x; // throws an linker error
    return 0;
}
