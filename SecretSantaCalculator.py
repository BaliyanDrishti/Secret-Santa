import random
playerno = int(input("Enter number of players:"))
arr = []
for _ in range(playerno):
    arr.append(input('Enter players names: '))
print(arr)
array = []
for _ in range(playerno):
    num = random.randint(1, playerno+1)
    if num not in array:
        arr.append(num)
    print(num)
for _ in range(playerno):
    print(arr)
    print(array)

import random
playerno = int(input("Enter number of players:"))
arr = []
for _ in range(playerno):
    arr.append(input('Enter players names: '))
print(arr)
array = []
for _ in range(playerno+1):
    num = random.randint(1, playerno+1)
    if num not in array:
        array.append(num)
print(array)
for _ in range(playerno):
    print(arr + array)
