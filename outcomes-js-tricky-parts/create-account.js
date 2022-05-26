function createAccount(pin, amount = 0) {
  return {
    checkBalance(inputPin) {
      if (inputPin !== pin) {
        return 'Invalid PIN.';
      }
      return `$${amount}`;
    },
    deposit(inputPin, inputAmount) {
      if (inputPin !== pin) {
        return 'Invalid PIN.';
      }
      amount += inputAmount;
      return `Succesfully deposited $${inputAmount}. Current balance: $${amount}.`;
    },
    withdraw(inputPin, withdrawAmount) {
      if (inputPin !== pin) {
        return 'Invalid PIN.';
      }
      amount -= withdrawAmount;
      if (amount > 0) {
        return `Succesfully withdrew $${withdrawAmount}. Current balance: $${amount}.`;
      }
      if (amount < 0) {
        return 'Withdrawal amount exceeds account balance. Transaction cancelled.';
      }
    },
    changePin(oldPin, newPin) {
      if (oldPin !== pin) {
        return 'Invalid PIN.';
      }
      pin = newPin;
      return `PIN successfully changed!`;
    },
  };
}

let account = createAccount('5678', 600);

console.log(account.changePin('5678', '1234'));
console.log(account.checkBalance('5678'));

module.exports = { createAccount };
