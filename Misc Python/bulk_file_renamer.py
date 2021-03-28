import os

def main():
    i = 0
    path = "C:/Users/Tusca/Documents/Sandbox/Misc Python/Test Files/"
    for filename in os.listdir(path):
        dest = "new_test_" + str(i) + ".txt"
        source = path + filename
        dest = path + dest
        os.rename(source, dest)
        i += 1

if __name__ == '__main__':
    main()