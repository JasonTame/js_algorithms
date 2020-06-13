const search = require('./linearSearch')

test("Given an array of values, return the index of a specific value", () => {
    let array = [0, 56, 215, 10, 8, 55];
    
    expect(search(array, 0)).toBe(0)
    expect(search(array, 55)).toBe(5)
    expect(search(array, 10)).toBe(3)

})
