public class Customer {
    private int customerId;
    private String name;
    private String mailId;
    private String contact;
    private String accountType;

    public Customer(int customerId, String name, String mailId, String contact, String accountType) {
        this.customerId = customerId;
        this.name = name;
        this.mailId = mailId;
        this.contact = contact;
        this.accountType = accountType;
    }

    public int getCustomerId() {
        return customerId;
    }

    public String getName() {
        return name;
    }

    public String getMailId() {
        return mailId;
    }

    public String getContact() {
        return contact;
    }

    public String getAccountType() {
        return accountType;
    }

    public static void main(String[] args) {
        Customer[] customers = new Customer[3];
        
        customers[0] = new Customer(1, "Alice", "alice@example.com", "1234567890", "Savings");
        customers[1] = new Customer(2, "Bob", "bob@example.com", "
        
