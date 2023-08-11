public class Main {
    public static void main(String[] args) {

        // **************** Immutable Object ****************
        Integer applesWrapper = 5;

        Integer applesWrapper2 = applesWrapper; // SAFE
        applesWrapper2 = 10;

        System.out.println(applesWrapper);
        System.out.println(applesWrapper2);

        String text = "hi";
        text = "Hello";
        System.out.println(text);

        String text2 = text;
        System.out.println(text2);
        text2 = "Merry";
        System.out.println(text);
        System.out.println(text2);
        // **************** Mutable Object ****************

        City city = new City("Paris", 2161000);
        // City secondCity = city; // DANGEROUS
        City secondCity = new City(city); // SAFE thru using copy constructor

        city.setPopulation(2261000);
        secondCity.setPopulation(2263400);
        city.setPopulation(2163400);
        secondCity.setPopulation(2443400);

    }
}