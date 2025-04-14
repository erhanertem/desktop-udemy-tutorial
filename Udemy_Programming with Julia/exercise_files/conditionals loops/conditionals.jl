score = 70
if score > 60
  println("You passed the exam.")
end

if score > 60
  println("You passed the exam.")
else
  println("You failed the exam.")
end

if score >= 85
  println("Your grade is A.")
elseif score >= 70
  println("Your grade is B.")
elseif score >= 60
  println("Your grade is C.")
else
  println("Your grade is D.")
end

if score >= 85 && score <= 100
  println("Your grade is A.")
elseif score >= 70 && score < 85
  println("Your grade is B.")
elseif score >= 60 && score < 70
  println("Your grade is C.")
else
  println("Your grade is D.")
end
if 85 <= score <= 100
  println("Your grade is A.")
elseif 70 <= score < 85
  println("Your grade is B.")
elseif 60 <= score < 70
  println("Your grade is C.")
else
  println("Your grade is D.")
end

# Ternary operator
score > 60 ? println("👍 You passed the exam.") : println("👎 You failed the exam.")

score = 55
score > 85 ? "Grade A" : score > 60 ? "Grade B" : "You fool"
