def demo(**kwargs):
    print(kwargs)


demo(color='red', age=12)


def print_args(**kwargs):
    for (k, v) in kwargs.items():
        print(f"{k} is {v} years old")
