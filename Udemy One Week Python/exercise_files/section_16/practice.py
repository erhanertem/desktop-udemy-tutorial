# def is_even(num):
#     if num % 2 == 0:
#         return True
#     else:
#         return False

# def is_even(num):
#     if num % 2 == 0:
#         return True
#     return False

def is_even(num):
    return num % 2 == 0


def slugify(phrase):
    return phrase.lower().strip().replace(" ", "-")

def count_vowels(word):
    count = 0
    for char in word:
        if char in "aeiou":
            count += 1
    return count

