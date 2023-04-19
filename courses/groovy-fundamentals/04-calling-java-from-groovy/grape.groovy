// Groovy allows you to continue to use existing Java libraries

// https://mvnrepository.com/artifact/joda-time/joda-time
@Grapes(
    @Grab(group='joda-time', module='joda-time', version='2.10.1')
)
import org.joda.time.DateTime
import org.joda.time.format.DateTimeFormat


def file = new File('data/gpx-file.gpx')

def slurper = new XmlSlurper()
def gpx = slurper.parse(file)


print gpx.name
print " - "
println gpx.desc
println gpx.@version


for (point in gpx.trk.trkseg.trkpt) {
    print point.@lat
    print " - "
    println point.@lon
    def printableTime = new DateTime(point.time.toString())
    def format = DateTimeFormat.forPattern("MM/dd/yyyy - hh:mm aa")
    println printableTime.toString(format)
    
}

