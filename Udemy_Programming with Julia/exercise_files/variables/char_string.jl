chr = 'a'
typeof(chr)

numChar = Int(chr)
typeof(numChar)

# Define unicides as chars
unichar = '∑'

# String Types

str = "Julia string"
typeof(str)

longstr = """Another string from julia"""
typeof(longstr)

str = "Julia language"
str[1]
str[14]

str[begin]
str[end]
str[end-1]
str[end÷2]

str[3:5]
str[end-4:end]

firstindex(str)
lastindex(str)
lastindex("abcΣΔ")
length("abcΣΔ")
length(str)

str1 = "I am home."
str2 = "Brew me some coffee"
string(str1, ' ', str2)

"Julia"^4

str1 * " " * str2

x = 4;
y = 5;
"First number is $x, and the second number is $y"