import java.util.Optional;

public class Singleton {

    private static Singleton singleton;

    public static Singleton getInstance() {
        singleton = Optional.ofNullable(singleton).isPresent() ? singleton : new Singleton();
        return singleton;
    }

}
