import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {

        City paris = new City("Paris", 2161000);
        City paris2 = paris;
        System.out.println(paris.equals(paris2));
        City paris3 = new City(paris);
        System.out.println(paris.equals(paris3));

        ArrayList<City> cities = new ArrayList<>();
        cities.add(new City("Paris", 2161000));
        cities.add(new City("Florence", 382258));
        cities.add(new City("Venice", 261905));
        cities.add(new City("Versailles", 85771));
        cities.add(new City("London", 8982000));

        System.out.println(cities.contains(paris));
    }

}