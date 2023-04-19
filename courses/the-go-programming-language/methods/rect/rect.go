package rect

type Rectangle struct {
	Name string
	W, H int
}

type Sets interface {
	SetWidth(width int)
	SetHeigth(heigth int)
}

func (r *Rectangle) Write(p []byte) (n int, err error) {
	s := string(p)
	r.Rename(s)
	n = len(s)
	err = nil
	return
}

func (r *Rectangle) Rename(name string) {
	r.Name = name
}

func (r *Rectangle) SetWidth(width int) {
	r.W = width
}

func (r *Rectangle) SetHeigth(heigth int) {
	r.H = heigth
}

func (r Rectangle) Area() int {
	return r.H * r.W
}

func (r Rectangle) Perimeter() int {
	return 2*r.H + 2*r.W
}
