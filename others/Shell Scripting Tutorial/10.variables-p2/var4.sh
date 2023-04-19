#!/bin/sh

# for each parameter
while [ "$#" -gt "0" ]
do
  echo "\$1 is $1"
  shift
done