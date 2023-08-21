def laugh(strength=2):
    print("HA" * strength)

# laugh(10)
# laugh()

def slugify(phrase, sep="-"):
    return phrase.lower().strip().replace(" ", sep)

# slugify("hello world chicken face")
# slugify("hello world chicken face", "_")

# INVALID! Required params must come first before those with default values:
# def greet(msg="Hi",person):
#     print(f"{msg}, {person}!")

def greet(person, msg="Hi"):
    print(f"{msg}, {person}!")

