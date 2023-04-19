// Arrays.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <iostream>

// Macro definition
// #define AGE_LENGTH 4

// Const definition
const int AGE_LENGTH = 4;

int age[AGE_LENGTH];
float temperature[] = {
    31.5,
    32.7,
    28.9
};

int main()
{
    age[0] = 1;
    age[1] = 2;
    age[2] = 3;
    age[3] = 4;

    std::cout << age[0] << std::endl;
    std::cout << age[1] << std::endl;
    std::cout << age[2] << std::endl;
    std::cout << age[3] << std::endl;

    std::cout << std::endl;

    std::cout << temperature[0] << std::endl;
    std::cout << temperature[1] << std::endl;
    std::cout << temperature[2] << std::endl;

    return 0;

   
}



