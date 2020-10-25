# Mod6_World_Weather_Analysis
Module 6 Working with API's

## Goal
Analyze at least 500 randomly selected cities around the world to prove that the weather gets hotter as one approaches the equator using the Open Weather Map API.

## Process
<img align="right" width="450" height="280" src="https://github.com/razariah/UC_BERKELEY/blob/main/6_WeatherPy_with_Python_APIs/LatVtemp.png">

The first step was to generate a random list of at least 500 cities around the world for an unbiased sampling. Random latitudes and longitudes were created using the NumPy library and the city nearest those coordinates were found using citipy and stored in a list.

<img align="right" width="450" height="280" src="https://github.com/razariah/UC_BERKELEY/blob/main/6_WeatherPy_with_Python_APIs/latVhumidity.png">

An empty data frame was then created to store data pulled from the Open Weather Map API. Using `df.iterrows()`, the API was pinged and information on cloudiness, country name, date, humidity, latitude, longitude, max temperatures, and wind speed were pulled.  The data was stored in the empty data frame and exported as a csv file.

Next was to create scatter plots for four comparisons:

* Latitude vs. Temperature
* Latitude vs. Humidity
* Latitude vs. Cloudiness
* Latitude vs. Wind Speed

Because all four charts would share similar attributes, I created a function to plot each chart, so that I would only have to input the y-values and labels. However, the data types in the data frame were all strings, so I used `pd.to_numeric()` on all relevant columns in order to plot the data.  

<p align="center"><img width="400" height="249" src="https://github.com/razariah/UC_BERKELEY/blob/main/6_WeatherPy_with_Python_APIs/latVcloudiness.png"> <img width="400" height="249" src="https://github.com/razariah/UC_BERKELEY/blob/main/6_WeatherPy_with_Python_APIs/latVwindspeed.png"></p>

