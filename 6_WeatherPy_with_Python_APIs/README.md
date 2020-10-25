# Mod6_World_Weather_Analysis
Module 6 Working with API's

## Goal
Analyze 500 or more of the world’s unique cities and their weather data in real time to determine if the temperature increases as the equator is approached using the Open Weather Map API.

## Process of Collecting, Analyzing and Visualizing

1) Step one was to create a list of 500 cities oon a random basis to obtain unbiased sampling.
2) Using the NumPy library random latitudes and longitudes were determined 
3) Cities close to determined Longs and Lats were matched using CityPy then saved in a list
4) A data frame captured the stored data from the Open Weather API
5) Requests to obtain the information on loudiness, country name, date, humidity, lat, long, max temp, and wind speed provided by the API.
6) Obtained descriptive information was stored in data frame then exported as a csv file.

## Comparison create scatter plots of the following were made:
* Latitude vs. Temperature
* Latitude vs. Humidity
* Latitude vs. Cloudiness
* Latitude vs. Wind Speed

<img align="right" width="450" height="280" src="https://github.com/razariah/UC_BERKELEY/blob/main/6_WeatherPy_with_Python_APIs/latVhumidity.png">
<img align="right" width="450" height="280" src="https://github.com/razariah/UC_BERKELEY/blob/main/6_WeatherPy_with_Python_APIs/LatVtemp.png">


<p align="center"><img width="400" height="249" src="https://github.com/razariah/UC_BERKELEY/blob/main/6_WeatherPy_with_Python_APIs/latVcloudiness.png"> 
<img width="400" height="249" src="https://github.com/razariah/UC_BERKELEY/blob/main/6_WeatherPy_with_Python_APIs/latVwindspeed.png"></p>
<img align="right" width="450" height="280" src="https://github.com/razariah/UC_BERKELEY/blob/main/6_WeatherPy_with_Python_APIs/WeatherPy_vacation_map.png">


