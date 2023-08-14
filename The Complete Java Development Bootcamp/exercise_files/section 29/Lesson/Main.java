import model.Car;
import static model.Car.TrafficLight.*;

public class Main {

    public static void main(String[] args) {
        Car car = new Car("Nissan", 2020);
        // car.drive("RED");
        // car.drive(Car.TrafficLight.RED);
        car.drive(RED);
    }

}
