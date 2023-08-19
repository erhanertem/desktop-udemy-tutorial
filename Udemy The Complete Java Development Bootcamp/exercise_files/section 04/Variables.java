public class Variables {
  public static void main(String[] args) {
    int passengers = 5;
    System.out.println(passengers + " passengers");
    
    int busTickets = passengers;
    System.out.println(busTickets + " tickets");
    
    int maxValue = 2147483647;
    long longValue = 2147483649L;
    // System.out.print(maxValue + " "+ longValue);
    System.out.println(maxValue+" "+longValue);
    // System.out.printf("%d %d", maxValue, longValue);
    
    passengers = 3;
    System.out.println(passengers + " passengers");
    
  }
}