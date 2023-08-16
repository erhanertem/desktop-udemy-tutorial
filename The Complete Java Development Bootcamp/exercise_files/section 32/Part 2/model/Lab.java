package model;

import java.util.ArrayList;

public class Lab {
  private ArrayList<LabEquipment> labEquipments;

  public Lab() {
    this.labEquipments = new ArrayList<>();
  }

  public LabEquipment getLabEquipment(int index) {
    /*
     * ABSTRACT CLASSES CANT BE INSTANTIATED THRU COPY CLASS, WE HAVE TO PASS THE INSTANTIATION
     * CAPABILITY TO CHILD CLASSES VIA ABSTRACT CLONE METHOD
     */

    // return new LabEquipment(this.labEquipments.get(index));
    return (this.labEquipments.get(index)).clone();
  }

  public void setLabEquipment(int index, LabEquipment labEquipment) {
    this.labEquipments.set(index, labEquipment.clone());
  }

  public void addLabEquipment(LabEquipment labEquipment) {
    this.labEquipments.add(labEquipment.clone());
  }

}
