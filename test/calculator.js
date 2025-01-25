const { expect } = await import('chai');


// Example calculator functions to test
const calculator = {
    add: (a, b) => a + b,
    sub: (a, b) => a - b,
    mul: (a, b) => a * b,
    div: (a, b) => b !== 0 ? a / b : 'Error: Division by zero'
};

describe('Calculator Tests', () => {
    // Add tests
    it('should return 7 for add(5, 2)', () => {
        expect(calculator.add(5, 2)).to.equal(7); // PASS
    });
    it('should return 8 for add(5, 2) (expected to fail)', () => {
        expect(calculator.add(5, 2)).to.equal(8); // FAIL
    });
   
    // Subtraction tests
    it('should return 3 for sub(5, 2)', () => {
        expect(calculator.sub(5, 2)).to.equal(3); // PASS
    });
    it('should return 5 for sub(5, 2) (expected to fail)', () => {
        expect(calculator.sub(5, 2)).to.equal(5); // FAIL
    });

    // Multiplication tests
    it('should return 10 for mul(5, 2)', () => {
        expect(calculator.mul(5, 2)).to.equal(10); // PASS
    });
    it('should return 12 for mul(5, 2) (expected to fail)', () => {
        expect(calculator.mul(5, 2)).to.equal(12); // FAIL
    });

    // Division tests
    it('should return 5 for div(10, 2)', () => {
        expect(calculator.div(10, 2)).to.equal(5); // PASS
    });
    it('should return 2 for div(10, 2) (expected to fail)', () => {
        expect(calculator.div(10, 2)).to.equal(2); // FAIL
    });

    // Handle division by zero
    it('should return "Error: Division by zero" for div(10, 0)', () => {
        expect(calculator.div(10, 0)).to.equal('Error: Division by zero'); // PASS
    });
});
