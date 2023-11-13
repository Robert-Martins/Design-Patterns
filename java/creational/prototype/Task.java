import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Modifier;
import java.util.Date;

public class Task implements Prototype {

    private Integer id;
    private String task;
    private Date toBeDone;

    public Task() {}

    public Task(Integer id, String task, Date toBeDone) {
        this.id = id;
        this.task = task;
        this.toBeDone = toBeDone;
    }

    public Prototype clone() {
        Class<?> clazz = this.getClass();
        try {
            Task clone = (Task) clazz.getDeclaredConstructor().newInstance();
            while(clazz != null) {
                for(Field field : clazz.getDeclaredFields()) {
                    if(!Modifier.isFinal(field.getModifiers()) || !Modifier.isStatic(field.getModifiers())) {
                        Object fieldValue = field.get(this);
                        field.set(clone, fieldValue);
                    }
                }
                clazz = clazz.getSuperclass();
            }
            return clone;
        } catch (
                InstantiationException |
                IllegalArgumentException |
                InvocationTargetException |
                NoSuchMethodException |
                IllegalAccessException e
        ) {
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public String toString() {
        return new StringBuilder()
                .append(String.format("ID: %s \n", this.id))
                .append(String.format("Task: %s \n", this.task))
                .append(String.format("To Be Done: %s \n", this.toBeDone.toString()))
                .toString();
    }

}
