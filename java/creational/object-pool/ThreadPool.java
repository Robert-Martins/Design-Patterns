import java.util.*;
import java.util.stream.IntStream;

public class ThreadPool {

    private static final Integer RANGE_INIT = 0;

    private final List<WorkerThread> threads = new ArrayList<>();
    private final Queue<Runnable> tasks = new LinkedList<>();

    public ThreadPool(Integer poolSize) {
        IntStream.range(RANGE_INIT, poolSize).forEach(this::initThreads);
    }

    public void submitTask(Runnable task) {
        synchronized (tasks) {
            tasks.offer(task);
            tasks.notify();
        }
    }

    private void initThreads(Integer identifier) {
        WorkerThread worker = new WorkerThread(identifier, this.tasks);
        threads.add(worker);
        worker.start();
    }

}
