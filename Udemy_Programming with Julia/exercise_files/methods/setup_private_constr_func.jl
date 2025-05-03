module UserSystem

mutable struct User
  name::String
  age::Int

  # 🔒 Inner constructor (private: only visible inside module)
  function User(name::String, age::Int)
    name == "" && error("Name cannot be empty")
    age < 0 && error("Age cannot be negative")
    new(name, age)
  end
end

# 🛡 Public factory function (official way to create a User)
function create_user(name::String, age::Int)
  return User(name, age)
end

end # module
