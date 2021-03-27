import requests
from bs4 import BeautifulSoup

"""
Prompts user to input the username belonging to a GitHub account.
Program then returns a link to the profile picture of the respective user.
"""

github_username = input('Input GitHub username: ')
url = 'http://www.github.com/' + github_username
r = requests.get(url)
bs = BeautifulSoup(r.content, 'html.parser')
profile_picture = bs.find('img', {'alt' : 'Avatar'})['src']
print(profile_picture)