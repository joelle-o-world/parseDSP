module.exports = {
  operators: [
    "!",
    "^",
    "*",
    "/",
    "@",
    "+",
    "-",
    ",", // concat
    "->", // connect
    ">|",
    "|<",
    "for",
    "then",
  ], // the order of this list determines binding order
  units: [
    "s", "ms",
    "Hz",
  ],

  shorthandConstructors: ["O", "Z", "Sq", "A", "D", "t", "random", "LP", "AP"]
}

const components = require("../patchesAndComponents")
for(var constr in components)
  module.exports.shorthandConstructors.push(constr)
