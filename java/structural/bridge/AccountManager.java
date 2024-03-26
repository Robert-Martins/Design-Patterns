import java.util.Optional;

public abstract class AccountManager {

    BankAccount bankAccount;

    public abstract void openAccount(Double initialBalance);

    public void deposit(Double amount) {
        Optional.ofNullable(this.bankAccount)
                .ifPresent(
                        account -> account.deposit(amount)
                );
    }

    public void withdraw(Double amount) {
        Optional.ofNullable(this.bankAccount)
                .ifPresent(
                        account -> account.withdraw(amount)
                );
    }

    public void closeAccount() {
        this.bankAccount = null;
    };

}
