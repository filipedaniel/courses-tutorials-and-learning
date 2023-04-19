// TypeInferenceWithAuto.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <iostream>


// Type inference

// small integer
auto a = 8;
// large integer
auto b = 123456789123;
// float number
auto c = 3.14f;
// float number without 'f' (double)
auto d = 3.14;
// boolean
auto e = true;
// char
auto f = 'a';

int main()
{

    std::cout << typeid(a).name() << std::endl;
    std::cout << typeid(b).name() << std::endl;
    std::cout << typeid(c).name() << std::endl;
    std::cout << typeid(d).name() << std::endl;
    std::cout << typeid(e).name() << std::endl;
    std::cout << typeid(f).name() << std::endl;
    
    return 0;
}

