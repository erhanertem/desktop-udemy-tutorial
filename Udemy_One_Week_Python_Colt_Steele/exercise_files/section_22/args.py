# def count_stuff(*args):
#     print(f"You passed me {len(args)} arguments")

# def count_stuff(*things):
#     print(f"You passed me {len(things)} arguments")


def sum(*nums):
    print(nums)
    total = 0
    for num in nums:
        total += num
    return total


sum(1, 2, 3, 4)


def silly(first, second, *others):
    print(f"first is: {first}")
    print(f"second is: {second}")
    print(f"others is: {others}")
