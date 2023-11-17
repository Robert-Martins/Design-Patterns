public class BusinessAccountCreator extends BankAccountCreator {

    @Override
    public BankAccount registerAccount() {
        return new BusinessAccount();
    }

}
