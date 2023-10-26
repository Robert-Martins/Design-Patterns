public class App {

    public static void main(String[] args) {
        System.out.println(
                User.builder()
                        .id(1)
                        .login("robert")
                        .password("123456")
                        .roles("Admin", "Dev", "Requirements")
                        .build().toString()
        );
    }

}
