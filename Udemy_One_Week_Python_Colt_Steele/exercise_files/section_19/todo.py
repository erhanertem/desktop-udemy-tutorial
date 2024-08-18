print(""" _____         _           
 |_   _|__   __| | ___  ___ 
   | |/ _ \ / _` |/ _ \/ __|
   | | (_) | (_| | (_) \__ 
   |_|\___/ \__,_|\___/|___/""")
print(" "*30)
task_list = []
completed_task = []


def renderlist(task_list):
    for num in range(len(task_list)):
        print(f"{num+1}) {task_list[num]}")


def warn():
    print("Please provide proper input or get help 'h'")


while (True):
    print("*"*30)
    print("Enter a command. Type 'h' for help:")
    entry = input("> ")
    if (entry == 'h'):
        # GET HELP
        print("""
              TODO LIST HELP
              Type 'q' to quit
              To add a todo to the list, type it and hit enter
              To complete a todo enter its number
              """)
    elif entry == 'q':
        # QUIT CYCLE
        print(f"Today you completed {len(completed_task)} todos:")
        for num in range(len(completed_task)):
            print(f"* {completed_task[num]}")
        break
    elif entry == "":
        # WARNER FOR BLANK INPUT
        warn()
        continue
    elif entry.isnumeric():
        # TODO LIST REMOVER
        num = int(entry)-1
        if num in range(len(task_list)):
            selected_task = task_list[num]
            task_list.pop(num)
            completed_task.append(selected_task)
            renderlist(task_list)
        else:
            warn()
            continue
    else:
        # APPEND TO TODO LIST
        task_list.append(entry)
        renderlist(task_list)
