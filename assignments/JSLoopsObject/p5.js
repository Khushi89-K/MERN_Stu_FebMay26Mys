let wallet = {
    owner: "khushi",
    balance: 0,
    lastTransaction: null,

    deposit: function(amount) {
        if (typeof amount !== "number" || amount <= 0) {
            console.log("Invalid amount");
            return;
        }

        this.balance += amount;

        this.lastTransaction = {
            type: "DEPOSIT",
            amount: amount,
            balanceAfter: this.balance
        };
    },

    withdraw: function(amount) {
        if (typeof amount !== "number" || amount <= 0) {
            console.log("Invalid amount");
            return;
        }

        if (amount > this.balance) {
            console.log("Insufficient balance");
            return;
        }

        this.balance -= amount;

        this.lastTransaction = {
            type: "WITHDRAW",
            amount: amount,
            balanceAfter: this.balance
        };
    }
};

wallet.deposit(800);
wallet.withdraw(500);


console.log(wallet);