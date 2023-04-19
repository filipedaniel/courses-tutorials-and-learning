package main

import (
	"fmt"

	"./rect"
)

func Sets(r rect.Sets) {
	r.SetWidth(1000)
	r.SetHeigth(500)
}

func main() {
	r := rect.Rectangle{W: 10, H: 5}

	fmt.Println(r)

	/*fmt.Print("Area: ")
	fmt.Println(r.Area())
	fmt.Print("Perimeter: ")
	fmt.Println(r.Perimeter())

	r.SetWidth(100)
	r.SetHeigth(50)

	fmt.Print("Area: ")
	fmt.Println(r.Area())
	fmt.Print("Perimeter: ")
	fmt.Println(r.Perimeter())

	Sets(&r)

	fmt.Print("Area: ")
	fmt.Println(r.Area())
	fmt.Print("Perimeter: ")
	fmt.Println(r.Perimeter())

	fmt.Fprintf(&r, "Name")
	fmt.Println(r)*/

	// concurrency

	done := make(chan bool, 2)

	go func() {
		fmt.Println(r.Area())
		done <- true
	}()

	go func() {
		fmt.Println(r.Perimeter())
		done <- true
	}()

	//time.Sleep(100 * time.Millisecond)
	<-done
}
