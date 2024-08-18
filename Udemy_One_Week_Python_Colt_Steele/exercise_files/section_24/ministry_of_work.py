from textblob import TextBlob
import pyttsx3

engine = pyttsx3.init()
engine.say("Hello Employee Number 21783619736.  We hope you had a great day of work.  It's time to submit your employee wellness statement")
engine.runAndWait()

print("Enter your employeee wellness statement: ")
phrase = input("> ")
blob = TextBlob(phrase)
while (blob.sentiment.polarity < 0.5):
    engine.say("Employee Number 21783619736, that was not a very positive employee wellness statement.  Please try again and be more positive this time.  We know how much you love working here.")
    engine.runAndWait()
    print("More positive please: ")
    phrase = input(">")
    blob = TextBlob(phrase)
print("We appreciate you too")
engine.say("Employee Number 21783619736, Thank you for such a kind and positive statement! We here are the ministry of work appreciate you too! Have a great day!")
engine.runAndWait()
