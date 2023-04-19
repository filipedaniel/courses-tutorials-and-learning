#
# Example file for working with timedelta objects
#

from datetime import date
from datetime import time
from datetime import datetime
from datetime import timedelta

# construct a basic timedelta and print it
print(timedelta(days=365, hours=5, minutes=1))

# print today's date
now = datetime.now()
print("Today is ", now)

# print today's date one year from now
print("One year from now will be: ", str(now + timedelta(days=365)))

# create a timedelta that uses more than one argument
print ("In two weeks and 3 days it will be: " + str(now + timedelta(weeks=2, days=3)))

# calculate the date 1 week ago, formatted as a string
t = datetime.now() - timedelta(weeks=1)
s = t.strftime("%A %B %d, %Y")
print ("one week ago it was " + s)

### How many days until

today = date.today()  # get today's date
afd = date(today.year, 9, 7)  # get day for the same year
# use date comparison to see if day has already gone for this year
# if it has, use the replace() function to get the date for next year
if afd < today:
  print ("Day already went by %d days ago" % ((today-afd).days))
  afd = afd.replace(year=today.year + 1) 

# Now calculate the amount of time until April Fool's Day  
time_to_afd = afd - today
print ("It's just", time_to_afd.days, "days!")
