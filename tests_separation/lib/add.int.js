const { setTimeout } = require("node:timers/promises");
const { add } = require("./add");

it("add(1, 1) should return 2 (1s delay)", async () => {
  await setTimeout(1000);
  expect(add(1, 1)).toBe(2);
});
