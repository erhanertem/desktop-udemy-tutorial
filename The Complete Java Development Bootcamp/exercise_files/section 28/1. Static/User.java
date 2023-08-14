public class User {

    private String firstName; // INSTANCE FIELD
    private String lastName; // INSTANCE FIELD

    private static int userCount = 0; // STATIC FIELD

    public static int getUserCount() {
        return userCount;
    }

    public User(String firstName, String lastName) {
        userCount++; // STATIC FIELD BEST SPOT ARE THE CONSTRUCTORS
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public String getFirstName() {
        return this.firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return this.lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

}