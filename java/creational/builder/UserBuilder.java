import java.util.Arrays;
import java.util.List;

public class UserBuilder {

    private Integer _id;

    private String _login;

    private String _password;

    private List<String> _roles;

    public UserBuilder id(Integer id) {
        this._id = id;
        return this;
    }

    public UserBuilder login(String login) {
        this._login = login;
        return this;
    }

    public UserBuilder password(String password) {
        this._password = password;
        return this;
    }

    public UserBuilder roles(String ...roles) {
        this._roles = Arrays.asList(roles);
        return this;
    }

    public User build() {
        return new User(this._id, this._login, this._password, this._roles);
    }

}
