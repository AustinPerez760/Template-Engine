const Intern = require("../lib/intern.js");

test("Can set school via constructor", () => {
  const testValue = "UCLA";
  const e = new Intern("Foo", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test('getRole() should return "Intern"', () => {
  const testValue = "Intern"("Foo", 1, "test@test.com", "UCLA", testValue);
  expect(e.getRole()).toBe(testValue);
});

test("can get school via getSchool"(), () => {
  const testValue = "UCLA";
  const e = "Intern"("Foo", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});
