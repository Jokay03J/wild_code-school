import assert from 'assert';

class BankCustomer {
    private name: string;
    private codeCard: string;
    constructor(name: string, codeCard: string) {
        this.name = name;
        this.codeCard = codeCard
    }

    getName(): string {
        return this.name;
    }

    verifyPinInput(providedCodeCard: string): boolean {
        return this.codeCard === providedCodeCard;
    }
}

// Tests

const customer = new BankCustomer('John Doe', '3579');
assert.equal(typeof customer.getName, 'function');
assert.equal(typeof customer.verifyPinInput, 'function');
assert.equal(customer.getName(), 'John Doe');
assert.ok(customer.verifyPinInput('3579'));