#!/bin/sh
# This is a comment!
echo "Hello      World"   # print entire string (with spaces)
echo "Hello World"        # print entire string
echo "Hello * World"      # print entire string (width *)
echo Hello * World        # execute '*'
echo Hello      World     # remove space
echo "Hello" World        # print string
echo Hello "     " World  # print space
echo "Hello "*" World"    # print '*' char
echo `hello` world        # try to execute `hello` command
echo 'hello' world        # print normal stuff