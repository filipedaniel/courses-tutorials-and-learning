
#include <iostream>

int a, b = 5;

int main() {
	bool myFlag;

	a = 7;
	myFlag = false;

	std::cout << "a = " << a << std::endl;
	std::cout << "b = " << b << std::endl;
	std::cout << "myFlag = " << myFlag << std::endl;

	myFlag = true;

	std::cout << "a+b = " << a+b << std::endl;
	std::cout << "b-a = " << b-a << std::endl;
	std::cout << "myFlag = " << myFlag << std::endl;

	unsigned int positive;
	positive = b - a;

	std::cout << "positive (b - a)= " << positive << std::endl;
	// This will return the binary representation of -2

	return 0;
}