
const _ = require("lodash");
const num = _.random(0, 20);
console.log(num);
const greet = _.once(() => {
  console.log("good morning");
});
greet();
greet();