/**
FUNCTIONS
*/
package greeding

import "fmt"

type Salutation struct {
	Name     string
	Greeting string
}

type Printer func(string)

func Greet(s Salutation, do Printer, isFormal bool) {
	message, alternate := CreateMessage(s.Name, s.Greeting)
	if prefix := GetPrefix(s.Name); isFormal {
		do(prefix + message)
	} else {
		do(alternate)
	}
}

func GetPrefix(name string) (prefix string) {
	switch name {
	case "Bob":
		prefix = "Mr "
		fallthrough
	case "Joe", "Amy":
		prefix = "Dr "
	case "Mary":
		prefix = "Mrs "
	default:
		prefix = "Dude "
	}
	return
}

func print(s string) {
	fmt.Print(s)
}

func Println(s string) {
	fmt.Println(s)
}

func CreatePrintFunc(custom string) Printer {
	return func(s string) {
		fmt.Println(s + custom)
	}
}

func CreateMessage(name, greeting string) (message string, alternate string) {
	// return greeting + " - " + name, "Hey! " + name
	message = greeting + " " + name
	alternate = "Hey! " + name
	return
}
