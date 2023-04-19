
// functions definition
def isEven (def num) {
    return num%2 == 0
} 


def numbers = 1..10
for (number in numbers) {
    if (isEven(number))
    println number
}



