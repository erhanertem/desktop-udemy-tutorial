package product;

public class Pants extends Product {

    private int waist;
    private int length;

    // CONSTRUCTOR
    public Pants(double price, String color, String brand, int waist, int length) {
        super(price, color, brand);
        this.waist = waist;
        this.length = length;
    }

    public int getWaist() {
        return this.waist;
    }

    public void setWaist(int waist) {
        this.waist = waist;
    }

    public int getLength() {
        return this.length;
    }

    public void setLength(int length) {
        this.length = length;
    }

    @Override
    public void wear() {
        System.out.println("The " + this.waist + " " + this.length + " pants look great on you.");
    }

    @Override
    public void fold() {
        // call the fold method @ the super class
        System.out.println("***********");
        super.fold();
        System.out.println("Lay the pant on a flat surface");
        System.out.println("Blahh blahhh");
        System.out.println("Thats blah blahhh");
    }

}
