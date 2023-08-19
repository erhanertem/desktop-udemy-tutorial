package model;

public class Car {
  private String make;
  private String model;
  private BodyType bodyType;
  private int productionYear;
  private double price;

  public enum BodyType {
    SEDAN, COUPE, HATCHBACK, SUV, TRUCK, VAN
  };

  public static final int MIN_YEAR = 1900;
  public static final int MIN_PRICE = 0;
  public static final int MAX_PRICE = 200_000;

  public Car(String make, String model, BodyType bodyType, int productionYear, double price) {
    setMake(make);
    setModel(model);
    setBodyType(bodyType);
    setProductionYear(productionYear);
    setPrice(price);
  }

  public String getMake() {
    return this.make;
  }

  public void setMake(String make) {
    if (make == null || make.isBlank()) {
      throw new IllegalArgumentException("The make cannot be null or blank");
    }
    this.make = make;
  }

  public String getModel() {
    return this.model;
  }

  public void setModel(String model) {
    if (model == null || model.isBlank()) {
      throw new IllegalArgumentException("The model cannot be null or blank");
    }
    this.model = model;
  }

  public BodyType getBodyType() {
    return this.bodyType;
  }

  public void setBodyType(BodyType bodyType) {
    if (bodyType == null) {
      throw new IllegalArgumentException("The body type cannot be null");
    }
    this.bodyType = bodyType;
  }

  public int getProductionYear() {
    return this.productionYear;
  }

  public void setProductionYear(int productionYear) {
    if (productionYear < MIN_YEAR) {
      throw new IllegalArgumentException("Can't be below" + MIN_YEAR);
    }
    this.productionYear = productionYear;
  }

  public double getPrice() {
    return this.price;
  }

  public void setPrice(double price) {
    if (price < MIN_PRICE || price > MAX_PRICE) {
      throw new IllegalArgumentException("Price must be within the range of " + MIN_PRICE + " & " + MAX_PRICE);
    }
    this.price = price;
  }

}