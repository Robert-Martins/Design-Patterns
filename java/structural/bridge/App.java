public class App {

    public static void main(String[] args) {
        CurrentAccountManager currentAccountManager = new CurrentAccountManager();
        SavingsAccountManager savingsAccountManager = new SavingsAccountManager();

        currentAccountManager.openAccount(2000.00);
        savingsAccountManager.openAccount(5000.00);

        currentAccountManager.setTax(1.0);

        currentAccountManager.withdraw(500.00);
        savingsAccountManager.withdraw(1000.00);

        currentAccountManager.deposit(250.00);
        savingsAccountManager.deposit(150.00);

        currentAccountManager.closeAccount();
        savingsAccountManager.closeAccount();
    }

}
