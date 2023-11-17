public class App {

    private static final Boolean IS_NATURAL_PERSON = Boolean.TRUE;

    public static void main(String[] args) {
        if(IS_NATURAL_PERSON)
            new PersonalAccountCreator().createAccount();
        else
            new BusinessAccountCreator().createAccount();
    }

}
