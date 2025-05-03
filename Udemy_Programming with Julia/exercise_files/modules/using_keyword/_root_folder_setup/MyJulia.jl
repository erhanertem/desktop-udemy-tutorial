
include("MyModule/MyModule.jl")    # Brings in the code
# using .MyModulename           # The dot means it's a *relative module*
using .MyModulename: greet           # The dot means it's a *relative module*

greet()         # ✅ works — it's exported
# add(2, 3)       # ✅ works
add(2, 3)       # ❌ ERROR — not exported
MyModulename.add(3, 2)  # ✅ works — fully qualified
sub(3, 2)       # ❌ ERROR — not exported
MyModulename.sub(3, 2)  # ✅ works — fully qualified
