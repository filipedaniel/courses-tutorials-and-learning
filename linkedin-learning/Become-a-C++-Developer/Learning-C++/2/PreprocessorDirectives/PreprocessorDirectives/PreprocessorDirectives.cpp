// PreprocessorDirectives.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <iostream>
#include <string>
#include <cstdint>

#define CAPACITY 5000
#define DEBUG


int main()
{
    int32_t large = CAPACITY;
    uint8_t small = 30;

#ifdef DEBUG
    std::cout << "About to perform the addition" << std::endl;
#endif // DEBUG


    large += small;
    std::cout << "Large number: " << large << std::endl;

    return 0;
}
