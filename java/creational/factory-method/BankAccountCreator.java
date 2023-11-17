public abstract class BankAccountCreator {

    public void createAccount() {
        registerAccount().createAccount();
    }

    public abstract BankAccount registerAccount();

}
