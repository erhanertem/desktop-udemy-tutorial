# ARITHMETIC OPERATORS
5 + 7
14 - 6
4.2 + 1
67 / 3

ans
ans^2

x = 12;
y = 23;
4(3x + 5y)

-x
-y
-3.5

# INTEGER DIVISORS - ALWAYS RETURNS INTEGER VALUE
15 ÷ 4 # \div TAB
div(15, 4)
# FLOATING POINT DIVISOR - MAY YIELD BOTH INTEGER OR FLOATING POINT VALUE
15 / 4

4^2

4 + 5
+(4, 5)
*(2, 4)
^(2, 2)

5 \ 2
2 / 5

sqrt(16)
√16

cbrt(27)
∛27

25 % 3
rem(25, 3)

# NUMERIC COMPARISON OPERATORS
a, b = 1, 2
a == b

a != b
a ≠ b # \ne TAB

c = [1, 2, 3, 4]
d = c
e = deepcopy(c)

c == d
c == e
c === e
c ≡ e # \equiv TAB

a ≤ b # \leq TAB

a ≥ b # \geq TAB

# CHAINED COMPARISON OPERATORS
# OTHER LANGUAGES DOES NOT DIRECTLY ALLOW COMPARISON OPERATOR CHAINING
c = 1.7
a >= b >= c
# Alternate comparator
a >= b && b >= c

0.4 + 0.2
0.6 == 0.4 + 0.2
isequal(0.6, 0.4 + 0.2)
isapprox(0.6, 0.4 + 0.2)
0.6 ≈ 0.4 + 0.2 # \approx TAB

# BOOLEAN OPERATORS
a = true;
b = false;
!a
!b

a && b
a || b

a = 5;
b = 7;
a < b && a > 3

# BITWISE OPERATORS
x = 109;
y = 56;
x & y
x | y
x ⊻ y # \xor TAB
xor(x, y)

x += 5 # x = x+5

x *= 4 # x = x*4

x /= 2 # x = x/2

x -= 3 # x = x-3

x ^= 2 # x = x^2

round(3.78)
ceil(3.78)
floor(3.78)

abs(-3)   # 3
sign(-4)  # -1
sign(2)   # 1

sin(π / 2)
cos(π / 2)
tan(π / 2)

sind(90)
cosd(90)
tand(45)

rand(4)
rand(Int, 4)

round(2.718281828, digits=4) = 2.7183