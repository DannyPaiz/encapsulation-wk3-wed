#!/bin/node
class BankAccount {
    #name;
    #balance;

    constructor(name) {
      this.#name = name;
      this.#balance = 0;
    }
    // DEFINE GETTER AND SETTER METHODS HERE
    // Write your code here
    getOwner() {
      return this.#name;
    }

    setBalance(amount) {
        if(amount >= 0)
        this.#balance = amount;
    }

    getBalance() {
        return `£${this.#balance.toFixed(2)}`;
    }

    deposit(amount) {
      if(amount > 0) {
        this.#balance += amount;
      } 
    }

      withdraw(amount) {
        if(amount > 0) {
          if((this.#balance - amount) > 0) {
            this.#balance -= amount;
          } else {
            throw new Error("Insufficient Funds");
          }
        }
      }

  }
  
  // DO NOT EDIT CODE BELOW
  module.exports = {
    BankAccount,
  };