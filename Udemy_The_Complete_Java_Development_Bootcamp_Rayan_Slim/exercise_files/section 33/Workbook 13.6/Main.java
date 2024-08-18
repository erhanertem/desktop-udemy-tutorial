import java.util.Arrays;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Alice", "Bob", "Charlie", "Dave");

        System.out.println("\n**************************************");
        names.stream().map(name -> "Hello, " + name + "!")
                .forEach(name -> System.out.println(name));


        System.out.println("\n**************************************");

        List<String> usernames = Arrays.asList("sparklingunicorn", "galactic_goddess", "neon_ninja",
                "purplepixiedust");

        String username = usernames.stream().filter(name -> name.equals("neon_ninja")).findFirst()
                .orElse(null);

        System.out.println("Found you: " + username);

        System.out.println("\n**************************************");
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6);

        long numEven = numbers.stream().filter(each -> each % 2 == 0).count();

        System.out.println("There are " + numEven + " even numbers in this list");

    }

}


