const fn = {
  add: (num1: number, num2: number) => num1 + num2,
  addString: (str1: string, str2: string) => str1 + str2,
  makeUser: (name: string, age: number) => ({ name, age, gender: undefined }),
  throwErr: () => {
    throw new Error("error");
  },
};
export default fn;
