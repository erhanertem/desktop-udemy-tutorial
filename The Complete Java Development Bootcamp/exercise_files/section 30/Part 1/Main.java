import model.Car;
// import model.Car.BodyType;
import static model.Car.BodyType.*;
import static model.Car.*;

public class Main {
    public static void main(String[] args) {
        // Car car1 = new Car("Toyota", "Camry", BodyType.SEDAN, 2020, 30000);
        Car car1 = new Car("Toyota", "Camry", SEDAN, 2020, 30000);
        System.out.println(car1.getMake());

        car1.setMake("Nissan");

        car1.setModel("Altima");

        car1.setBodyType(SUV);

        car1.setProductionYear(MIN_YEAR + 5);

        car1.setPrice(5000);

        car1.setPrice(20001);

        Car car2 = new Car("Toyota", "Camry", BodyType.SEDAN, 2020, 30000);
    }
}