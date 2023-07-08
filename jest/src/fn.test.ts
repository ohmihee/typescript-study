import fn from "./fn";

test("[이곳에 해당 테스트에 대한 설명을 적어준다.]", () => {
  expect(1).toBe(1);
  // expect의 인자로 검증할 값을 넣어주고, toBe에 기대되는 값을 넣어준다.
});

test("2 더하기 3은 5이다.", () => {
  expect(fn.add(2, 3)).toBe(5);
});

test("3 더하기 3은 5이다.", () => {
  expect(fn.add(3, 3)).toBe(5);
});

// toBe 이외에도 toEquals
