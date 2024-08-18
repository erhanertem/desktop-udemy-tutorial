import java.util.Arrays;

public class ReferenceTrap {

  public static void main(String[] args) {
    int[] numbers = { 1, 2, 3 };
    int[] numbers2 = numbers;
    System.out.println(Arrays.toString(numbers2));
    numbers2[1] = 5;
    System.out.println(Arrays.toString(numbers));

    // ********************************
    String[] staffLastYear = { "Tommy", "Johnny", "Ellie" };
    // // ********************************FOR LOOP SOLUTION
    // String[] staffThisYear = new String[3];
    // for (int i = 0; i < staffLastYear.length; i++) {
    //   staffThisYear[i] = staffLastYear[i];
    // }
    // ********************************COPY OF SOLUTION
    String[] staffThisYear = Arrays.copyOf(staffLastYear, staffLastYear.length);

    staffThisYear[1] = "Abby";
    System.out.println(Arrays.toString(staffLastYear));
    System.out.println(Arrays.toString(staffThisYear));
  }
}
