#
# Example file for working with loops
#

def main():
  x = 0

  # define a while loop
  while x < 5:
    print(x)
    x += 1

  print("---")

  # define a for loop
  # in python for's works as iterators
  for x in range(5, 10):
    print(x)

  print("---")

  # use a for loop over a collection
  array = ["A", "B", "C", "D", "E"]
  for d in array:
      print(d)
  
  print("---")
  
  # use the break and continue statements
  for x in range(5, 10):
    if x==7: break
    print(x)

  print("---")

  #using the enumerate() function to get index 
  array2 = ["A", "B", "C", "D", "E"]
  for i,d in enumerate(array2):
      print(d, "-", i)


main()
