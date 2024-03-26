import java.util.Optional;

public class SavingsAccountManager extends AccountManager {

    @Override
    public void openAccount(Double initialBalance) {
        if (Optional.ofNullable(this.bankAccount).isEmpty())
            this.bankAccount = new SavingsAccount(initialBalance);
    }

}
