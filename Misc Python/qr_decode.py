"""
Decodes and extracts the data from the QR code in the Test Files directory.
"""

from pyzbar.pyzbar import decode
from PIL import Image

image = Image.open('C:/Users/Tusca/Documents/Sandbox/Misc Python/Test Files/qrcode.png')

result = decode(image)

print(result)