"""
Program to generate a number of strong passwords for a user.
"""

import random

print('Welcome to your Password Generator!\n')

chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*().,?0123456789'

num_passwords = int(input("Enter the number of passwords you would like to generate: "))
length_password = int(input("Enter the desired length of your passwords: "))

print('\nGenerated Passwords:\n')

for password in range(num_passwords):
    passwords = ''
    for c in range(length_password):
        passwords += random.choice(chars)
    print(passwords)