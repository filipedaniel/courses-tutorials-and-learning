
def myClosure = {
    println "Is a closure"
    println new Date();
}

for (i in 1..3) {
    myClosure()
    sleep(1000)
}

println "--"

(1..3).each({
    myClosure();
    sleep(1000)
})

println "--"

// access each elem
(1..3).each({
    println "Is a closure $it"
})

println "--"


// override each default elem variable
(1..3).each({ i ->
    println "Is a closure $i"
})

println "--"


// Apply filters before print elem
(1..3)
    .findAll({ it%2 == 0 })
    .each({ i ->
        println "Is a closure $i"
    })




