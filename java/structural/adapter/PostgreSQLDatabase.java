public class PostgreSQLDatabase {

    private String username;
    private String password;

    public void connectToDatabase(String username, String password) {
        this.username = username;
        this.password = password;
        System.out.println(
                String.format(
                        "Connecting to DB with User %s",
                        username
                )
        );
    }

    public void runQueryOnDatabase(String query) {
        System.out.println(
                String.format(
                        "Running Query %s",
                        query
                )
        );
    }

    public void disconnectToDatabase() {
        System.out.println(
                "Disconnecting..."
        );
    }

}
