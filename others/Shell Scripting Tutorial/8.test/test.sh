#!/bin/sh

X=0
if [ "$X" -lt "0" ]
then
  echo "X is less than zero"
fi

if [ $X -gt 0 ]; then
  echo "X is greater thean zero"
fi

[ $X -le 0 ] && \
   echo "X is less than or equal to zero"

[ -f "$X" ] && \
      echo "X is the path of a real file" || \
      echo "No such file: $X"

# --
if [ "$X" -nt "/etc/passwd" ]; then
      echo "X is a file which is newer than /etc/passwd"
fi
# -- equals to!
[ "$X" -nt "/etc/passwd" ] && \
      echo "X is a file which is newer than /etc/passwd"
# --


