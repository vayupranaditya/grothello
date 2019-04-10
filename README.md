# grothello: an othello game using greedy algorithm

```
Y
8 - - - - - - - - 
7 - - - - - - - - 
6 - - - - - - - - 
5 - - - - - - - - 
4 - - - - - - - - 
3 - - - - - - - - 
2 - - - - - - - - 
1 - - - - - - - - 
  1 2 3 4 5 6 7 8 X
```
##### every (x, y) coordinate used as user input and parameters should be using the numbering as shown above
functions available:
- `string[][] generateTiles(int n)` creates an `n * n array` with values of `-` (dash). `n` must be a positive integer
- `void drawTiles(string[][] arr)` prints current value of `arr` as above form
- `string[][] setActive(string[][] arr, int x, int y, string obj)` set value of `arr[x][y]` (as above form) to `obj`. returns the updated `arr`
- `string getValue(string[][] arr, int x, int y)` returns the value of `arr[x][y]` (as above form)
- `string[][] turn(string[][] arr, bool isNowPlayerOne)` do the current turn. returns the updated `arr`

### example code:
```
> arr = generateTiles(4)

> print(arr)
[['-', '-', '-', '-'], ['-', '-', '-', '-'], ['-', '-', '-', '-'], ['-', '-', '-', '-']] 

> drawTiles(arr)
4 - - - - 
3 - - - - 
2 - - - - 
1 - - - - 
  1 2 3 4

> arr = setActive(arr, 1, 1, 'O')

> drawTiles(arr)
4 - - - - 
3 - - - - 
2 - - - - 
1 O - - - 
  1 2 3 4

> arr = setActive(arr, 3, 4, 'X')

> drawTiles(arr)
4 - - X - 
3 - - - - 
2 - - - - 
1 O - - - 
  1 2 3 4

> print(getValue(arr, 3, 4)
'X'

print(getValue(arr, 1, 3)
'-'
```