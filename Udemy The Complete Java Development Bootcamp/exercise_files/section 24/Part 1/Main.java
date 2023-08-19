public class Main {
    public static void main(String[] args) {
        Magazine magazine1 = new Magazine("Magazine 1", "Publisher 1", 1, 2020);
        System.out.println(magazine1.getTitle());

        // Uncomment the following line to test invalid input for setTitle method
        // magazine1.setTitle("");
        magazine1.setTitle("QWWQQW");

        // Uncomment the following line to test invalid input for setPublisher method
        // magazine1.setPublisher("");
        magazine1.setPublisher("WEEWWEE");

        // Uncomment the following line to test invalid input for setIssueNumber method
        // magazine1.setIssueNumber(-1);
        magazine1.setIssueNumber(1);

        // Uncomment the following line to test invalid input for setPublicationYear
        // method
        // magazine1.setPublicationYear(0);
        magazine1.setPublicationYear(2020);

        // Uncomment the following line to test invalid input for the constructor
        // Magazine magazine2 = new Magazine("", "Publisher 2", 2, 2020);
        Magazine magazine2 = new Magazine("EREE", "Publisher 2", 2, 2020);
    }
}