max_chars = 140
print("***************************")
tweet = input("ENTER YOUR POTENTIAL TWEET: ")
char_count = len(tweet)
if char_count < max_chars:
    print(f"That {char_count} character tweet will work!")
else:
    print(f"That {char_count} character tweet is {char_count - max_chars} characters too long!")
