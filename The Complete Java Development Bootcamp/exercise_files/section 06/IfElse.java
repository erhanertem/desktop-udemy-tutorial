public class IfElse {

  public static void main(String[] args) {
    int chemistryGrade = 95;
    int biologyGrade = 75;
    System.out.println("Me: Hi Java, did I score better in biology?");
    // Add if-else statement here
    if (biologyGrade > chemistryGrade) {
      System.out.println("Yes, you did");
    } else {
      System.out.println("No, you did not.");
    }

    double sales = 37.55;
    double costs = 5.55;
    System.out.println("Me: Hi Java, did we make money?");
    // Add if-else statement here
    if (sales > costs) {
      System.out.println("Yes we made some money");
    } else {
      System.out.println("Nah, we didn't make money");
    }

    double temperature = 15.5;
    double targetTemperature = 20.0;
    System.out.println(
      "Me: Hi Java, is the temperature colder than our target?"
    );
    // Add if-else statement here
    if (temperature < targetTemperature) {
      System.out.println("Temps are cooler");
    } else {
      System.out.println("Temps are higher");
    }

    int currentSpeed = 60;
    int speedLimit = 70;
    System.out.println(
      "Me: Hi Java, am I driving slower than the speed limit?"
    );
    // Add if-else statement here
    if (currentSpeed < speedLimit) {
      System.out.println("You are safe driving");
    } else {
      System.out.println("Lower your speed to comply with the speed limit");
    }

    int age = 45;
    int retirementAge = 65;
    System.out.println("Me: Hi Java, am I old enough to retire?");
    // Add if-else statement here
    if (age >= retirementAge) {
      System.out.println("Go ahead and get retired");
    } else {
      System.out.println("Man you got  to work more to retire");
    }

    char myGrade = 'A';
    char bestGrade = 'A';
    System.out.println("Me: Hi Java, did I get the best possible grade?");
    // Add if-else statement here
    if (myGrade == bestGrade) {
      System.out.println("Yes you got it");
    } else {
      System.out.println("Got to work hard to get it");
    }

    String word = "hello";
    String secondWord = "hello";
    System.out.println("Me: Are the two words the same?");
    // Add if-else statement here
    if (word.equals(secondWord)) {
      System.out.println("Yes they are identical");
    } else {
      System.out.println("No, they are not.");
    }

    String thirdWord = "hello";
    String fourthWord = "goodbye";
    System.out.println("Me: Are the two words different");
    // Add if-else statement here
    if (!thirdWord.equals(fourthWord)) {
      System.out.println("Yes they are different");
    } else {
      System.out.println("No, they are same.");
    }
  }
}
