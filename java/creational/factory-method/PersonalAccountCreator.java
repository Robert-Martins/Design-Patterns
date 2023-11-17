public class PersonalAccountCreator extends BankAccountCreator {

    @Override
    public BankAccount registerAccount() {
        return new PersonalAccount();
    }

}
