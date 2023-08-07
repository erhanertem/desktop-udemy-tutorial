import java.util.Arrays;
import java.util.Scanner;

public class Hangman {

  public static String[] words = {
    "ant",
    "baboon",
    "badger",
    "bat",
    "bear",
    "beaver",
    "camel",
    "cat",
    "clam",
    "cobra",
    "cougar",
    "coyote",
    "crow",
    "deer",
    "dog",
    "donkey",
    "duck",
    "eagle",
    "ferret",
    "fox",
    "frog",
    "goat",
    "goose",
    "hawk",
    "lion",
    "lizard",
    "llama",
    "mole",
    "monkey",
    "moose",
    "mouse",
    "mule",
    "newt",
    "otter",
    "owl",
    "panda",
    "parrot",
    "pigeon",
    "python",
    "rabbit",
    "ram",
    "rat",
    "raven",
    "rhino",
    "salmon",
    "seal",
    "shark",
    "sheep",
    "skunk",
    "sloth",
    "snake",
    "spider",
    "stork",
    "swan",
    "tiger",
    "toad",
    "trout",
    "turkey",
    "turtle",
    "weasel",
    "whale",
    "wolf",
    "wombat",
    "zebra",
  };

  public static String[] gallows = {
    "+---+\n" +
    "|   |\n" +
    "    |\n" +
    "    |\n" +
    "    |\n" +
    "    |\n" +
    "=========\n",
    "+---+\n" +
    "|   |\n" +
    "O   |\n" +
    "    |\n" +
    "    |\n" +
    "    |\n" +
    "=========\n",
    "+---+\n" +
    "|   |\n" +
    "O   |\n" +
    "|   |\n" +
    "    |\n" +
    "    |\n" +
    "=========\n",
    " +---+\n" +
    " |   |\n" +
    " O   |\n" +
    "/|   |\n" +
    "     |\n" +
    "     |\n" +
    " =========\n",
    " +---+\n" +
    " |   |\n" +
    " O   |\n" +
    "/|\\  |\n" + //if you were wondering, the only way to print '\' is with a trailing escape character, which also happens to be '\'
    "     |\n" +
    "     |\n" +
    " =========\n",
    " +---+\n" +
    " |   |\n" +
    " O   |\n" +
    "/|\\  |\n" +
    "/    |\n" +
    "     |\n" +
    " =========\n",
    " +---+\n" +
    " |   |\n" +
    " O   |\n" +
    "/|\\  |\n" +
    "/ \\  |\n" +
    "     |\n" +
    " =========\n",
  };

  static Scanner scan = new Scanner(System.in);

  // Initial gallowProgress
  static int gallowProgress = 0;
  //Initial missedGuessList
  static char[] missedGuessList = {};
  //Initial guessList
  static char[] guessList = {};
  // Initial Guess
  static char guess = '\0';

  public static void main(String[] args) {
    // Pick a random word
    int randomPick = (int) Math.floor(
      Math.random() * ((words.length - 1) - 0 + 1) + 0
    );
    // Initial secretWord char array
    // String secretWord = words[randomPick];
    String secretWord = words[0];
    // Method#1
    // char[] secretWordArray = new char[secretWord.length()];
    // for (int i = 0; i < secretWordArray.length; i++) {
    //   secretWordArray[i] = secretWord.charAt(i);
    // }
    // Method#2
    char[] secretWordArray = secretWord.toCharArray();
    char[] secretWordProgress = new char[secretWord.length()];
    Arrays.fill(secretWordProgress, '_');

    //Play  hand
    while (missedGuessList.length < 6) {
      // Render previous guess after 1st round
      if (guess != '\0') renderPreviousGuess();
      // Render gallow progress
      renderGallow(gallowProgress);
      //Render SecretWord in progress
      renderSecretWordProgress(secretWordProgress);
      //Render missedGuess list
      renderMissedGuessList();
      // Ask for user guess
      guess(scan, guessList);
      // Record the guess
      guessList = addToList(guessList);
      // checkGuess

      if (!contains(guess, secretWordArray)) {
        gallowProgress++;
        // Render missedGuesses in progress
        missedGuessList = addToList(missedGuessList);
      } else {
        updateSecretWordProgress(secretWordArray, secretWordProgress);
      }

      String str1 = String.valueOf(secretWordArray);
      String str2 = String.valueOf(secretWordProgress);

      if (str1.equals(str2)) {
        System.out.println("CONGRATS! YOU WIN...");
        System.exit(0);
      }
    }

    renderGallow(gallowProgress);
    System.out.println("RIP!");
    System.out.println("The word was: '" + secretWord + "'");
  }

  public static void renderPreviousGuess() {
    System.out.println("\n\nGuess : " + guess + "\n");
  }

  public static void guess(Scanner scan, char[] list) {
    System.out.print("\nGuess : ");
    //Ask for guess input
    guess = scan.next().charAt(0);
    guess = Character.toLowerCase(guess);

    //Check If guess is already said - YES ask again else proceed
    while (contains(guess, list)) {
      System.out.println("You typed already, try another!");
      guess = scan.next().charAt(0);
      guess = Character.toLowerCase(guess);
    }
  }

  public static boolean contains(char c, char[] array) {
    for (char x : array) {
      if (x == c) {
        return true;
      }
    }
    return false;
  }

  public static char[] addToList(char[] list) {
    char[] temp = Arrays.copyOf(list, list.length + 1);
    temp[temp.length - 1] = guess;
    return temp;
  }

  public static void renderGallow(int gallowProgress) {
    System.out.println(gallows[gallowProgress]);
  }

  public static void renderMissedGuessList() {
    System.out.print("\nMisses: ");
    System.out.print("(" + missedGuessList.length + ")");
    for (int i = 0; i < missedGuessList.length; i++) {
      System.out.print(missedGuessList[i]);
    }
  }

  public static void renderSecretWordProgress(char[] secretWordProgress) {
    String str = String.copyValueOf(secretWordProgress);
    System.out.print("\nWord  : " + str);
  }

  public static void updateSecretWordProgress(
    char[] secretWordArray,
    char[] secretWordProgress
  ) {
    for (int i = 0; i < secretWordArray.length; i++) {
      if (secretWordArray[i] == guess) {
        secretWordProgress[i] = guess;
      }
    }
  }
}
