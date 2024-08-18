animal = "Nudibranch"


def outer():
    animal = "Echidna"

    def inner():
        print("FROM INNER FUNC: ", animal)
        str = "HELLO WORLD!"
        print(str)

    print("FROM OUTER FUNC: ", animal)
    inner()


print("OUTSIDE OF FUNCTIONS: ", animal)
outer()
