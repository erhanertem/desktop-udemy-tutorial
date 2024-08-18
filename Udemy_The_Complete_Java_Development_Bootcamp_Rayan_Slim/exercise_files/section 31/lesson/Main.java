import product.Shirt;
import static product.Shirt.Size.*;

import product.Pants;
import product.Product;

public class Main {

    public static void main(String[] args) {
        // // THROWS COMPILE TIME ERROR IF THE SUPER CLASS IS MARKED ABSTRACT
        // Product product = new Product(19.99, "Blue", "NO_NAME");
        // Shirt shirt = new Shirt();
        // Product shirt = new Shirt(10.99, "RED", "NIKE", SMALL); //->Always go for the
        // lowest level object type : shirt is better than product
        Shirt shirt = new Shirt(10.99, "RED", "NIKE", SMALL);
        // ((Shirt) shirt).setSize(SMALL);
        // shirt.setBrand("NIKE");
        // shirt.setPrice(79.99);
        // shirt.setColor("WHITE");
        shirt.fold();
        productStore(shirt);

        String x = shirt.toString();
        System.out.println(x);

        // Pants pant = new Pants();
        // Product pant = new Pants(49.99, "BLACK", "LEE COOPER", 32, 32); //->Always go
        // for the lowest level object type : pants is better than product
        Pants pant = new Pants(49.99, "BLACK", "LEE COOPER", 32, 32);
        // ((Pants) pant).setWaist(32);
        // ((Pants) pant).setLength(32);
        // pant.setColor("BLACK");
        // pant.setPrice(56.23);
        // pant.setBrand("LEE COOPER");
        pant.fold();
        productStore(pant);

    }

    // POLYMORPHISM
    // public static void pantStore(Pants pants) {
    // System.out.println("Thank you for purchasing " + pants.getBrand() + " pants.
    // " + " Your total comes to "
    // + pants.getPrice());
    // }
    // public static void shirtStore(Shirt shirt) {
    // System.out.println("Thank you for purchasing " + shirt.getBrand() + " shirt.
    // " + " Your total comes to "
    // + shirt.getPrice());
    // }
    public static void productStore(Product product) {
        System.out.println("Thank you for purchasing " + product.getBrand() + " "
                + product.getClass().getSimpleName().toLowerCase() + ". " + " Your total comes to "
                + product.getPrice());
        product.wear();
    }
}
