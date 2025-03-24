# Individual inquiry of types
subtypes(Any)
supertype(Number)
subtypes(Number)
subtypes(Complex)
subtypes(Rational)

# Comparing types
Complex <: Number
Int64 <: Signed
Float64 <: Complex
Int32 <: Signed
Int32 <: Real