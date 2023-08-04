import java.util.Scanner;

public class SignIn {

  public static void main(String[] args) {
    String username = "Samantha";
    String password = "Java <3";
    String entryUsername = "";
    String entryPassword = "";

    /* Task 1 
            1. Pick up a username and password from the user.
           */
    Scanner scan = new Scanner(System.in);
    System.out.print("- Username: ");
    entryUsername = scan.nextLine();
    System.out.print("- Password: ");
    entryPassword = scan.nextLine();

    System.out.println("\nWelcome to Javagram! Sign in below\n");
    while (!entryUsername.equals(username) || !entryPassword.equals(password)) {
      System.out.println("\nIncorrect, please try again!\n");
      System.out.print("- Username: ");
      entryUsername = scan.nextLine();
      System.out.print("- Password: ");
      entryPassword = scan.nextLine();
    }
    System.out.println("\nLogged in....\n");
    scan.close();
  }
}
