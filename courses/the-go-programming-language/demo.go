/*
	Types:
		Array
		Slice - like array
		Struct - like c struct; collection od types
		Pointer - any type counld be a pointer
		Function
		Interface
		Map
		Channel
*/
package main

import "fmt"

type Salutation struct {
	name     string
	greeting string
}

/**/
const (
	PI       = 3.14
	Language = "GO"
)

/**/
const (
	A = iota
	B = iota
	C = iota
)

func main() {
	// message := "Hello World!"
	// a, b, c := 1, 2, 3
	// greating as a pointer to message
	// var greating *string = &message
	// greating := &message
	// fmt.Println(message, *greating)
	// var s = Salutation{"Joe", "Hello!"}
	s := Salutation{}
	s.name = "Joe"
	s.greeting = "hello"

	fmt.Println(s.name, s.greeting)
	fmt.Println(PI)
	fmt.Println(A, B, C)
}
