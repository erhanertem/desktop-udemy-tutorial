// import java.util.Arrays;

public class Dealership {
  private Car[] cars;

  public Dealership(Car[] cars) {
    // this.cars = cars; //->Reference trap! Because cars is an array.
    // this.cars = Arrays.copyOf(cars, cars.length); // ->Reference trap! - brand new array but copy
    // of the array but the same object references inside the array...
    this.cars = new Car[cars.length];
    for (int i = 0; i < this.cars.length; i++) {
      this.cars[i] = new Car(cars[i]);
    } // ->No reference trap! Deep copy each object inside the array
  }

  public Car getCar(int index) {
    // return this.cars[index];
    Car copy = new Car(this.cars[index]);
    return copy;
  }

  public void setCar(int index, Car newCar) {
    // this.cars[index] = newCar;
    Car copy = new Car(newCar);
    this.cars[index] = copy;
  }

  public void sell(int index) {
    this.cars[index].drive(); // ACCESS TO DRIVE FUNCTION INSIDE THE CAR OBJECT
  }

  public String toString() {
    String temp = "";
    for (int i = 0; i < this.cars.length; i++) {
      temp += "Parking Spot: " + i + "\n";
      String carDescription = this.cars[i].toString();
      temp += carDescription + "\n";
    }
    return temp;
  }
}
