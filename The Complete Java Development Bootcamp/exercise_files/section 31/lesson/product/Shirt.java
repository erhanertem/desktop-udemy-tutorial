package product;

public class Shirt extends Product {

    private Size size;

    public enum Size {
        SMALL, MEDIUM, LARGE
    }

    // CONSTRUCTOR
    public Shirt(double price, String color, String brand, Size size) {
        super(price, color, brand);
        this.size = size;
    }

    public Size getSize() {
        return this.size;
    }

    public void setSize(Size size) {
        this.size = size;
    }

    @Override
    public void wear() {
        System.out.println("The " + this.size + " shirt suits you well.");
    }

    @Override
    public void fold() {
        System.out.println("***********");
        super.fold();
        System.out.println("oh boi oh shirtsssss");
        System.out.println("Blahh blahhh");
        System.out.println("Thats blah SHIRTY SHITTY blahhh");
    }

    @Override
    public String toString() {
        return "SHIRT " + this.size + " " + super.getBrand() + " BRAND & " + super.getColor() + " COLOR IS NOT NICE";
    }

}
