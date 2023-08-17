import java.math.BigDecimal;

public class Decimals {
    public static void main(String[] args) {

        // double x = 0.1;
        BigDecimal x = new BigDecimal("0.1");

        System.out.println(x);

        // double y = 0.2;
        // double z = x + y;

        BigDecimal y = new BigDecimal("0.1");

        System.out.println(x.add(y));
        System.out.println(x.subtract(y));

    }

}
