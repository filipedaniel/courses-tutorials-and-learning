
/*
MarkupBuilder
    - Simple XML creation

StreamingMarkupBuilder
    - Advanded XML creation
    - Better support for large documents
*/


def inFile = new File('data/gpx-file.gpx')
def slurper = new XmlSlurper()
def gpx = slurper.parse(inFile);


def markupBuilder = new groovy.xml.StreamingMarkupBuilder()
def xml = markupBuilder.bind {
    route {
        mkp.comment("This is a comment!")
        gpx.trk.trkseg.trkpt.each { point ->
            routepoint(timestamp: point.time.toString()) {
                latitude(point.@lat)
                longitude(point.@lon)
            }
        }
    }
}

def outFile = new File('data/write-file.gpx')
outFile.write(xml.toString())

