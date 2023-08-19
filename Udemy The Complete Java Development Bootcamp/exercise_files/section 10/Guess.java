import java.util.Scanner;

public class Guess {

  public static void main(String[] args) {
    System.out.print("I chose a number between 1 and 5. Try to guess it: ");

    Scanner scan = new Scanner(System.in);

    //See Learn the Part for detailed instructions.
    int secretNumber = 2;
    int userPick = scan.nextInt();
    while (userPick != secretNumber) {
      if (!(userPick <= 5 && userPick >= 1)) {
        System.out.println("INVALID INPUT");
        System.exit(0);
      } else {
        System.out.print("Guess again: ");
        userPick = scan.nextInt();
      }
    }
    System.out.println("You Win!");

    scan.close();
  }
}
