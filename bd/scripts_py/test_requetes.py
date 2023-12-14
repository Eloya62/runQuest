import requests
import json
import datetime
import pandas as pd

address = "https://ke1fuw1ty5-dsn.algolia.net/1/indexes/*/queries?x-algolia-agent=Algolia for JavaScript (4.4.0); Browser (lite); JS Helper (3.11.3); react (18.2.0); react-instantsearch (6.38.3)&x-algolia-api-key=b1be477b6510690af0a2f9962eb50a50&x-algolia-application-id=KE1FUW1TY5"

json_data = {
    "requests": [
        {
            "indexName": "entire_races",#"production_races",
            "params": 'facets=["_tags","eventMonths", "raceDate", "raceDescription", "raceDistance","raceElevationGain","raceElevationLoss","raceItraPoints","region.lvl0"]',
            'facetFilters': ["region.lvl1:Europe > France"],
            "highlightPostTag": "</ais-highlight-0000000000>",
            "highlightPreTag": "</ais-highlight-0000000000>",
            "hitsPerPage": 20,
            "maxValuesPerFacet": 100,
            "query": "",
            "page": "49",
        }
    ]
}

req = requests.post(address, json=json_data)
print(req)
req = json.loads(req.text)
n = 3

def get_info_for_course_from_req(req, n):
    premiere_course = req['results'][0]['hits'][n]
    eventName = premiere_course['eventName']
    date = datetime.datetime.fromtimestamp(premiere_course['raceDate']).strftime('%Y-%m-%d %H:%M:%S')
    raceDistance = premiere_course['raceDistance']
    raceElevationGain = premiere_course['raceElevationGain']
    raceElevationLoss = premiere_course['raceElevationLoss']
    raceDescription = premiere_course['raceDescription']
    if 'lvl3' not in premiere_course['region'] and 'lvl4' not in premiere_course['region']:
        region = premiere_course['region']['lvl2'].split(' > ')[2]
        department = premiere_course['region']['lvl2'].split(' > ')[3]
    elif 'lvl4' not in premiere_course['region']:
        region = premiere_course['region']['lvl3'].split(' > ')[2]
        department = premiere_course['region']['lvl3'].split(' > ')[3]
    else :
        region = premiere_course['region']['lvl4'].split(' > ')[2]
        department = premiere_course['region']['lvl4'].split(' > ')[3]
    localisation = premiere_course['_geoloc']
    lat = localisation['lat']
    lng = localisation['lng']
    return [
        eventName,
        date,
        raceDistance,
        raceElevationGain,
        raceElevationLoss,
        raceDescription,
        region,
        department,
        lat,
        lng
    ]

holder = []
columns = ['nom', 'date', 'distance', 'dplus', 'dminus', 'description', 'region', 'departement', 'lat', 'lng']
for i in range(len(req['results'][0]['hits'])):
    holder.append(get_info_for_course_from_req(req, i))
df = pd.DataFrame.from_records(holder, columns=columns)

print(df)

#df.to_csv('courses.csv', index=False)


# Saving into a .json the request return
with open('courses2.json', 'w') as outfile:
    json.dump(req, outfile)