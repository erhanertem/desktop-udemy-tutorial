import java.util.Arrays;
import java.util.List;

public class Main {
    public static void main(String[] args) {

        List<Integer> integers = Arrays.asList(25, 19, 23, 45, 38, 23, 59, 12);
        // IF RIGHT BIGGER THAN LEFT TRUE - asc order
        integers.sort((a, b) -> a.compareTo(b));
        // IF LEFT IS BIGGER THAN RIGHT TRUE - desc order
        integers.sort((a, b) -> b.compareTo(a));
        System.out.println(integers.toString());
    }

}

/**************
 * IMPERATIVE APPROACH**************
 * 
 * for (int i = 0; i < integers.size(); i++) {
 * for (int j = i + 1; j < integers.size(); j++) {
 * if (integers.get(i).compareTo(integers.get(j)) > 0) {
 * int temp = integers.get(i);
 * integers.set(i, integers.get(j));
 * integers.set(j, temp);
 * }
 * }
 * }
 */