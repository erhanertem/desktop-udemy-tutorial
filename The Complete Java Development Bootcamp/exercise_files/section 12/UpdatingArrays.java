import java.util.Arrays;

public class UpdatingArrays {

  public static void main(String[] args) {
    String[] flavours = { "Sweet", "Sour", "Bitter" };
    System.out.println(flavours[2]);
    flavours[2] = "Salty";
    System.out.println(flavours[2]);

    String[] menu = { "Espresso", "Iced Coffee", "Macchiato" };
    menu[2] = "Latte";
    System.out.println(Arrays.toString(menu));

    String[] largerMenu = new String[5];
    for (int i = 0; i < menu.length; i++) {
      System.out.println(i + ". " + menu[i]);
      largerMenu[i] = menu[i];
    }
    largerMenu[3] = "House Blend";
    largerMenu[4] = "Dark Roast";
    System.out.println(Arrays.toString(largerMenu));
  }
}
