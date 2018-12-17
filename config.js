module.exports = {
  operators: [
    "*",
    "/",
    "@",
    "+",
    "-",
    ",", // concat
    "->", // connect
  ], // the order of this list determines binding order
  units: [
    "s", "ms",
    "Hz",
  ],

  shorthandConstructors: ["O", "Z", "Sq", "A", "D", "t"]
}

const components = require("../components")
for(var constr in components)
  module.exports.shorthandConstructors.push(constr)
console.log(module.exports.shorthandConstructors)
