import java.util.Scanner;

public class Blackjack {

  public static Scanner scan = new Scanner(System.in);

  public static void main(String[] args) {
    System.out.println("\nWelcome to Java Casino!");
    System.out.println("Do you have a knack for Black Jack?");
    System.out.println("We shall see..");
    System.out.println("..Ready? Press anything to begin!");
    //Wait for the user to press enter.
    scan.nextLine();

    //Usert draw cards.
    int randomCard1 = drawRandomCard();
    int randomCard2 = drawRandomCard();
    int userDrawSum = Math.min(randomCard1, 10) + Math.min(randomCard2, 10);
    System.out.println(
      "\n You get a \n" +
      cardString(randomCard1) +
      "\n and a \n" +
      cardString(randomCard2)
    );
    System.out.println("Your total is: " + userDrawSum);

    //Dealer draw cards
    int randomDealerCard1 = drawRandomCard();
    int randomDealerCard2 = drawRandomCard();
    int dealerDrawSum =
      Math.min(randomDealerCard1, 10) + Math.min(randomDealerCard2, 10);
    System.out.println(
      "\n The dealer shows \n" +
      cardString(randomDealerCard1) +
      "\n and a \n" +
      faceDown()
    );

    System.out.println("\nThe dealer's total is hidden" + dealerDrawSum);

    while (true) {
      String options = hitOrStay();

      if (options.equalsIgnoreCase("stay")) {
        break;
      }
      // If the player decides to hit,
      int newCard = drawRandomCard();
      userDrawSum += Math.min(newCard, 10);
      System.out.println("\n You get a \n" + cardString(newCard));
      System.out.println("Your total is: " + userDrawSum);
      //and their hand value exceeds 21, they go bust (lose).
      if (userDrawSum > 21) {
        System.out.println("BUSTED! TOO BAD!");
        System.exit(0);
      }
    }
    // The dealer reveals the hidden card.
    System.out.println("\nDealer's turn");
    System.out.println(
      "\n The dealer's card are \n" +
      cardString(randomDealerCard1) +
      "\n and a \n" +
      cardString(randomDealerCard2)
    );
    while (dealerDrawSum < 17) {
      int draw = Math.min(drawRandomCard(), 10);
      dealerDrawSum += draw;
      System.out.println("\nDealer gets a\n" + cardString(draw));
      System.out.println("Dealer's total is " + dealerDrawSum);
    }
    if (dealerDrawSum > 21) {
      System.out.println(
        "YOU WIN! DEALER GOT BUSTED!\nDEALER: " + dealerDrawSum
      );
      System.exit(0);
    }
    if (dealerDrawSum < userDrawSum) {
      System.out.println(
        "YOU WIN! DEALER'S HAND IS LOWER\nDEALER: " +
        dealerDrawSum +
        "\nPLAYER: " +
        userDrawSum
      );
    } else {
      System.out.println(
        "YOU LOST! DEALER'S HAND IS HIGHER\nDEALER: " +
        dealerDrawSum +
        "\nPLAYER: " +
        userDrawSum
      );
    }
    scan.close();
  }

  //Task 7 – make a function that asks the user to hit or stay.
  public static String hitOrStay() {
    System.out.println("Hit or Stay? (type in 'hit' or 'stay')");
    String options = scan.nextLine();
    while (
      !(options.equalsIgnoreCase("hit") || options.equalsIgnoreCase("stay"))
    ) {
      System.out.println("Please write 'hit' or 'stay'");
      options = scan.nextLine();
    }
    return options;
  }

  // Task 1 – make a function that returns a random number between 1 and 13
  public static int drawRandomCard() {
    return (int) Math.floor(Math.random() * (13 - 1 + 1) + 1);
  }

  // Task 2 – make a function that returns a String drawing of the card.
  public static String cardString(int cardNumber) {
    switch (cardNumber) {
      case 1:
        return (
          "   _____\n" +
          "  |A _  |\n" +
          "  | ( ) |\n" +
          "  |(_'_)|\n" +
          "  |  |  |\n" +
          "  |____V|\n"
        );
      case 2:
        return (
          "   _____\n" +
          "  |2    |\n" +
          "  |  o  |\n" +
          "  |     |\n" +
          "  |  o  |\n" +
          "  |____Z|\n"
        );
      case 3:
        return (
          "   _____\n" +
          "  |3    |\n" +
          "  | o o |\n" +
          "  |     |\n" +
          "  |  o  |\n" +
          "  |____E|\n"
        );
      case 4:
        return (
          "   _____\n" +
          "  |4    |\n" +
          "  | o o |\n" +
          "  |     |\n" +
          "  | o o |\n" +
          "  |____h|\n"
        );
      case 5:
        return (
          "   _____ \n" +
          "  |5    |\n" +
          "  | o o |\n" +
          "  |  o  |\n" +
          "  | o o |\n" +
          "  |____S|\n"
        );
      case 6:
        return (
          "   _____ \n" +
          "  |6    |\n" +
          "  | o o |\n" +
          "  | o o |\n" +
          "  | o o |\n" +
          "  |____6|\n"
        );
      case 7:
        return (
          "   _____ \n" +
          "  |7    |\n" +
          "  | o o |\n" +
          "  |o o o|\n" +
          "  | o o |\n" +
          "  |____7|\n"
        );
      case 8:
        return (
          "   _____ \n" +
          "  |8    |\n" +
          "  |o o o|\n" +
          "  | o o |\n" +
          "  |o o o|\n" +
          "  |____8|\n"
        );
      case 9:
        return (
          "   _____ \n" +
          "  |9    |\n" +
          "  |o o o|\n" +
          "  |o o o|\n" +
          "  |o o o|\n" +
          "  |____9|\n"
        );
      case 10:
        return (
          "   _____ \n" +
          "  |10  o|\n" +
          "  |o o o|\n" +
          "  |o o o|\n" +
          "  |o o o|\n" +
          "  |___10|\n"
        );
      case 11:
        return (
          "   _____\n" +
          "  |J  ww|\n" +
          "  | o {)|\n" +
          "  |o o% |\n" +
          "  | | % |\n" +
          "  |__%%[|\n"
        );
      case 12:
        return (
          "   _____\n" +
          "  |Q  ww|\n" +
          "  | o {(|\n" +
          "  |o o%%|\n" +
          "  | |%%%|\n" +
          "  |_%%%O|\n"
        );
      case 13:
        return (
          "   _____\n" +
          "  |K  WW|\n" +
          "  | o {)|\n" +
          "  |o o%%|\n" +
          "  | |%%%|\n" +
          "  |_%%%>|\n"
        );
      default:
        return "not possible";
    }
  }

  public static String faceDown() {
    return (
      "   _____\n" +
      "  |     |\n" +
      "  |  J  |\n" +
      "  | JJJ |\n" +
      "  |  J  |\n" +
      "  |_____|\n"
    );
  }
}
