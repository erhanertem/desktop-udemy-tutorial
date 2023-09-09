namespace CookiesCookbook.Recipes.Ingredients
{
    public abstract class Ingredient
    {
        public abstract int Id { get; }
        public abstract string Name { get; }
        public virtual string PreparationInstructions => "Add to other ingredients."; //getter only property
        public override string ToString() => $"{Id}. {Name}";
    }
}