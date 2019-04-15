from os import system

def generateTiles(n):   #tested OK
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

def setActive(arr, x, y, val): #tested OK
    x-=1
    y = len(arr[x]) - y
    arr[y][x] = val
    return arr

def getValue(arr, x, y): #tested OK
    x-=1
    y = len(arr[x]) - y
    return arr[y][x]

def formatRawCoordinate(n, x, y): #tested OK
    return (x+1, n-y)

def getRawCoordinate(n, x, y): #tested OK
    return (x-1, n-y)

def getAvailableMove(arr, oponent):
    oponentPositions = []
    for i in range(0, len(arr[0])):
        for j in range(0, len(arr[0])):
            if arr[i][j] == oponent:
                oponentPositions.append((i, j))
    print('Oponent:', oponentPositions)

def getN(arr, x, y, obj): #tested OK
    #get nearest obj north of x,y
    size = len(arr[0])
    x, y = getRawCoordinate(size, x, y)
    i = y
    while i > 0:
        i -= 1
        if arr[i][x] == obj:
            return formatRawCoordinate(size, x, i)
    return -1, -1

def getNE(arr, x, y, obj): #tested OK
    size = len(arr[0])
    x, y = getRawCoordinate(size, x, y)
    i = y
    j = x
    while i > 0 and j < size-1:
        i -= 1
        j += 1
        if arr[i][j] == obj:
            return formatRawCoordinate(size, j, i)
    return -1, -1

def getE(arr, x, y, obj): #tested OK
    size = len(arr[0])
    x, y = getRawCoordinate(size, x, y)
    j = x
    while j < size-1:
        j += 1
        if arr[y][j] == obj:
            return formatRawCoordinate(size, j, y)
    return -1, -1

def getSE(arr, x, y, obj): #tested OK
    size = len(arr[0])
    x, y = getRawCoordinate(size, x, y)
    i = y
    j = x
    while i < size-1 and j < size-1:
        i += 1
        j += 1
        if arr[i][j] == obj:
            return formatRawCoordinate(size, j, i)
    return -1, -1

def getS(arr, x, y, obj): #tested OK
    size = len(arr[0])
    x, y = getRawCoordinate(size, x, y)
    i = y
    while i < size-1:
        i += 1
        if arr[i][x] == obj:
            return formatRawCoordinate(size, x, i)
    return -1, -1

def getSW(arr, x, y, obj): #tested OK
    size = len(arr[0])
    x, y = getRawCoordinate(size, x, y)
    i = y
    j = x
    while i < size-1 and j > 0:
        i += 1
        j -= 1
        if arr[i][j] == obj:
            return formatRawCoordinate(size, j, i)
    return -1, -1

def getW(arr, x, y, obj): #tested OK
    size = len(arr[0])
    x, y = getRawCoordinate(size, x, y)
    j = x
    while j > 0:
        j -= 1
        if arr[y][j] == obj:
            return formatRawCoordinate(size, j, y)
    return -1, -1

def getNW(arr, x, y, obj): #tested OK
    size = len(arr[0])
    x, y = getRawCoordinate(size, x, y)
    i = y
    j = x
    while i > 0 and j > 0:
        i -= 1
        j -= 1
        if arr[i][j] == obj:
            return formatRawCoordinate(size, j, i)
    return -1, -1

def turn(arr, isNowPlayerOne):
    size = len(arr[0])
    isCoordinateAvailable = False
    while (not isCoordinateAvailable):
        drawTiles(arr)
        print()
        if isNowPlayerOne:
            obj = 'O'
            getAvailableMove(arr, 'X')
            print('Player 1: (O)')
        else:
            obj = 'X'
            getAvailableMove(arr, 'O')
            print('Player 2: (X)')
        x = int(input('X: '))
        y = int(input('Y: '))
        isCoordinateAvailable = x > 0 and x < size+1 and y > 0 and y < size+1 and getValue(arr, x, y) == '-'
        system('cls')
    arr = setActive(arr, x, y, obj)
    getValue(arr, x, y)
    return arr

def main():
    n = 8
    arr = generateTiles(n)
    isNowPlayerOne = True
    while True:
        arr = turn(arr, isNowPlayerOne)
        isNowPlayerOne = not isNowPlayerOne