import java.util.ArrayList;

public class MagazineLibrary {
  private ArrayList<Magazine> magazines;

  public MagazineLibrary() {
    this.magazines = new ArrayList<>();
  }

  public Magazine getMagazine(int index) {
    return new Magazine(this.magazines.get(index));
  }

  public void setMagazine(int index, Magazine newMagazine) {
    this.magazines.set(index, new Magazine(newMagazine));
  }

  public void addMagazine(Magazine newMagazine) {
    this.magazines.add(new Magazine(newMagazine));
  }
}
