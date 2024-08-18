public class Exams {

  public static void main(String[] args) {
    // Instructions for this workbook are on Learn the Part (Workbook 6.1).
    String[] seats = { "Harry", "Neville", "Ron", "Hermonie", "Seamus" };

    System.out.println(
      "It's time to take your 5th year exams. Please, take your seats.\n"
    );

    // System.out.println(seats[0] + ", you will take seat " + 0);
    // System.out.println(seats[1] + ", you will take seat " + 1);
    // System.out.println(seats[2] + ", you will take seat " + 2);
    // System.out.println(seats[3] + ", you will take seat " + 3);
    // System.out.println(seats[4] + ", you will take seat " + 4);
    // Compare your result to what's on Learn the Part.
    for (int i = 0; i < seats.length; i++) {
      System.out.println(seats[i] + ", you will take seat " + i);
    }
  }
}
