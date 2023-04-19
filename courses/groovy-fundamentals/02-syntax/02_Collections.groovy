def beatles = ["Jhon", "Paul", "George","Ringo"]

for (int i = 0; i < beatles.size(); i++) {
    println "Hello, ${beatles[i]}" 
}

println "--"

for (beatle in beatles) {
    println "Hello, $beatle"    
}