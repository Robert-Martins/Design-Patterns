public class PostgreSQLAdapter implements Database {

    private PostgreSQLDatabase postgreSQLDatabase;

    public void connect(String username, String password) {
        this.postgreSQLDatabase = new PostgreSQLDatabase();
        this.postgreSQLDatabase.connectToDatabase(username, password);
    }

    public void executeQuery(String query) {
        this.postgreSQLDatabase.runQueryOnDatabase(query);
    }

    public void disconnect() {
        this.postgreSQLDatabase.disconnectToDatabase();
    }

}
