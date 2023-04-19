/**
FUNCTIONS
*/
package main

import "./greeding"

func main() {
	s := greeding.Salutation{"Bob", "Hello"}
	greeding.Greet(s, greeding.CreatePrintFunc("!!"), true)
}
