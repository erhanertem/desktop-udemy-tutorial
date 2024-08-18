

# def add_twice(val, lst=[]):
#     lst.append(val)
#     lst.append(val)
#     return lst


# # add_twice("hi", [1, 2, 3])
# # add_twice("yay")
# add_twice("boo")


# def add_thrice(val, lst=[]):
#     lst.append(val)
#     lst.append(val)
#     lst.append(val)
#     return lst


def add_thrice(val, lst=None):
    if lst is None:
        lst = []
    lst.append(val)
    lst.append(val)
    lst.append(val)
    return lst


add_thrice(7, [1, 2, 3])
add_thrice(8, [1, 2, 3])
add_thrice(9)
add_thrice(0)
