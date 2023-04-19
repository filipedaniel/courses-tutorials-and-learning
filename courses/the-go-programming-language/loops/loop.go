/**
FUNCTIONS
*/
package main

import "fmt"

func main() {

	for i := 0; i < 3; i++ {
		fmt.Println("Hello!")
	}

	i := 0
	for i < 3 {
		fmt.Println("World!")
		i++
	}

	slice := []string{"A", "B", "C", "D"}
	for _, s := range slice {
		// fmt.Print(i)
		fmt.Print(s)
	}

}
