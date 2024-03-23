public class App {

    public static void main(String[] args) {
        Database database = new PostgreSQLAdapter();
        database.connect("Robert", "123456");
        database.executeQuery("SELECT * FROM User");
        database.disconnect();
    }

}
