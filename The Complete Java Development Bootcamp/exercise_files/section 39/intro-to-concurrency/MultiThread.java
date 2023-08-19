public class MultiThread {


    // -> #2 CREATE A BASE CLASS THAT IMPLEMENTS RUNNABLE INTERFACE THAT PROVIDES THE ABSTRACT RUN
    // METHOD FOR OVERRIDE
    static class LongTask implements Runnable {
        @Override
        public void run() {
            longTask(); // PROVIDE THE METHOD
        }
    }

    /*
     * NOTE: MESSY WAY OF CREATING A THREAD WITH A PLACEHOLDER INTERMDIARY CLASS IMPLEMENTING
     * RUNNBALE
     */
    // public static void main(String[] args) {
    // // -> #3 CREATE TASK runnable FROM THE BASE CLASS
    // LongTask runnable = new LongTask();
    // // -> #1 CREATE A NEW THREAD THAT WOULD RUN THE TASK - runnable
    // Thread thread2 = new Thread(runnable);
    // // -> #4 START THE THREAD PROCESS
    // thread2.start();
    // System.out.println("Doing other work on main thread");
    // }

    // /*
    // * NOTE: FOR MULTI LINE TASKS WITHOUT A PLACEHOLDER CLASS FOR IMPLEMENTING RUNNABLE
    // */
    // public static void main(String[] args) {

    // // -> #2 DEFINE runnable TASK BY CREATING A COPY OF RUNNBALE INTERFACE CLASS DIRECTLY WHILE
    // // DEFINING ITS ABSTRACT RUN METHOD.
    // Runnable runnable = new Runnable() {
    // @Override
    // public void run() {
    // longTask();
    // }
    // };
    // // -> #1 CREATE A NEW THREAD THAT WOULD RUN THE TASK - runnable
    // Thread thread2 = new Thread(runnable);
    // // -> #3 START THE THREAD PROCESS
    // thread2.start();

    // System.out.println("Doing other work on main thread");

    // }

    /*
     * NOTE: FOR SINGLE LINE TASKS WITHOUT A PLACEHOLDER CLASS FOR IMPLEMENTING RUNNABLE
     */
    public static void main(String[] args) {

        // -> #1 CREATE A NEW THREAD THAT WOULD RUN THE TASK - runnable
        Thread thread2 = new Thread(() -> longTask());
        System.out.println(thread2.getState()); // -->RETURNS NEW
        // -> #2 START THE THREAD PROCESS
        thread2.start();
        System.out.println(thread2.getState()); // -->RETURNS RUNNABLE

        // System.out.println("OH NO, A BIG ERROR OCCURED. LET'S INTERRUPT THE BACKGROUDN THREAD");
        // thread2.interrupt();
        System.out.println(thread2.isInterrupted()); // -->RETURNS TRUE

        System.out.println("Doing other work on main thread");
        System.out.println(thread2.getState());

    }

    public static void longTask() {
        try {
            Thread.sleep(3000);
            System.out.println("Slept 3 secs.");
        } catch (InterruptedException e) {
            System.out.println("OPPS!! Somwthing went wrong. Done Sleeping");
        }
        // long t = System.currentTimeMillis();
        // long end = t + 3000;

        // while (true) {
        // if (System.currentTimeMillis() == end) {
        // System.out.println("Finished long task");
        // break;
        // } else if (Thread.currentThread().isInterrupted()) {
        // System.out.println("This task has been interrupted prematurely");
        // break;
        // }
        // }
    }

}
