#
# Example file for working with date information
#
from datetime import date, datetime, time

def main():
  ## DATE OBJECTS
  # Get today's date from the simple today() method from the date class
  today = date.today()
  print("Today's date is", today)

  # print out the date's individual components
  print("Date components: ", today.day, today.month, today.year)
  
  # retrieve today's weekday (0=Monday, 6=Sunday)
  print("Tadoy's weekday # is: ", today.weekday())
  days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"]
  print("Today is ", days[today.weekday()])
  ## DATETIME OBJECTS
  # Get today's date from the datetime class
  now = datetime.now()
  print("Today's date7time is", now)
  
  # Get the current time
  currentTime = datetime.time(datetime.now())
  print("Current time is:", currentTime)

  print("------")
  print(now.strftime("%c"))

  
 

  
if __name__ == "__main__":
  main();
  