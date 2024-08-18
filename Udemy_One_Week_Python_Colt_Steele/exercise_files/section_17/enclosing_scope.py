def outer():
    animal = "Secretary Bird"

    def inner():
        print("INSIDE INNER FUNC: ", animal)

        def third():
            print("INSIDE THIRD NESTED FUNC: ", animal)
        third()
    inner()


outer()
