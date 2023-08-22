animal = "Lemur"
print("OUTSIDE OF FUNCTION: ", animal)


def func():
    print("INSIDE FUNC: ", animal)

    def inner_func():
        print("INSIDE INNER FUNC: ", animal)
    inner_func()


func()
