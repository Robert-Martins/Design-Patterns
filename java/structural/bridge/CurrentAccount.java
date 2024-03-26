import java.util.Optional;

public class CurrentAccount extends BankAccount {

    private Double tax;

    private static final Double DEFAULT_TAX = 0.5;

    public CurrentAccount(Double amount) {
        super(amount);
    }

    @Override
    public void withdraw(Double amount) {
        Double amountWithTax = amount + Optional.ofNullable(this.tax).orElse(DEFAULT_TAX);
        if(this.hasEnoughBalance(amountWithTax))
            this.setBalance(this.getBalance() - amountWithTax);
    }

    public Double getTax() {
        return tax;
    }

    public void setTax(Double tax) {
        this.tax = tax;
    }
}
