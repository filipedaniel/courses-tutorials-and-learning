#
# Example file for working with Calendars
#

# import the calendar module
import calendar

# create a plain text calendar
c = calendar.TextCalendar(calendar.SUNDAY)
# calendar.MONDAY - start calendar on SUNDAY
st = c.formatmonth(2021, 9, 0, 0)
# st = c.formatyear(2021)
print(st)

# create an HTML formatted calendar
hc = calendar.HTMLCalendar(calendar.SUNDAY)
hsc = hc.formatmonth(2021, 9)
print(hsc)

# loop over the days of a month
# zeroes mean that the day of the week is in an overlapping month
for i in c.itermonthdays(2021, 10):
  print(i)
  #  The 0's at the beginning and at the end tell us that there are months that belongs
  #  to another mounth
  
# The Calendar module provides useful utilities for the given locale,
# such as the names of days and months in both full and abbreviated forms
for i in calendar.month_name:
  print(i)
for i in calendar.day_name:
  print(i)

# Calculate days based on a rule: For example, consider
# a team meeting on the first Friday of every month.
# To figure out what days that would be for each month,
# we can use this script:
print("Team meeeting will be on: ")
for m in range(1, 13):
  cal = calendar.monthcalendar(2021, m)
  weekOne = cal[0]
  weekTwo = cal[2]

  if weekOne[calendar.FRIDAY] != 0:
    meetDay = weekOne[calendar.FRIDAY]
  else:
    meetDay = weekTwo[calendar.FRIDAY]

  print("%10s %2d" % (calendar.month_name[m], meetDay))


