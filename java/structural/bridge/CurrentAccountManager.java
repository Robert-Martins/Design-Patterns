import java.util.Optional;

public class CurrentAccountManager extends AccountManager {

    @Override
    public void openAccount(Double initialBalance) {
       if (Optional.ofNullable(this.bankAccount).isEmpty())
           this.bankAccount = new CurrentAccount(initialBalance);
    }

    public void setTax(Double value) {
        Optional.ofNullable((CurrentAccount) this.bankAccount)
                .ifPresent(
                        account -> account.setTax(value)
                );
    }

}
