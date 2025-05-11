module ParentModule

include("MyModule/MyModule.jl")
include("SubModule/SubModule.jl")

using .SubModule

function main()
  SubModule.submodule_main()
end

main()

end # module
