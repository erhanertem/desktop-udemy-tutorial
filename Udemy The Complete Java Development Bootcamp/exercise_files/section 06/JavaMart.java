public class JavaMart {

  public static void main(String[] args) {
    double wallet = 100;

    //See Learn the Part for the complete instructions (link in resources folder of Udemy video).

    double toyCar = 5.99;
    System.out.println("Can I get this car?");
    if (toyCar <= wallet) {
      System.out.println("Sure!\r\n" + "pay for the toy car");
    } else {
      System.out.println("Sorry, I only have $" + wallet + " left.");
    }

    double nike = 195.99;
    System.out.println("Can I get these nike shoes?");
    if (nike <= wallet) {
      System.out.println("Sure!\r\n" + "pay for the nike shoes");
    } else {
      System.out.println("Sorry, I only have $" + wallet + " left.");
    }
  }
}
