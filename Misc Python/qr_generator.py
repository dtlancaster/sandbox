"""
Program to generate a QR code.
When decoding the QR code, the user will see a quote from the greatest piece of cinematic art of any generation.
"""

import qrcode

data = 'I fart in your general direction. Your mother was a hamster and your father smelt of elderberries.'

qr = qrcode.QRCode(version = 1, box_size = 10, border = 5)
qr.add_data(data)
qr.make(fit=True)
image = qr.make_image(fill_color='red', back_color='white')
image.save('C:/Users/Tusca/Documents/Sandbox/Misc Python/Test Files/qrcode.png')