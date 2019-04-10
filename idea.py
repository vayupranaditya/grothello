from os import system
def generateTiles(arr, x):
    for i in range(0, x):
        arr.append(['-'] * x)
    return arr

def drawTiles(arr, x):
    for i in range(0, x):
        print(x-i, end=' ')
        for j in range(0, x):
            print(arr[i][j], end=' ')
        print()
    print('  ', end='')
    for i in range(0, x):
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

def turn(arr, n, playerOne):
    coordinateAvailable = False
    while (not coordinateAvailable):
        drawTiles(arr, n)
        print()
        if playerOne:
            print('Player 1: (O)')
            obj = 'O'
        else:
            print('Player 2: (X)')
            obj = 'X'
        x = int(input('X: '))
        y = int(input('Y: '))
        coordinateAvailable = x > 0 and x < n+1 and y > 0 and y < n+1 and getValue(arr, x, y) == '-'
        system('cls')
    arr = setActive(arr, x, y, obj)
    getValue(arr, x, y)
    playerOne = not playerOne
    return arr, playerOne

def main():
    n = 8
    arr = []
    arr = generateTiles(arr, n)
    playerOne = True
    while True:
        arr, playerOne = turn(arr, n, playerOne)

main()