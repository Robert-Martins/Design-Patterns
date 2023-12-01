import java.util.stream.IntStream;

public class App {

    private static final Integer POOL_SIZE = 5;

    public static void main(String[] args){
        ThreadPool threadPool = new ThreadPool(POOL_SIZE);
        IntStream.range(0, 10).forEach(
                val -> {
                    final int taskNumber = val;
                    threadPool.submitTask(() ->
                        System.out.println("Task " + taskNumber + " executada por " + Thread.currentThread().getName())
                    );
                }
        );
    }
}
