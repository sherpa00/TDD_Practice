const { setTimeout } = require("node:timers/promises");
const { add } = require("./add");

it("add(1, 1) should return 2 (3s delay)", async () => {
  await setTimeout(3000);
  expect(add(1, 1)).toBe(2);
});
