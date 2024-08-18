public class Parameters {

  public static void main(String[] args) {
    calcArea(2.3, 3.6);
    calcArea(1.6, 2.4);
    calcArea(2.6, 4.3);
  }

  public static void calcArea(double length, double width) {
    System.out.println("Area: " + (length * width));
  }
}
