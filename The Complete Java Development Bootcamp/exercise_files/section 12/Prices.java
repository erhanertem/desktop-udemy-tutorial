import java.util.Arrays;

public class Prices {

  public static void main(String[] args) {
    // The instructions for this workbook are on Learn the Part (workbook 6.13)
    double[][] prices = new double[3][5];
    prices[0][0] = 12.99;
    prices[0][1] = 8.99;
    prices[0][2] = 9.99;
    prices[0][3] = 10.49;
    prices[0][4] = 11.99;

    prices[1][0] = 12.99;
    prices[1][1] = 8.99;
    prices[1][2] = 9.99;
    prices[1][3] = 10.49;
    prices[1][4] = 11.99;

    prices[2][0] = 12.99;
    prices[2][1] = 8.99;
    prices[2][2] = 9.99;
    prices[2][3] = 10.49;
    prices[2][4] = 11.99;

    System.out.println(Arrays.toString(prices[0]));
    System.out.println(Arrays.toString(prices[1]));
    System.out.println(Arrays.toString(prices[2]));

    System.out.println("Baking: " + prices[0][0] + " " + prices[0][1]);

    double[][] prices2 = {
      { 12.99, 8.99, 9.99, 10.49, 11.99 },
      { 0.99, 1.99, 2.49, 1.49, 2.99 },
      { 8.99, 7.99, 9.49, 9.99, 10.99 },
    };
    for (int i = 0; i < prices2.length; i++) {
      switch (i) {
        case 0:
          System.out.print("Baking: ");
          break;
        case 1:
          System.out.print("Beverage: ");
          break;
        case 2:
          System.out.print("Cereals: ");
          break;
      }
      for (int j = 0; j < prices2[i].length; j++) {
        System.out.print(prices[i][j] + " ");
      }
      System.out.print("\n");
    }
  }
}
