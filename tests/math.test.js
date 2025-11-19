const sum = (a, b) => a + b;

test("la suma de 2 + 2 debe ser 4", () => {
    expect(sum(2, 2)).toBe(4);
});
