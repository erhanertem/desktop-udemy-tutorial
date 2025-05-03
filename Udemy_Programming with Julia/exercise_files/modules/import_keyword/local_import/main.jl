# include("MyModule.jl")
# using .MyModule  # Relative import

# greet()         # ✅ works (exported)
# add(1, 2)       # ✅ works (exported)
# # sub(3, 1)     # ❌ ERROR: not exported
# MyModule.sub(3, 1)  # ✅ works — qualified access

# include("MyModule.jl")
# import .MyModule  # Note: no names are brought into scope

# MyModule.greet()     # ✅
# MyModule.add(1, 2)   # ✅
# MyModule.sub(3, 1)   # ✅

push!(LOAD_PATH, dirname(@__FILE__))
include("MyModule.jl")
import MyModule: greet, add  # Note: no names are brought into scope
MyModule.greet()     # ✅
MyModule.add(1, 2)   # ✅
MyModule.sub(3, 1)   # ✅
