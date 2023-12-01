import java.util.List;
import java.util.Queue;

public class WorkerThread extends Thread {

    private final Integer identifier;
    private final Queue<Runnable> tasks;

    public WorkerThread(Integer identifier, Queue<Runnable> tasks) {
        this.identifier = identifier;
        this.tasks = tasks;
    }

    @Override
    public void run() {
        Runnable task;
        while(true) {
            synchronized (tasks) {
                while (tasks.isEmpty()) {
                    try {
                        tasks.wait();
                    } catch (InterruptedException e) {
                        Thread.currentThread().interrupt();
                        System.out.println("Thread Interrompida");
                    }
                }
                task = tasks.poll();
            }
            task.run();
        }
    }

}
