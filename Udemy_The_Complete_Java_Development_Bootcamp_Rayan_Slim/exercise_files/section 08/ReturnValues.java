public class ReturnValues {

  public static void main(String[] args) {
    double area = calcArea(2.3, 3.6);

    String englishExplanation = explainArea("English", area);
    String frenchExplanation = explainArea("French", area);
    String spanishExplanation = explainArea("Spanish", area);
    String italianExplanation = explainArea("Italian", area);

    System.out.println(englishExplanation);
    System.out.println(frenchExplanation);
    System.out.println(spanishExplanation);
    System.out.println(italianExplanation);

    printArea(2.3, 3.6, area);
  }

  public static double calcArea(double length, double width) {
    if (length < 0 || width < 0) {
      System.out.println("INVALID DIMENSIONS");
      System.exit(0);
    }

    double area = length * width;
    return area;
  }

  public static String explainArea(String language, double area) {
    switch (language) {
      case "English":
        return "Area equals length * width is: " + area;
      case "French":
        return "La surface est egale a la longueur * la largeur: " + area;
      case "Spanish":
        return "Area es igual a largo * ancho: " + area;
      default:
        return "Language not available.";
    }
  }

  public static void printArea(double width, double length, double area) {
    System.out.println(
      "A rectangle with a length of " +
      width +
      " and a length of " +
      length +
      " has an area of " +
      area
    );
  }
}
