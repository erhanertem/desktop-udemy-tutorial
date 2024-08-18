public class Main_old_1 {
    public static void main(String[] args) {
        Car[] cars = new Car[] {
                new Car("Nissan", 5000, 2020, "red",
                        new String[] {"tires", "keys"}),
                new Car("Dodge", 8500, 2019, "blue",
                        new String[] {"tires", "keys"}),
                new Car("Nissan", 5000, 2017, "yellow",
                        new String[] {"tires", "filter"}),
                new Car("Honda", 7000, 2019, "orange",
                        new String[] {"tires", "filter"}),
                new Car("Mercedes", 12000, 2015, "jet black",
                        new String[] {"tires", "filter", "transmission"})
        };

        Dealership dealership = new Dealership(cars);

        // Get a deep copy of the car at index 0
        Car carAtIndex0 = dealership.getCar(0);
        System.out.println("Original car make: " + carAtIndex0.getMake());

        // Modify the car's make
        carAtIndex0.setMake("Toyota");
        System.out.println("Modified car make: " + carAtIndex0.getMake());

        // Verify that the car in the dealership is not affected
        System.out.println("Dealership car make: " + dealership.getCar(0).getMake());

        // Create a new Car object
        Car newCar = new Car("BMW", 10000, 2018, "silver",
                new String[] {"tires", "filter", "transmission"});

        // Set the car at index 1 in the dealership to a deep copy of the newCar
        dealership.setCar(1, newCar);

        // Verify that the car at index 1 in the dealership has been updated
        System.out.println("Dealership car make at index 1: "
                + dealership.getCar(1).getMake());

        // Modify the newCar object
        newCar.setMake("Audi");

        // Verify that the car in the dealership is not affected
        System.out.println("Dealership car make at index 1 after modifying newCar: "
                + dealership.getCar(1).getMake());
    }
}
