var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SonAccount = /** @class */ (function () {
    function SonAccount() {
        this.balanceInt = 0;
    }
    //   oneDeposit(amount: number): void {
    //     this.balanceInt += amount;
    //   }
    SonAccount.prototype.oneDeposit = function (amount) {
        var balance = (this.balanceInt += amount);
        // this.balanceInt = balance;
        return balance;
    };
    SonAccount.prototype.oneWithDraw = function (amount) {
        if (amount <= this.balanceInt) {
            this.balanceInt -= amount;
        }
        else {
            console.log("Non puoi prelevare più di quello che possiedi");
        }
    };
    return SonAccount;
}());
var sonBank = new SonAccount();
sonBank.oneDeposit(300);
sonBank.oneDeposit(200);
console.log("Son dopo due accrediti di 300 e 200", sonBank.balanceInt);
sonBank.oneWithDraw(150);
console.log("Son dopo un prelievo di 150", sonBank.balanceInt);
var MotherAccount = /** @class */ (function (_super) {
    __extends(MotherAccount, _super);
    function MotherAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MotherAccount.prototype.addInterest = function (amount) {
        var interest = amount * 0.1;
        return interest;
    };
    MotherAccount.prototype.twoDeposit = function (amount) {
        var balance = this.balanceInt + amount;
        this.balanceInt = balance + this.addInterest(amount);
        return this.balanceInt;
    };
    MotherAccount.prototype.twoDWithDraw = function (amount) {
        var balance = this.balanceInt - amount;
        this.balanceInt = balance - this.addInterest(amount);
        return this.balanceInt;
    };
    return MotherAccount;
}(SonAccount));
var momBank = new MotherAccount();
momBank.twoDeposit(500);
console.log("Mom dopo aggiunta di 500", momBank.balanceInt);
momBank.twoDWithDraw(100);
console.log("Mom dopo un prelievo di 100 (-10%)", momBank.balanceInt);
