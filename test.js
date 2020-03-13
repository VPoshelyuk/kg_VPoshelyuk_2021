const oneToOneMapping = require('./main')

test('Returns true when 1-to-1 mapping exists', () => {
    expect(oneToOneMapping('abc', 'bcd')).toEqual("true")
    expect(oneToOneMapping('bar', 'foo')).toEqual("true")
});

test("Returns false when s1 can't be mapped to s2", () => {
    expect(oneToOneMapping('foo', 'bar')).toEqual("false")
})