import java.util.Arrays;

public class Weather {

  public static void main(String[] args) {
    // The instructions for this workbook are on Learn the Part (Workbook 6.11)
    double[] celsius = { 12.5, 14.5, 17.0, 21.0, 23.0, 18.5, 20.0 };
    System.out.println(Arrays.toString(celciusToFahrenheit(celsius)));
  }

  public static double[] celciusToFahrenheit(double[] celcius) {
    double[] fahrenheit = Arrays.copyOf(celcius, celcius.length);
    for (int i = 0; i < fahrenheit.length; i++) {
      fahrenheit[i] = (fahrenheit[i] / 5 * 9) + 32;
    }
    return fahrenheit;
  }
}
