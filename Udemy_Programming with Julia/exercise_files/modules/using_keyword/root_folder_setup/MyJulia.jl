# include(joinpath(dirname(@__FILE__), "MyModule.jl"))    # Brings in the code
include("MyModule.jl")    # Brings in the code
using .MyModule           # The dot means it's a *relative module*

greet()         # ✅ works — it's exported
add(2, 3)       # ✅ works
sub(3, 2)       # ❌ ERROR — not exported
MyModule.sub(3, 2)  # ✅ works — fully qualified
