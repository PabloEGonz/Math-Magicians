import calculate from "../logic/calculate";
describe('Testing calculate Function', () => {
    test('adding two numbers', () => {
        const obj = {
            total: 2,
            next: '5',
            operation: '+',
        };
        const button = '=';
        const result = { "next": null, "operation": null, "total": "7" };
        expect(calculate(obj, button)).toStrictEqual(result);
    });
    test('sustracting two numbers', () => {
        const obj = {
            total: 2,
            next: '5',
            operation: '-',
        };
        const button = '=';
        const result = { "next": null, "operation": null, "total": "-3" };
        expect(calculate(obj, button)).toStrictEqual(result);
    });
    test('diving two numbers', () => {
        const obj = {
            total: 10,
            next: '2',
            operation: '÷',
        };
        const button = '=';
        const result = { "next": null, "operation": null, "total": "5" };
        expect(calculate(obj, button)).toStrictEqual(result);
    });
    test('first condition', () => {
        const obj = {
            total: null,
            next: null,
            operation: null,
        };
        expect(calculate(obj, '1')).toEqual({ next: '1', total: null });
    });

    test('second condition', () => {
        const obj = {
            total: null,
            next: '2',
            operation: null,
        };
        expect(calculate(obj, '1')).toEqual({ next: '21', total: null });
    });

    test('third condition', () => {
        const obj = {
            total: null,
            next: null,
            operation: null,
        };
        expect(calculate(obj, '=')).toEqual({});
    });
})
