from os import system
def generateTiles(arr, x):
    for i in range(0, x):
        arr.append(['-'] * x)
    return arr

def drawTiles(arr, x):
    print('  ', end='')
    for i in range(0, x):
        print(i+1, end=' ')
    print()
    for i in range(0, x):
        print(i+1, end=' ')
        for j in range(0, x):
            print(arr[i][j], end=' ')
        print()

def setActive(arr, x, y, val):
    x-=1
    y-=1
    arr[y][x] = val
    return arr

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
        coordinateAvailable = x > 0 and x < n+1 and y > 0 and y < n+1 and arr[y-1][x-1] == '-'
        system('cls')
    arr = setActive(arr, x, y, obj)
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