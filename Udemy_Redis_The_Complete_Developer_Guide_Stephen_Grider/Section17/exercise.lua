--[[
this is a multiline comment 
I am learnign LUA
]]-- 

-- single line comment
print('Hello World') -- this is a comment

local sum = 1+123
sum = 30
print(sum) -- Sum is 30

if sum>0 then
 print('Hello')
end -- if statement terminator

-- ~= not equal to OPERATOR
if sum~=0 then 
 print('Hello')
end

-- == equality check OPERARTOR
if sum==0 then 
 print('Hello')
end

-- zero is not falsy
if 0 then 
 print('Truthy')
end

-- instead of null - NIL 
if nil then 
 print('Truthy')
end

-- and is &&
if 0 and '' then 
 print('Truthy')
end

-- not is ! , or is ||
if false or not true then 
 print('Truthy')
end

local colors = {'red', 'green', 'blue'}

-- First element in an array is index 1
print(colors[1]) 

-- Length of an array
local length = #colors
print('My array is comprised of ', length, ' elements')

-- Insert element to an array
table.insert(colors, 'orange') 

-- Iterate thru the array elements
for i, v in ipairs(colors) do 
  print(i,v)
end

-- FOR LOOPS
for i=5, 10 do
   print(i)
end

-- LUA tables == JS object
local user = {
   id='a1',
   name='samantha'
}
print(user['id'])

for k,v in pairs(user) do 
   print(k,v)
end