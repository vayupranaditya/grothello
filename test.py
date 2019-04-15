exec(open('idea.py').read())
print('--test--')
print()

tiles8 = [['-', '-', '-', '-', '-', '-', '-', '-'], ['-', '-', '-', '-', '-', '-', '-', '-'], ['-', '-', '-', '-', '-', '-', '-', '-'], ['-', '-', '-', '-', '-', '-', '-', '-'], ['-', '-', '-', '-', '-', '-', '-', '-'], ['-', '-', '-', '-', '-', '-', '-', '-'], ['-', '-', '-', '-', '-', '-', '-', '-'], ['-', '-', '-', '-', '-', '-', '-', '-']]

assert generateTiles(8) ==  tiles8
print('generateTiles OK')
print()

assert formatRawCoordinate(4, 0, 0) == (1, 4)
assert formatRawCoordinate(8, 5, 3) == (6, 5)
print('formatRawCoordinate OK')
print()

assert getRawCoordinate(4, 4, 4) == (3, 0)
assert getRawCoordinate(8, 5, 4) == (4, 4)
print('getRawCoordinate OK')
print()

assert setActive(tiles8, 1, 8, 'O') == [['O', '-', '-', '-', '-', '-', '-', '-'], ['-', '-', '-', '-', '-', '-', '-', '-'], ['-', '-', '-', '-', '-', '-', '-', '-'], ['-', '-', '-', '-', '-', '-', '-', '-'], ['-', '-', '-', '-', '-', '-', '-', '-'], ['-', '-', '-', '-', '-', '-', '-', '-'], ['-', '-', '-', '-', '-', '-', '-', '-'], ['-', '-', '-', '-', '-', '-', '-', '-']]
print('setActive OK')
print()

filledTiles8 = [['-', '-', '-', '-', '-', '-', '-', '-'],['-', '-', '-', '-', '-', '-', '-', '-'],['-', '-', '-', '-', '-', '-', '-', '-'],['-', '-', '-', 'X', 'O', '-', '-', '-'],['-', '-', 'X', 'X', 'X', '-', '-', '-'],['-', '-', '-', 'O', '-', '-', '-', '-'],['-', '-', '-', '-', '-', '-', '-', '-'],['-', '-', '-', '-', '-', '-', '-', '-']]

assert getN(filledTiles8, 5, 3, 'O') == (5, 5)
assert getN(filledTiles8, 8, 8, 'O') == (-1, -1)
assert getN(filledTiles8, 5, 1, 'O') == (-1, -1)
print('getN OK')
print()

assert getNE(filledTiles8, 3, 3, 'O') == (5, 5)
assert getNE(filledTiles8, 8, 8, 'O') == (-1, -1)
assert getNE(filledTiles8, 2, 1, 'O') == (-1, -1)
print('getNE OK')
print()

assert getE(filledTiles8, 3, 5, 'O') == (5, 5)
assert getE(filledTiles8, 8, 8, 'O') == (-1, -1)
print('getE OK')
print()

assert getSE(filledTiles8, 2, 5, 'O') == (4, 3)
assert getSE(filledTiles8, 8, 8, 'O') == (-1, -1)
assert getSE(filledTiles8, 1, 6, 'O') == (-1, -1)
print('getSE OK')
print()

assert getS(filledTiles8, 4, 6, 'O') == (4, 3)
assert getS(filledTiles8, 8, 8, 'O') == (-1, -1)
assert getS(filledTiles8, 5, 7, 'O') == (-1, -1)
print('getS OK')
print()

assert getSW(filledTiles8, 6, 5, 'O') == (4, 3)
assert getSW(filledTiles8, 1, 1, 'O') == (-1, -1)
assert getSW(filledTiles8, 7, 7, 'O') == (-1, -1)
print('getSW OK')
print()

assert getW(filledTiles8, 6, 5, 'X') == (4, 5)
assert getW(filledTiles8, 8, 8, 'O') == (-1, -1)
assert getW(filledTiles8, 6, 3, 'O') == (-1, -1)
print('getW OK')
print()

assert getNW(filledTiles8, 5, 2, 'X') == (3, 4)
assert getNW(filledTiles8, 8, 8, 'O') == (-1, -1)
assert getNW(filledTiles8, 7, 3, 'O') == (-1, -1)
print('getNW OK')
print()

assert getValue(filledTiles8, 4, 3) == 'O'
assert getValue(filledTiles8, 5, 4) == 'X'
print('getValue OK')
print()

print('=== all test OK ===')