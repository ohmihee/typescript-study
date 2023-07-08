import fn from "./fn";

test("[이곳에 해당 테스트에 대한 설명을 적어준다.]", () => {
  expect(1).toBe(1);
  // expect의 인자로 검증할 값을 넣어주고, toBe에 기대되는 값을 넣어준다.
});

test("2 더하기 3은 5이다.", () => {
  expect(fn.add(2, 3)).toBe(5);
});

// test("3 더하기 3은 5이다.", () => {
//   expect(fn.add(3, 3)).toBe(5);
// });

// toBe 이외에도 toEquals

test("이름과 나이를 전달받아 객체로 반환 toBe", () => {
  expect(fn.makeUser("mihee", 27)).toBe({ name: "mihee", age: 27 });
});
test("이름과 나이를 전달받아 객체로 반환 toEqual ", () => {
  expect(fn.makeUser("mihee", 27)).toEqual({ name: "mihee", age: 27 });
});
test("이름과 나이를 전달받아 객체로 반환 toStrictEqual", () => {
  expect(fn.makeUser("mihee", 27)).toStrictEqual({
    name: "mihee",
    age: 27,
    // gender: undefined,
  });
});
// 객체 값 비교시에는 toStrictEqual을 사용하는 것이 좋다

test("null은 null이다.", () => {
  expect(null).toBeNull();
});

test("0은 false이다.", () => {
  expect(0).toBeFalsy();
});

test("비어있지 않은 문자열은 true이다.", () => {
  expect(fn.addString("hello", "world")).toBeTruthy();
});

test("ID는 10자 이하여야 한다.", () => {
  // const id = "THE_BLACK_ORDER";
  const id = "THE_BLACK";
  expect(id.length).toBeLessThanOrEqual(10);
});

test("0.1 더하기 0.2는 0.3이다.", () => {
  //expect(fn.add(0.1, 0.2)).toBe(0.3);
  expect(fn.add(0.1, 0.2)).toBeCloseTo(0.3);
});

test("Hello World에 a 라는 글자가 있나?", () => {
  // expect(`hello world`).toMatch(/a/);
  // 해당 문장에 글자가 존재하는지 여부를 비교해준다. toMatch인자에는 정규표현식,
  expect(`hello world`).toMatch(/h/);
});

test("유저 리스트에 mike가 있나", () => {
  const user = "Mike";
  const userList = ["Tom", "Mike", "Kai"];
  expect(userList).toContain(user);
});

test("에러 발생", () => {
  expect(() => fn.throwErr()).toThrow();
  // 에러를 비교해준다.
});
