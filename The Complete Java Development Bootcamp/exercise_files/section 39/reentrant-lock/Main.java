import java.util.concurrent.CountDownLatch;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.concurrent.locks.ReentrantLock;

public class Main {
    // static int counter = 0;
    static AtomicInteger counter = new AtomicInteger(0);

    public static void main(String[] args) {

        int nThreads = Runtime.getRuntime().availableProcessors();
        ExecutorService executor = Executors.newFixedThreadPool(nThreads);
        // -> #1. CREATE A LATCH COUNTDOWN OBJECT WITH 4 TASK
        CountDownLatch latch = new CountDownLatch(4);
        // --> #1. CREATE A REENTRANT LOCK OBJECT
        // ReentrantLock lock = new ReentrantLock();
        // -->#3. CREATES THREADS TO OBJECT LOCKED TASK
        // executor.submit(() -> task(lock, latch));
        // executor.submit(() -> task(lock, latch));
        // executor.submit(() -> task(lock, latch));
        // executor.submit(() -> task(lock, latch));
        executor.submit(() -> task(latch));
        executor.submit(() -> task(latch));
        executor.submit(() -> task(latch));
        executor.submit(() -> task(latch));
        try {
            // ->#3.AWAIT ALL TAKS TO DIE BASED ON LATCH COUNTDOWN
            latch.await();
        } catch (InterruptedException e) {
            System.out.println(e.getMessage());
        } finally {
            executor.shutdown();
        }
        System.out.println(counter);
    }

    // --> #2.1 PUSH REENTRANT LOCK INTO THE TASK
    // -> #2.1 PUSH LATCH INTO THE TASK
    // public static void task(ReentrantLock lock, CountDownLatch latch) {
    public static void task(CountDownLatch latch) {
        // some really long operations that need to run in the background...
        for (int i = 0; i < 10000; i++) {
            // --> #2.2 SANDWICH LOCKED PROCESS W/LOCK-UNLOCK
            // lock.lock();
            // counter++;
            // AtomikcInteger class method -> addAndGet() as opposed to integer++
            counter.addAndGet(1);
            // lock.unlock();
        }
        // ->#2.2 LATCH COUNTDOWN -1
        latch.countDown();
    }
}
