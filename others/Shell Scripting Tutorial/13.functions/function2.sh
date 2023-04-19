#!/bin/sh

myfunc()
{
  echo "I was called as : $@"
  X=2
}

### Main script starts here

echo "Script was called with $@"
X=1
echo "x is $X"
myfunc 1 2 3
echo "x is $X"
