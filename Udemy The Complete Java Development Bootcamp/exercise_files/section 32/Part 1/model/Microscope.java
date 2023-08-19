package model;

public class Microscope extends LabEquipment {

  private int magnification;

  public static final int MIN_SPEC = 1;

  public Microscope(String manufacturer, String model, int year, int magnification) {
    super(manufacturer, model, year);
    this.magnification = magnification;
  }

  public int getMagnification() {
    return this.magnification;
  }

  public void setMagnification(int magnification) {
    if (magnification < MIN_SPEC) {
      throw new IllegalArgumentException("Magnification must suffice MIN_SPEC");
    }
    this.magnification = magnification;
  }

  @Override
  public String performMaintenance() {
    return "Microscope maintenance: Clean the lenses and check the light source.";
  }
}
