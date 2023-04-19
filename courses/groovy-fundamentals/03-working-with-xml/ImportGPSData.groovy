// import xml file
def file = new File('data/gpx-file.gpx')
//println file.exists()

// parse file
def slurper = new XmlSlurper()
def gpx = slurper.parse(file)

// access file data

print gpx.name
print " - "
println gpx.desc
println gpx.@version


for (point in gpx.trk.trkseg.trkpt) {
    print point.@lat
    print " - "
    println point.@lon
    println point.time
}

