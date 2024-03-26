public abstract class BankAccount {

    private Double balance;

    public BankAccount() {
    }

    public BankAccount(Double balance) {
        this.balance = balance;
    }

    public Double getBalance() {
        return balance;
    }

    public void setBalance(Double balance) {
        this.balance = balance;
    }

    public void deposit(Double amount) {
        this.balance += amount;
    }

    public void withdraw(Double amount) {
        if(this.hasEnoughBalance(amount))
            this.balance -= amount;
    }

    public Boolean hasEnoughBalance(Double amount) {
        return amount <= this.balance;
    }

}
