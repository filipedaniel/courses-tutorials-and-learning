

#include <iostream>
#include <string>

int main() {
	std::string str;

	std::cout << "Enter your name: ";
	std::cin >> str;
	
	std::cout << "Your name is: " + str << std::endl;

	return 0;
}