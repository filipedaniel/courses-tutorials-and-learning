
// Range of numbers
def numbers = 1..10

for (num in numbers) {
    println num
}

// Range of letters
def letters = "a".."d"

for (letter in letters) {
    println letter
}

// Range of Days
def enum DAYS {
    SUM, MON, TUE, WED, THU, FRI, SAT
}
def weekdays = DAYS.MON .. DAYS.FRI

for (week in weekdays) {
    println week
}