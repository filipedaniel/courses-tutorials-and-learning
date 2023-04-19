#
# Example file for working with os.path module
#
import os # work with operating system
from os import path
import datetime
from datetime import date, time, timedelta
import time


def main():
  # Print the name of the OS
  print(os.name)
  
  # Check for item existence and type
  print("Item exists: " + str(path.exists("textfile.txt")))
  print("Item is a file: " + str(path.isfile("textfile.txt")))
  print("Item is a directory: " + str(path.isdir("textfile.txt")))
  
  print("----")
  # Work with file paths
  print("Item path: " + str(path.realpath("textfile.txt")))
  print("Item path and name: " + str(path.split(path.realpath("textfile.txt"))))
  
  print("----")
  # Get the modification time
  t = time.ctime(path.getmtime("textfile.txt"))
  print(t)
  print (datetime.datetime.fromtimestamp(path.getmtime("textfile.txt")))
  
  print("----")
  # Calculate how long ago the item was modified
  tNow = datetime.datetime.now()
  tModified = datetime.datetime.fromtimestamp(path.getmtime("textfile.txt"))
  print("It has been changed '" + str(tNow - tModified) + "' ago!")

  
if __name__ == "__main__":
  main()
