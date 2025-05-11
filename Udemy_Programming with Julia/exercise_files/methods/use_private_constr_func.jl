using .UserSystem
u1 = UserSystem.create_user("Alice", 30)   # ✅ ok
u2 = UserSystem.create_user("", 25)        # ❌ Error: Name cannot be empty

UserSystem.User("Alice", 30) # it's still allowed because you're inside the module, but you have made it clear people should call create_user() for safe creation. (In Julia, "truly" private struct constructors aren't enforced 100% — it's a convention.)
