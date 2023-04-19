#!/bin/sh

# Scope of Variables
echo "MY VAR is: $MYVAR" # MYVAR hasn't been set to any value
MYVAR="hi there"
echo "MAYVAR is: $MYVAR"

# In the terminal you can define the variable and export before run the script 
# MYVAR=hello
# expot MYVAR

# after finish the script the variable $MYVAR is equal to 'hello',
# to set the new value execute $ . ./myvar2.sh
# then the $MYVAR is equal to 'hi there'