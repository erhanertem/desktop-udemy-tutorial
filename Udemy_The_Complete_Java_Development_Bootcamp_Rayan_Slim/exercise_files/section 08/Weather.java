public class Weather {

  public static void main(String[] args) {
    double noon = 77; //temperature at noon in fahrenheit.
    double evening = 61; //temperature during the evening in fahrenheit
    double midnight = 55; //temperature at midnight in fahrenheit
    //Task 3 - Call the printTemperatures function.
    System.out.println("Temps @ noon:");
    printTemperatures(noon);
    System.out.println("\nTemps @ evening:");
    printTemperatures(evening);
    System.out.println("\nTemps @ midnight:");
    printTemperatures(midnight);
  }

  //Task 1: Make a function here. See the doc comments below.
  public static double fahrenheitToCelsius(double fahrenheit) {
    double celcius = (fahrenheit - 32) * 5 / 9;
    return celcius;
  }

  //Task 2: Make a function here. See the doc comments below.
  public static void printTemperatures(double fahrenheit) {
    System.out.println("F: " + fahrenheit);
    System.out.println("C: " + fahrenheitToCelsius(fahrenheit));
  }
}
