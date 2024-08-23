const withdraw = (person, amount) => {
    const isWithdrawalPossible = amount <= person.balance;
    isWithdrawalPossible
      ? (person.balance -= amount, console.log("Withdrawal successful. New balance:", person.balance))
      : console.log("Withdrawal cannot be processed.");
  };
  
  const person1 = {
    name: "Hyrjeta Topulli",
    balance: 100,
  };
  
  withdraw(person1, 50);
  withdraw(person1, 100);
  withdraw(person1, 50);
  