import java.util.Date;

public class App {

    public static void main(String[] args) {
        Task task = new Task(1, "Fazer tarefa", new Date());
        System.out.println(task.toString());
        System.out.println(task.clone().toString());
    }
}
