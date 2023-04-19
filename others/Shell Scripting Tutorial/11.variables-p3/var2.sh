#!/bin/sh

echo "What is your name [ `whoami` ]"
read myname

echo "Your name is : ${myname:-`whoami`}"

# if [ -z "$myname" ]; then
#   myname=`whoami`
# fi
# echo "Your name is : $myname"