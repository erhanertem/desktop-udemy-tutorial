#  ----------
#    PART 1
#  ----------
word = "supercalifragilisticexpialidocious"

# Write a for loop that prints out each character in the above "word" variable
for char in word:
    print(char)

# Write a while loop that does the same thing!
word_length = len(word)
i = 0
while i < word_length:
    print(word[i])
    i += 1

#  ----------
#    PART 2
#  ----------
# Write a while loop that prints the even numbers from 100 to 140 (including 140)
num = 100
while num <= 140:
    if num % 2 == 0:
        print(num)
    num += 1
# Write a for loop that does the same thing (with range())
for num in range(100, 141):
    if num % 2 == 0:
        print(num)

#  ----------
#    PART 3
#  ----------
# Write a loop that asks a user to input the passphrase "sillygoose" and keeps asking them to do so until they comply:
reply = input("Enter the passphrase: ")
while reply != "sillygoose":
    reply = input("Enter the passphrase: ")
