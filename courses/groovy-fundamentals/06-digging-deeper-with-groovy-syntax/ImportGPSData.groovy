// import xml file
def file = new File('data/gpx-file.gpx')
//println file.exists()

// parse file
def slurper = new XmlSlurper()
def gpx = slurper.parse(file)

// Groovy Extension Methods
println "Beginning dump"
println gpx.name.value.dump()

println "Beginning inspect"
println gpx.name.inspect()

gpx.with {
    print name
    print " - "
    println desc

    println attributes()["version"]
}
