import java.util.List;
import java.util.stream.Collectors;

public class User {

    private Integer id;
    private String login;
    private String password;
    private List<String> roles;

    public User(Integer id, String login, String password, List<String> roles) {
        this.id = id;
        this.login = login;
        this.password = password;
        this.roles = roles;
    }

    public static UserBuilder builder() {
        return new UserBuilder();
    }

    @Override
    public String toString() {
        return new StringBuilder()
                .append(String.format("Id: %d \n", this.id))
                .append(String.format("Login: %s \n", this.login))
                .append(String.format("Password: %s \n", this.password))
                .append(this.roles.stream().collect(Collectors.joining(", ")))
                .toString();
    }

}