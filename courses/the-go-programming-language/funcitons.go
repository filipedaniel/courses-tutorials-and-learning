/**
FUNCTIONS
*/
package main

import "fmt"

type Salutation struct {
	name     string
	greeting string
}

type Printer func(string)

func greet(s Salutation, do Printer) {
	message, alternate := createMessage(s.name, s.greeting)
	//fmt.Println(alternate)
	do(message)
	do(alternate)
}

func print(s string) {
	fmt.Print(s)
}

func println(s string) {
	fmt.Println(s)
}

func createPrintFunc(custom string) Printer {
	return func(s string) {
		fmt.Println(s + custom)
	}
}

func createMessage(name, greeting string) (message string, alternate string) {
	// return greeting + " - " + name, "Hey! " + name
	message = greeting + " - " + name
	alternate = "Hey! " + name
	return
}

func main() {
	s := Salutation{"Bob", "Hello!"}
	greet(s, createPrintFunc("!!"))
}
