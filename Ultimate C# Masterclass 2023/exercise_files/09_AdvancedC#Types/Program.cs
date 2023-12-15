// > ATTRIBUTES

var validPerson = new Person("John", 1981);
var invalidDog = new Dog("R");
var validator = new Validator();
Console.WriteLine(validator.Validate(validPerson) ? "Person is valid" : "Person is invalid");
Console.WriteLine(validator.Validate(invalidDog) ? "Dog is valid" : "Dog is invalid");
Console.ReadKey();

public class Dog
{
    [StringLengthValidate(2, 10)]
    public string Name { get; } //Length must be between 2 and 10
    public Dog(string name) => Name = name;
}

public class Person
{
    [StringLengthValidate(2, 25)]
    public string Name { get; } //Length must be between 2 and 25
    public int YearOfBirth { get; }
    public Person(string name, int yearOfBirth)
    {
        Name = name;
        YearOfBirth = yearOfBirth;
    }
    public Person(string name) => Name = name;
}

[AttributeUsage(AttributeTargets.Property)]
class StringLengthValidateAttribute : Attribute
{
    public int Min { get; }
    public int Max { get; }
    public StringLengthValidateAttribute(int min, int max)
    {
        Min = min;
        Max = max;
    }
}

class Validator
{
    public bool Validate(object obj)
    {
        var type = obj.GetType(); //Gettype returns a string of the current object > Person
        var propertiesToValidate = type
        .GetProperties() // Gets the list of all properties in Person 
        .Where(property => Attribute.IsDefined(property, typeof(StringLengthValidateAttribute))); //where an attribute with a type of StringLengthValidateAttribute is included inside

        foreach (var property in propertiesToValidate) //We loop thru each item in the list of properties provided 
        {
            object? propertyValue = property.GetValue(obj); //Get the value of the corresponding property > Name property - value is John
            if (propertyValue is not string) //Limit the length range to a string type only
            {
                throw new InvalidOperationException($"Attribute {nameof(StringLengthValidateAttribute)}" + $" can only be applied to strings");
            }
            var value = (string)propertyValue; //Typecast the object to string - only acceptable type for further processing ****NOW WE HAVE THE PROPERTY STRING VALUE OF JOHN****

            var attribute = (StringLengthValidateAttribute)property.GetCustomAttributes(typeof(StringLengthValidateAttribute), true).First(); //Solicit custom attributes meta data of the Name property which is belong to StringLengthValidateAttribute. It returns a Ienumerable so we take the first item via first linq method. *****NOW WE HAVE ACCESS TO STRINGLENGTHVALIDATEATTRIBUTE IN THE NAME PROPERTY ***** 

            // COMPARE JOHN LENGTH TO ATTRIBUTE REQUIREMENT SET BY THE USER.
            if (value.Length < attribute.Min || value.Length > attribute.Max)
            {
                System.Console.WriteLine($"Property {property.Name} is invalid." + $"Value is {value}");
                return false;
            }
        }
        return true;
    }
}