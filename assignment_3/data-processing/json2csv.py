import json
import pandas as pd
from shutil import copyfile

data = json.load(open('nyc__rat-counts-by-neighborhood__201903-201905.json', 'r'))
code = []
value = []
for neighborhood in data['features']:
    code.append(neighborhood['properties']['ntacode'])
    value.append(neighborhood['properties']['ratCount'])
output = {'ID' : code, 'Value' : value}
df = pd.DataFrame(output, columns = ['ID', 'Value'])
df.to_csv(r'ratcounter.csv', index = False, header = True)