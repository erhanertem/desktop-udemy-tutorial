public class Main {
    public static void main(String[] args) {
        City city1 = new City("New York", "USA", 8500000);
        System.out.println(city1.getName());

        // Uncomment the following line to test invalid input for setName method
        // city1.setName("");
        city1.setName("Toronto");

        // Uncomment the following line to test invalid input for setCountry method
        // city1.setCountry("");
        city1.setCountry("Canada");

        // Uncomment the following line to test invalid input for setPopulation method
        // city1.setPopulation(-1);
        city1.setPopulation(10000);

        // Uncomment the following line to test invalid input for the constructor
        // City city2 = new City("", "USA", 8500000);
        City city2 = new City("Minnesota", "USA", 8500000);
    }
}