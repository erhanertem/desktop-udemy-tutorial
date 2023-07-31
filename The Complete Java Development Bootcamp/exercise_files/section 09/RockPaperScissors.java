import java.util.Scanner;

public class RockPaperScissors {

  public static void main(String[] args) {
    Scanner scan = new Scanner(System.in);

    System.out.println("Let's play Rock Paper Scissors.");
    System.out.println(
      "When I say 'shoot', Choose: rock, paper, or scissors.\n"
    );
    System.out.println("Are you ready? Write 'yes' if you are.");

    //Task 1: See if the user wants to play.
    String response = scan.nextLine();
    if (!response.equals("yes")) {
      System.out.println("Darn, some other time...!    ");
      //Terminate JVM
      System.exit(0);
    } else {
      System.out.println("Great!\nrock - paper - scissors, shoot!");
      String userChoice = scan.nextLine();
      if (
        !userChoice.equals("rock") &&
        !userChoice.equals("paper") &&
        !userChoice.equals("scissors")
      ) {
        System.out.println("Wrong input! Please try again!");
        userChoice = scan.nextLine();
      }
      // get the computer choice (can only be done after task 3)
      String compChoice = computerChoice(0, 2);

      String result = result(userChoice, compChoice);

      printResult(userChoice, compChoice, result);
    }

    scan.close();
  }

  //Task 3  – Write a function where the computer picks a random choice.
  public static String computerChoice(int lowestRange, int highestRange) {
    int pick = (int) Math.floor(
      Math.random() * (highestRange - lowestRange + 1)
    ) +
    lowestRange;

    String choice = null;

    switch (pick) {
      case 0:
        choice = "rock";
        break;
      case 1:
        choice = "paper";
        break;
      case 2:
        choice = "scissors";
        break;
    }
    System.out.println(choice);
    return choice;
  }

  //Task 4  – Write a function that compares the choices and returns the result.
  public static String result(String userChoice, String compChoice) {
    String result = "";

    if (
      (userChoice.equals("rock") && compChoice.equals("scissors")) ||
      (userChoice.equals("paper") && compChoice.equals("rock")) ||
      (userChoice.equals("scissors") && compChoice.equals("paper"))
    ) {
      result = "YOU WIN!";
    } else if (
      (compChoice.equals("rock") && userChoice.equals("scissors")) ||
      (compChoice.equals("paper") && userChoice.equals("rock")) ||
      (compChoice.equals("scissors") && userChoice.equals("paper"))
    ) {
      result = "YOU LOOSE :(";
    } else if (compChoice.equals(userChoice)) {
      result = "IT'S A TIE";
    }

    return result;
  }

  //Task 5  – Write a function that prints your choice, the computer's, and the result.
  public static void printResult(
    String userChoice,
    String compChoice,
    String result
  ) {
    System.out.println("You chose         : " + userChoice);
    System.out.println("The computer chose: " + compChoice);
    System.out.println(result);
  }
}
