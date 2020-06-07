const fib = require('./recursiveFibonacci')

test("Passing 0 or 1 to the function returns 1", () => {
    expect(fib(0, {})).toBe(1)
    expect(fib(1, {})).toBe(1)

})

test("Passing 7 to the function returns 21", () => {
    expect(fib(7, {})).toBe(21)
})