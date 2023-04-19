/**
FUNCTIONS
*/

package main

import (
	"fmt"
)

/*...*/
type Salutation struct {
	Name     string
	Greeting string
}

func main() {

	var s []int
	s = make([]int, 3)
	s[0] = 1
	s[1] = 10
	s[2] = 100

	// s = make([]int, x, y)
	// x - length
	// y - capacity

	ss := []int{1, 10, 100}

	sliceSalutation := []Salutation{
		{"A", "Hello A"},
		{"B", "Hello B"},
		{"C", "Hello C"},
	}

	// slice slicer
	//sliceSalutation = sliceSalutation[1:]
	//sliceSalutation = sliceSalutation[1:len(sliceSalutation)]

	// append
	// - error
	//sliceSalutation[4] = Salutation{"D", "Hello D"}

	//sliceSalutation = append(sliceSalutation, sliceSalutation...)

	// remove first elem
	sliceSalutation = append(sliceSalutation[:0], sliceSalutation[1:]...)

	// remove i elem
	//sliceSalutation = append(sliceSalutation[:i], sliceSalutation[i+1:]...)

	fmt.Println(s)
	fmt.Println(ss)
	fmt.Println(sliceSalutation)
	return
}
