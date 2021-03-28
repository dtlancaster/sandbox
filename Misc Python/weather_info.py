"""
Prompts user to enter the name of a city.
Program retrieves weather data of the city from OpenWeatherMap.
Data is then presented in JSON format.
"""

import requests
from pprint import pprint

key = '93f3769b46a3f9c4a200501bf04136ef' # my API key from OpenWeatherMap

city_name = input("Enter a city: ")

url = 'http://api.openweathermap.org/data/2.5/weather?appid=' + key + "&q=" + city_name

data = requests.get(url).json()

pprint(data)