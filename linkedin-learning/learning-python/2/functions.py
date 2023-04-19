# Python functions

# basic function
def func1():
  print("I am a function")

# function that takes arguments
def func2(arg1, arg2):
  print(arg1, " ", arg2)

# function that returns a value
def cube(value):
  return value * value * value

# function with default value for an argument
def power(num, x = 1):
  result = 1
  for i in range(x):
      result *= num
  return result

# function with varible number of arguments
# we can combine arguments with varible args, but this has to be the last function parameter 
def multiAdd(*args):
  result = 0
  for x in args:
    result += x
  return result

# func2(10,20) # function called
# print(func1(10,20)) # function called
# print(func1) # function not executed
# print(cube(10)) # function called

print(power(2)) # 2
print(power(2,3)) # 8
print(power(x = 3, num = 2)) # 8

print(multiAdd(1,2,3,4,5)) # 15

