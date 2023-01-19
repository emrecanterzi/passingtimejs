const passingtimejs = require("../src/index");

const test = () => {
  const res1 = passingtimejs(new Date(2000, 3, 20), false);

  if (res1.constructor.name !== "String") {
    throw new Error("should be return string");
  }

  const res2 = passingtimejs(new Date(2000, 3, 20), true);

  if (res2.constructor.name !== "Number") {
    throw new Error("should be return Number");
  }

  console.log("test completed successfully");
};

test();
