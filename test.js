const oneToOneMapping = require('./main')

test('Returns true when 1-to-1 mapping exists', () => {
    expect(oneToOneMapping('abc', 'bcd')).toEqual("true")
    expect(oneToOneMapping('bar', 'foo')).toEqual("true")
    expect(oneToOneMapping('abc', 'ddd')).toEqual("true")
    expect(oneToOneMapping('abbb', 'cddd')).toEqual("true")
    expect(oneToOneMapping('abcd', 'cddd')).toEqual("true")
});

test("Returns false when s1 can't be mapped to s2", () => {
    expect(oneToOneMapping('foo', 'bar')).toEqual("false")
    expect(oneToOneMapping('abbb', 'cdcd')).toEqual("false")
    expect(oneToOneMapping('abbb', 'cdde')).toEqual("false")
})

test("Returns false if s1 is longer then s2, thus they can't be mapped", () => {
    expect(oneToOneMapping('abbb', 'cd')).toEqual("false")
})

test("Returns true if all characters of s1 can be mapped to s2, even when s2 has extra characters", () => {
    expect(oneToOneMapping('fo', 'bar')).toEqual("true")
})

test("Returns true if s1 is empty", () => {
    expect(oneToOneMapping('', 'bar')).toEqual("true")
})

test("Returns true if both s1 and s2 are empty", () => {
    expect(oneToOneMapping('', '')).toEqual("true")
})

test("Returns false if s2 is empty", () => {
    expect(oneToOneMapping('qwe', '')).toEqual("false")
})