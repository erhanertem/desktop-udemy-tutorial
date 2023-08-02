import java.util.Scanner;

public class Javapedia {

  public static void main(String[] args) {
    Scanner scan = new Scanner(System.in);
    System.out.println("\n**********Javapedia**********");
    System.out.println("How many historical figures will you register?");
    //Task 1 – Ask the user: how many historical figures will you register?
    //       – Store the value.
    int howMany = scan.nextInt();

    //Task 2 – Create a 2D array with a variable number of rows, and 3 values per row.
    String[][] data = new String[howMany][3];

    //Watch out for the nextLine() pitfall.
    scan.nextLine();

    for (int i = 0; i < data.length; i++) {
      System.out.println("\n\tFigure " + (i + 1));

      System.out.print("\t - Name: ");
      data[i][0] = scan.nextLine();

      System.out.print("\t - Date of birth: ");
      data[i][1] = scan.nextLine();

      System.out.print("\t - Occupation: ");
      data[i][2] = scan.nextLine();

      System.out.print("\n");
    }

    System.out.println("These are the values you stored:");

    print2DArray(data);

    System.out.print("\nWho do you want information on? ");
    String request = scan.nextLine();
    for (int i = 0; i < data.length; i++) {
      if (data[i][0].equals(request)) {
        System.out.println("\tName         : " + data[i][0]);
        System.out.println("\tDate of Birth: " + data[i][1]);
        System.out.println("\tOccupation   : " + data[i][2]);
      }
    }
    scan.close();
  }

  public static void print2DArray(String[][] data) {
    for (int i = 0; i < data.length; i++) {
      for (int j = 0; j < data[i].length; j++) {
        System.out.print(data[i][j] + " ");
      }
      System.out.print("\n");
    }
  }
}
