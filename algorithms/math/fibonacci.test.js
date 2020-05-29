const fibonacci = require('./fibonacci')

test("Passing 0 or 1 to the function returns 1", () => {
    expect(fibonacci(0)).toBe(1)
    expect(fibonacci(1)).toBe(1)

})

test("Passing 7 to the function returns 21", () => {
    expect(fibonacci(7)).toBe(21)
})