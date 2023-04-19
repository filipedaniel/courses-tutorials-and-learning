
# Python variables

f = 0
print(f)

f = "global"
print(f)

# ERROR: variables of different types cannot be combined
# print("this is a string" + 123)
print("this is a string" + str(123))

# Global vs local variables
def func():
  f="local"
  print(f) # will print "local"
  # global f
  # print(f) # will print "global"

func()
print(f) # will print "global"

del f
print(f) # name 'f' is not defined
