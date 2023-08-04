import java.util.Scanner;

public class Detention {

  public static void main(String[] args) {
    Scanner scan = new Scanner(System.in);

    System.out.println(
      "Hi Bart. I can write lines for you.\nWhat do you want me to write?"
    );
    // See Learn the Part for the instructions.
    String statement = scan.nextLine();

    for (int i = 0; i < 99; i++) {
      // System.out.println(statement);
      System.out.print(statement);
    }

    scan.close();
  }
}
