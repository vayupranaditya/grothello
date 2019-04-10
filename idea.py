from os import system

def generateTiles(n):
    arr = []
    for i in range(0, n):
        arr.append(['-'] * n)
    return arr

def drawTiles(arr):
    size = len(arr[0])
    for i in range(0, size):
        print(size-i, end=' ')
        for j in range(0, size):
            print(arr[i][j], end=' ')
        print()
    print('  ', end='')
    for i in range(0, size):
        print(i+1, end=' ')
    print()

def setActive(arr, x, y, val):
    x-=1
    y = len(arr[x]) - y
    arr[y][x] = val
    return arr

def getValue(arr, x, y):
    x-=1
    y = len(arr[x]) - y
    return arr[y][x]

def turn(arr, isNowPlayerOne):
    isCoordinateAvailable = False
    size = len(arr[0])
    while (not isCoordinateAvailable):
        drawTiles(arr)
        print()
        if isNowPlayerOne:
            print('Player 1: (O)')
            obj = 'O'
        else:
            print('Player 2: (X)')
            obj = 'X'
        x = int(input('X: '))
        y = int(input('Y: '))
        isCoordinateAvailable = x > 0 and x < size+1 and y > 0 and y < size+1 and getValue(arr, x, y) == '-'
        system('cls')
    arr = setActive(arr, x, y, obj)
    getValue(arr, x, y)
    isNowPlayerOne = not isNowPlayerOne
    return arr, isNowPlayerOne

def main():
    n = 8
    arr = generateTiles(n)
    isNowPlayerOne = True
    while True:
        arr, isNowPlayerOne = turn(arr, isNowPlayerOne)

main()