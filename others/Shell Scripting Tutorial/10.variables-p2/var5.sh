#!/bin/sh

# Another interesting variable is IFS. 
# This is the Internal Field Separator.
# The default value is SPACE TAB NEWLINE, 
#   but if you are changing:

old_IFS="$IFS"
IFS=:
echo "Please input some data separated by colons ..."
read x y z
echo "x is $x y is $y x is $z"