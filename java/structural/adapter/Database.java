public interface Database {

    void connect(String username, String password);

    void executeQuery(String query);

    void disconnect();

}
