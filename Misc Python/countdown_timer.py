"""
Prompts the user to enter a timer in seconds.
Program displays the timer, updating it every second until the timer expires.
"""

import time

def countdown(seconds):
    while seconds:
        mins, secs = divmod(seconds, 60)
        timer = '{:02d}:{:02d}'.format(mins, secs)
        print(timer, end = "\r")
        time.sleep(1)
        seconds -= 1
    
    print("Ready for takeoff!")

seconds = input('Enter the time in seconds: ')
countdown(int(seconds))