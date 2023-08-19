public class WhileLoopExamples {

  public static void main(String[] args) {
    // Example 1: Roll a dice until a 6 is rolled
    // TODO: Write a while loop that simulates rolling a dice until a 6 is rolled
    System.out.println("**********************");
    int diceRoll = -1;
    while (diceRoll != 6) {
      diceRoll = rollDice();
      System.out.println(diceRoll);
    }
    // Example 2: Generate random numbers between 1 and 100 until a number greater than 90 is generated
    // TODO: Write a while loop that generates random numbers between 1 and 100 until a number greater than 90 is generated
    System.out.println("**********************");
    int randomNumber = -1;
    while (randomNumber <= 90) {
      randomNumber = generateRandomNumber();
      System.out.println(randomNumber);
    }
    // Example 3: Keep doubling a random number until it's greater than 1000
    // TODO: Write a while loop that keeps doubling the 'number' variable until it's greater than 1000
    System.out.println("**********************");
    int number = generateRandomNumber();
    while (number <= 1000) {
      number = number * 2;
      System.out.println(number);
    }
  }

  // Function to simulate rolling a dice (returns a random integer between 1 and 6)
  public static int rollDice() {
    return (int) (Math.random() * 6) + 1;
  }

  // Function to generate a random integer between 1 and 100
  public static int generateRandomNumber() {
    return (int) (Math.random() * 100) + 1;
  }
}
