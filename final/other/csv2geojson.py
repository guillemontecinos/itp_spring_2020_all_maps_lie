import csv, json
from geojson import Feature, FeatureCollection, Point


ids = [239, 162, 123, 278, 246, 170, 94, 26, 291, 294, 238, 74, 82, 27, 35, 101, 168, 150, 105, 113, 173, 147, 19, 65, 96, 296, 274, 89, 142, 126, 119, 262, 236, 50, 118, 114, 25, 69, 80, 161, 49, 99, 178, 145, 269, 124, 245, 175, 90, 18, 244, 68, 79, 230, 107, 270, 125, 298, 16, 117, 22, 172, 15, 300, 24, 21, 176, 106, 235, 234, 222, 17, 77, 156, 28, 272, 165, 242, 240, 297, 260, 223, 20, 135, 93, 108, 293, 46, 243]
features = []
linecount = 0
longIndex = 0
latIndex = 0
nameIndex = 0
idIndex = 0
codRegIndex = 0
with open('PobladosChile.csv') as csvfile:
    reader = csv.reader(csvfile, delimiter=',')
    for row in reader:
        if linecount == 0:
            latIndex = row.index('point_latitude')
            longIndex = row.index('point_longitude')
            nameIndex = row.index('NOMBRE')
            idIndex = row.index('ID')
            codRegIndex = row.index('COD_REG')
            linecount += 1
        else:
            if int(row[idIndex]) in ids and row[codRegIndex] == '01':
                latitude, longitude = map(float, (row[latIndex], row[longIndex]))
                features.append(
                    Feature(
                        geometry = Point((longitude, latitude)),
                        properties = {
                            'id': row[idIndex],
                            'name': row[nameIndex]
                        }
                    )
                )
                linecount += 1

collection = FeatureCollection(features)
with open("pobladoschile-aricaiqq-300.json", "w") as f:
    f.write('%s' % collection)