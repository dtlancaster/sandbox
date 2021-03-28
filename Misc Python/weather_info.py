"""
Prompts user to enter the name of a city.
Program retrieves weather data of the city from OpenWeatherMap.
Data is then presented in JSON format.
"""

import requests
from pprint import pprint

key = input("Enter your OpenWeatherMap API Key: ")

city_name = input("Enter a city: ")

url = 'http://api.openweathermap.org/data/2.5/weather?appid=' + key + "&q=" + city_name

data = requests.get(url).json()

pprint(data)