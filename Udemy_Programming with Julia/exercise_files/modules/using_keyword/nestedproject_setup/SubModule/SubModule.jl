module SubModule

using ..MyModule   # Use parent module's MyModule

function submodule_main()
  greet()
  println("2 + 3 = ", add(2, 3))
  println("5 - 2 = ", MyModule.sub(5, 2))  # Not exported, so fully qualified
end

end
