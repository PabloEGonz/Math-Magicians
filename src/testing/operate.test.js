import operate from "../logic/operate";
describe('Testing Operate Function', () => {
    test('adding two numbers', () => {
        const num1 = 3;
        const num2 = 5;
        const op = '+';
        expect(operate(num1, num2, op)).toBe('8');
    });
    test('sustracting two numbers', () => {
        const num1 = 5;
        const num2 = 2;
        const op = '-';
        expect(operate(num1, num2, op)).toBe('3');
    });
})

