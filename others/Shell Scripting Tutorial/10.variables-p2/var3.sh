#!/bin/sh

echo "I was called with $# parameters"
echo "My name is $0"
echo "My first parameter is $1"
echo "My second parameter is $2"
echo "All parameters are $@"

# $# - total parameters
# $0 - parameter index 0
# $1 - parameter index 1
# $2 - parameter index 2
# $@ - all parameters
