public class Grocer {

  public static void main(String[] args) {
    String[] aisles = {
      "apples",
      "bananas",
      "candy",
      "chocolate",
      "coffee",
      "tea",
    };
    // Instructions for this workbook are on Learn the Part (Workbook 6.3).

    System.out.println("\nDo you sell coffee?");
    for (int i = 0; i < aisles.length; i++) {
      if (aisles[i] == "coffee") {
        System.out.println("\nWe have that in aisle: " + i);
        break;
      }
    }
  }
}
