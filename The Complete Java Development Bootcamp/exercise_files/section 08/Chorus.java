public class Chorus {

  public static void main(String[] args) {
    // Chorus needs to be sung 5 times
    singChorus();
    singChorus();
    singChorus();
    singChorus();
    singChorus();
  }

  public static void singChorus() {
    //public defines the type of access
    //static is required if the function to be called inside a static defined function
    //void defines that the function will return nothing
    System.out.println("Don't blame it on the sunshine");
    System.out.println("Don't blame it on the moonlight");
    System.out.println("Don't blame it on good times");
    System.out.println("Don't blame it on the boogie\n");
  }
}
