from os import system

def generateTiles(n):
    arr = []
    for i in range(0, n):
        arr.append(['-'] * n)
    return arr

def drawTiles(arr, n):
    for i in range(0, n):
        print(n-i, end=' ')
        for j in range(0, n):
            print(arr[i][j], end=' ')
        print()
    print('  ', end='')
    for i in range(0, n):
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

def turn(arr, playerOne):
    isCoordinateAvailable = False
    size = len(arr[0])
    while (not isCoordinateAvailable):
        drawTiles(arr, size)
        print()
        if playerOne:
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
    playerOne = not playerOne
    return arr, playerOne

def main():
    n = 8
    arr = generateTiles(n)
    playerOne = True
    while True:
        arr, playerOne = turn(arr, playerOne)

main()