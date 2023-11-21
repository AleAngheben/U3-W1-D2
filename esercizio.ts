class SonAccount {
  balanceInt: number = 0;

  //   oneDeposit(amount: number): void {
  //     this.balanceInt += amount;
  //   }
  oneDeposit(amount: number): number {
    let balance = (this.balanceInt += amount);
    // this.balanceInt = balance;
    return balance;
  }

  oneWithDraw(amount: number): void {
    if (amount <= this.balanceInt) {
      this.balanceInt -= amount;
    } else {
      console.log("Non puoi prelevare più di quello che possiedi");
    }
  }
}

const sonBank = new SonAccount();
sonBank.oneDeposit(300);
sonBank.oneDeposit(200);
console.log("Son dopo due accrediti di 300 e 200", sonBank.balanceInt);
sonBank.oneWithDraw(150);
console.log("Son dopo un prelievo di 150", sonBank.balanceInt);

class MotherAccount extends SonAccount {
  addInterest(amount: number): number {
    let interest = amount * 0.1;
    return interest;
  }

  twoDeposit(amount: number): number {
    let balance = this.balanceInt + amount;
    this.balanceInt = balance + this.addInterest(amount);
    return this.balanceInt;
  }
  twoDWithDraw(amount: number): number {
    let balance = this.balanceInt - amount;
    this.balanceInt = balance - this.addInterest(amount);
    return this.balanceInt;
  }
}

const momBank = new MotherAccount();
momBank.twoDeposit(500);
console.log("Mom dopo aggiunta di 500", momBank.balanceInt);
momBank.twoDWithDraw(100);
console.log("Mom dopo un prelievo di 100 (-10%)", momBank.balanceInt);
