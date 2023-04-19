/**
FUNCTIONS
*/

package main

import "fmt"

func main() {
	var prefixMap map[string]string
	prefixMap = make(map[string]string)

	prefixMap["Bob"] = "Mr "
	prefixMap["Joe"] = "Dr "
	prefixMap["Amy"] = "Dr "
	prefixMap["Mary"] = "Mrs "

	fmt.Println(prefixMap["Bob"] + "Bob")

	prefixMap2 := map[string]string{
		"Bob":  "Mr ",
		"Joe":  "Dr ",
		"Amy":  "Dr ",
		"Mary": "Mrs ",
	}

	fmt.Println(prefixMap2["Joe"] + "Joe")

	//delete(prefixMap2, "Mary")

	if value, exists := prefixMap2["Mary"]; exists {
		fmt.Println(value + "Mary")
	}

	return
}
