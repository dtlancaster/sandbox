"""
Program to generate a QR code.
When decoding the QR code, the user will see a quote from the greatest piece of cinematic art of any generation.
"""

import qrcode

data = 'I fart in your general direction. Your mother was a hamster and your father smelt of elderberries.'

image = qrcode.make(data)

image.save('C:/Users/Tusca/Documents/Sandbox/Misc Python/Test Files/qrcode.png')