public class WeatherNetwork {

  public static void main(String[] args) {
    //See Learn the Part for the complete instructions (link in resources folder of Udemy video).

    int temp = -11;

    String forecast = "";

    //IF - ELSE IF - ELSE STATEMENTS HERE!
    if (temp <= -1) forecast = "The forecast is FREEZING! Stay home!"; else if (
      temp <= 10
    ) forecast = "The forecast is Chilly. Wear a coat!"; else forecast =
      "It's warm. Go outside!";
    System.out.println(forecast);
  }
}
