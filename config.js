module.exports = {
  operators: [
    "*",
    "/",
    "+",
    "-",
    ","
  ], // the order of this list determines binding order
  units: [
    "s", "ms",
    "Hz",
  ],

  shorthandConstructors: ["O", "Z"]
}

const components = require("../components")
for(var constr in components)
  module.exports.shorthandConstructors.push(constr)
