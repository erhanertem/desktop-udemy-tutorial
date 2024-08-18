#

# LESSON 5
# twith_handler = "Arabic"
# twith_handler = '@OPUS'
# print(twith_handler)
# type(34)
# type("Aremaic")
# type("")
# print('She said "hi"')
# print('She said "hi"')

# age = "eighty-five"
# age = 85
# print(type(age))

# state = "hello" + " world"
# print(state)

# last_name = "Tammy"
# first_name = "Horsemann"
# full_name = first_name + " " + last_name
# print(full_name[0])

# print("4" + 5)
# print("4" * 5)

# "hello"[3]

# Same as null
# user = None

# LESSON 6
# full_name = "Erhan Ertem"
# full_name[2:6]  # including start - excluding end index
# full_name[2:]  # including start - to the end of the string
# full_name[:4]  # including start - excluding 4th index of the string
# full_name[2:-1]  # including start - excluding the last index
# full_name[2::2]
# including start - to the end of the string - SKIPPING EVERY N CHARACTER

# print("hello \n world")
# print("hello \t world")

# print(
#     """
# Hello my name is
#         Erhan Ertem
#   I am dangling jiggy jiggy mashmallow
#      hoping for a pirate ship
#     Langard!!
# """
# )

# LESSON 7
# len("Erhan")
# len(12345)
# first_name = input("What is your first name ?")
# print("Hi there, " + first_name)
# type("hi")
# type(5)
# int("12")
# int(12.5)
# float("3.3")
# str(44.5)
# float("2")

# age = input("What's your age")
# days = float(age) * 365
# print(days)

# f"there are {24*60*60} seconds in a day"
# age = input("What's your age")
# f"hello dear {age} old boi"

# LESSON 8
# "purpleface".capitalize()
# "purpleface".upper()
# "puRPleface".lower()

# "  PURFLANGE  ".strip()
# "__PURF-LAN-G-E--".strip("-_")
# "    PURFLANGE".lstrip()
# "PURFLANGE    ".rstrip()

# " ".join("selfie")

# "3kilometers 5kilometers 8kilometers".replace("kilometers", "miles")
# "3kilometers 5kilometers 8kilometers".replace("kilometers", "")
# "3kilometers 5kilometers 8kilometers".replace("kilometers", "miles", 2)

# msg = "Cat in a hat"
# msg.find("a")
# msg.rfind("a")
# msg.index("a")
# msg.rindex("a")
# msg.count("a")

# email = "eERtem12321@gmail.com"
# email.strip().lower()

# int("45")
# int("45.2")
# float("45")
# float("45.5")

# LESSON 9
# 1 > 10
# 1 <= 10
# age = 19
# age < 21

# "hello" == "hello"
# "hello" != "hello"
# "hello" == "hello "
# "hello" != "hello "
# "a" == "A"
# "a" != "A"

# 4 == 4.0
# 4.0001 == 4.0
# "4" == 4

# bool(0)
# bool(-1)
# bool("Ernie")

# "a" in "bat"
# "a" < "b"
# ord("a")  # 97
# ord("b")  # 98

# LESSON 10
# age = input("How old are you: ")
# age = int(age)
# if age > 21:
#     print("COME ON IN!")
#     print("***********")
# print("GO HOME!")

# score = -99
# if score <= 0:
#     print("You died!")
# else:
#     print("Game Over!")

# score = -99
# if score <= 0:
#     print("You died!")
# print("Game Over!")

# color = "black"
# color = 22

# if color == "green":
#     print("BEGINNER!")
# elif color == "blue":
#     print("INTERMEDIATE")
# elif color == "black":
#     print("ADVANCED")
# else:
#     print("I HAVE NO IDEA WHAT YOU ARE TALKING ABOUT!!!!")


# num = 3
# if num > 0:
#     print("LAYER 1")
# elif num == 3:
#     print("LAYER 2")
# elif num < 10:
#     print("LAYER 3")

# LESSON 11
# mood = "happy"

# if mood == "happy":
#     print("I'm happy you are happy!")
#     print(":) " * 10)

# unit = input("What unit are you using?")
# temp = int(input("What temp is the water ?"))

# if unit == "f":
#     if temp >= 212:
#         print("WATER IS BOILING")
#     else:
#         print("WATER IS NOT BOILING")
# elif unit == "c":
#     if temp >= 100:
#         print("WATER IS BOILING")
#     else:
#         print("WATER IS NOT BOILING")
# elif unit == "k":
#     if temp >= 373:
#         print("WATER IS BOILING")
#     else:
#         print("WATER IS NOT BOILING")
# else:
#     print("I couldnt get your request, either type c, k, f as temp types")

# LESSON 12
# "a" == "a" and 1 < 5
# "a" == "b" or 1 < 5
# age = 16
# not age < 18


# LESSON 16
# def laugh(num):
#     print("ha_" * num)
# laugh(10)
# len("pickle")
# def divide(x, y):
#     print(x / y)
# divide(4, 2)
# def hello(text):
#     print(text)

# def divide(x, y):
#     return x / y

# result = divide(3, 2)
# print(result)

# def is_even(num):
#     return num % 2 == 0

# def slugify(phrase):
#     return phrase.lower().strip().replace(" ", "_")

# slugify("hello world oopps")

# def count_vowels(str):
#     count = 0
#     # for i in range(0, len(str)):
#     #     if str[i] in "aeiou":
#     for i in str:
#         if i in "aeiou":

#             count += 1
#     return count

# count_vowels("hello world")
# count_vowels("lll")

# def laugh(intensity=10):
#     print("HA!!"*intensity)

# laugh()
# laugh(2)

# def greet(person, msg='Hi'):
#     print(f"{msg}, {person}!")

# greet("Tonya")

# greet("Hello", "Tonya")

# LESSON 17
# temperature = 78

# def get_weather():
#     temperature = 90

# get_weather()
# print(temperature)

# LESSON 18

# high_scores = [99, 100, 78, 56, 50, 20, 12]
# high_scores
# stuff = [4, 5.6, True, False, 'hi', []]
# stuff
# stuff[1]
# stuff[-1]

# len([1, 2, 3, 4])
# len(stuff)

# nums = [7, 8, 9]
# nums[1] = 10
# nums.append("rosa")
# nums.extend("rosa")
# nums.extend(['charlie', 'marley', 'borris'])
# nums.insert(0, "Hello")
# nums[0:2]
# s = "May".rjust(10, "*")
# s = "May".ljust(10, "*")
# s
# s[0:2]

# nums = [7, 8, 9, 10, 11, 14]
# nums[0:6:2]  # [7, 9, 11]
# nums[::2]  # [7, 9, 11]

# nums = [7, 8, 9, 10, 11, 14]
# nums[0:3] = ["a", "b", "c", "d"]
# nums.clear()
# nums.remove(10)
# nums.remove('a')
# nums.pop()
# nums.pop(0)

# del [1, 2, 3, 4, 5][2:]

# langs = ["Pyhton", "C++", "C", "C#", "Java"]
# for lang in langs:
#     print(lang)

# LESSON 19
# langs = ["Py", "JS", "C", "Java", "C", 2, 3, 2]
# langs.count("C")
# langs.count("CS")
# langs.count(2)

# evens = [2, 4, 6]
# evens.reverse()
# evens.sort()
# evens

# colors = ["red", "blue", "beige"]
# colors.sort()
# colors

# id([])
# id([])
# id("STring")
# id(0)
# id(0)

# res = (id([1, 2, 3]) == id([1, 2, 3]))
# res  # True
# list1 = [1, 2, 3]
# list2 = list1
# result = list1 == list2  # True
# result = list1 is list2  # True - list2 is a memory reference copy of list1
# result = ([1, 2, 3] == [1, 2, 3])  # True
# result = [1, 2, 3] is [1, 2, 3]  # False
# result

# birthday = "03/27/2020"
# array = birthday.split("/")
# array

# fruits = ["Apple", "Mango", "Tobacco"]
# fruits = "!! ** ".join(fruits)
# fruits

# user = ["Ernie", "Malloy", 42]
# first, last, age = user

# user = ["Ernie", "Malloy", "Operator", "$20000", 42]
# first, last, *details, age = user
# details

# list1 = [12, 9, 3, 7]
# list2 = list1.copy()
# list1 == list2
# list1 is list2

# list3 = [2, 9, ["a", "b"], 2]
# list4 = list3.copy()
# list4

# import copy
# list1 = [2, 9, ["a", "b", [1, 3, 4, 5, ["x", "y", [1, 4, 5]]]], 2]
# list2 = copy.deepcopy(list1)
# list2

# LESSON 20

# movies = {}
# movie = {"title": "Amedeus",
#          "imdb": 3.6,
#          'score': 7.0,
#          'records': 2000,
#          'director': "Allen Fredo"}

# movie['title']
# movie['title'] = "Jonny"
# movie['genre'] = "Comics"
# movie

# prices = {
#     "arugala": 1.10,
#     "basil": 2.54,
#     "blackberries": 4.93,
#     "blueberries": 2.88,
#     "coconut": 7.15,
#     "fennel": 3.36,
# }

# prices.pop('basil')
# prices.popitem()
# # prices.clear()
# del prices['coconut']
# prices

# prices.keys()
# prices.values()
# prices.items()

# order = {"cost": 3.5, "quantity": 12}
# order.update({"cost": 4.5, "date": "03/05/2023"})
# order

# d1 = {"a": 1, "b": 2}
# d2 = {"c": 3}
# d3 = {**d1, **d2}
# d4 = d1 | d2

# LESSON 21
# dishes = ("burrito", "taco", "fajita", "quesadilla")
# dishes[2]
# dishes[:2]
# dishes.index("burriato")
# dishes.index("burrito")
# dishes.count("taco")
# answer = "burrito" in dishes
# answer

# for dish in dishes:
#     print(dish)
# t = (1, 2, 3)
# type(t)
# t

# (True, False, 23, 'Aikido')

# x = tuple()

# gps_locations = {(121.1211, 34323.2211): 'home base',
#                  (111.1122, 10001.1): 'phone boot'}

# evens = {2, 4, 6, 8, 2}
# evens = {1, 2, 3, True, 'ads'}
# sell = dict()
# sell
# evennum = set()
# evennum = {1}
# evennum = {2, 4, 5, 6, 7}
# evennum = {2, 4, 5, 6, 7, 7}
# evennum.add("SamsClub")
# evennum.add("A SamsClub")
# evennum.add("a SamsClub")
# evennum.add("samsClub")
# evennum.remove("samsClub")
# response = "samsClub" in evennum
# response
# evennum.remove(3)
# evennum.discard(3)
# evennum.clear()
# evennum

# set1 = {1, 3, 5, 7, 9, 11}
# set2 = {2, 4, 6, 8, 10, 11}
# x = set1 & set2
# x = set1 | set2
# x = set1-set2
# x

# LESSON 22
# def display_info1(person, status="file"):
#     # Default has to come after regular arg
#     print(f"{status}")
#     print(f"{person}")


# display_info1("colt", status="married")


# def display_info2(person, *args, status="file"):
#     # *args has to provided before status in order to have status default to "file"
#     print(f"{status}")
#     print(f"{person}")
#     print(f"{args}")


# display_info2("colt", 4, 5, 6, 7, 8, 9,
#               status="married")


# def display_info3(person, *args, status="file", **kwargs):
#     # **kwargs has to come after all
#     print(f"{status}")
#     print(f"{person}")
#     print(f"{args}")
#     print(f"{kwargs}")


# display_info3("colt", 4, 5, 6, 7, 8, 9,
#               status="married", age=87, mood="thriving")

# nums = [1, 2, 3, 4, 111, 333, 33, 34, 5, 6, 8, 9999122, 1]
# sum(nums)
# sum(*nums)

# LESSON 23
# def get_user_name():
#     res = input('Please enter your name: ')
#     if not res.isalpha():
#         raise ValueError("can only return letters!")
#     return res

# def get_user_name():
#     try:
#         res = input('Please enter your name: ')
#         if not res.isalpha():
#             raise NameError
#         return res
#     except NameError:
#         # except (ValueError, EOFError):
#         # except Exception:
#         # except ValueError:
#         print("An exception")


# get_user_name()

# LESSON 24
# from calendar import isleap, weekday
# import math as ma
# from math import *
# import random
# import calendar
# random.randint(1, 6)
# calendar.weekday(2012, 1, 1)
# isleap(2015)
# weekday(2012, 1, 1)
# ma.pi

# LESSON 25
# {
#     "name": 'elton',
#     "breed": "australian shep",
#     "tricks": ['sit', 'down'],
#     "available": True
# }

class Puppy:
    # Naming convention is to capitalize the class name
    # __init__ represents the constructor function in Python
    def __init__(self, name):  # self must be forst parameter
        self.name = name  # self points to the current instance of Puppy
        self.tricks = []


elton = Puppy("Elton")
elton.name
elton.tricks
