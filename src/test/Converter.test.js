import { convertToWords } from "../utils/converter";

test("Should return zero", () => {
  expect(convertToWords(0)).toBe("zero");
});

test("Should return error message", () => {
  expect(convertToWords(Number.MAX_SAFE_INTEGER + 1)).toBe(
    "The number you entered is either too high or too low."
  );
  expect(convertToWords(123.12)).toBe("Please enter a round number.");
});


test("Should return one-digit number", () => {
  expect(convertToWords(5)).toBe("five");
});

test("Should return two-digit number with '-' sign", () => {
  expect(convertToWords(52)).toBe("fifty-two");
});

test("Should return hundreds", () => {
  expect(convertToWords(100)).toBe("one hundred");
});

test("Should return thousands as hundreds", () => {
  expect(convertToWords(1700)).toBe("seventeen hundred");
});

test("Should return thousands as thousands", () => {
  expect(convertToWords(4000)).toBe("four thousand");
});

test("Should return millions", () => {
  expect(convertToWords(5000000)).toBe("five million");
});

test("Should return billions", () => {
  expect(convertToWords(6000000000)).toBe("six billion");
});

test("Should return trillions", () => {
  expect(convertToWords(7000000000000)).toBe("seven trillion");
});

test("Should return quadrillions", () => {
  expect(convertToWords(7000000000000000)).toBe("seven quadrillion");
});


test("Should concat words with 'and'", () => {
  expect(convertToWords(220)).toBe("two hundred and twenty");
});

test("Should handle string input", () => {
  expect(convertToWords("300200")).toBe(
    "three hundred thousand and two hundred"
  );
});

test("Should handle numbers staring with 0", () => {
  expect(convertToWords("00013")).toBe("thirteen");
});
