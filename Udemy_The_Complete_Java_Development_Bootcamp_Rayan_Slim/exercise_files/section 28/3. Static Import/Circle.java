
// import static java.lang.Math.PI; //INDIVIDUAL IMPORT
// import static java.lang.Math.max; //INDIVIDUAL IMPORT
import static java.lang.Math.*; //IMPORT ALL AT ONCE

public class Circle {

    public double getCircumference() {
        // return 2 * Math.PI * radius;
        return 2 * PI * radius;
    }

    public double getLargerRadius(double otherRadius) {
        // return Math.max(radius, otherRadius);
        return max(radius, otherRadius);
    }

    private double radius;

    public Circle(double radius) {
        this.radius = radius;
    }

    public double getArea() {
        return PI * radius * radius;
    }

    public double getSmallerRadius(double otherRadius) {
        return min(radius, otherRadius);
    }

    public double getRadiusSquared() {
        return pow(radius, 2);
    }

    public double getRadiusSquareRoot() {
        return sqrt(radius);
    }

}