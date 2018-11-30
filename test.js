const getWord = require("./getWord.js")
const getNumber = require("./getNumber.js")
const getObjectReference = require("./getObjectReference.js")
const getExpression = require("./getExpression")
const countWhitespace = require("./countWhitespace.js")
const getArgument = require("./getArgument.js")
const getObject = require("./getObject.js")
const getObjectOrObjectProperty = require("./getObjectOrObjectProperty")
const getObjects = require("./getObjects.js")
const getOperatorOperand = require("./getOperatorOperand")
const getExpressions = require("./getExpressions")
const getShorthand = require("./getShorthand")

const argv = require("minimist")(process.argv.slice(2))

if(argv._.length)
  var testStrings =  argv._
else
  var testStrings = [
    "[Ramp 1 0 trigger D:10]"
  ]

for(var i in testStrings) {
  var str = testStrings[i]
  console.log("str:", str)
//  console.log("getWord:", getWord(str))
//  console.log("getNumber:", getNumber(str))
//  console.log("getObjectReference:", getObjectReference(str))
//  console.log("getExpressions:", getExpressions(str))
//  console.log("countWhitespace:", countWhitespace(str))
//  console.log("getArgument:", getArgument(str))
  console.log("getObject:", getObject(str))
//  console.log("getObjectOrObjectProperty:", getObjectOrObjectProperty(str))
  //console.log("getObjects:", getObjects(str))
  //console.log("getOperation:", getOperation(str))
  //console.log("getOperatorOperand:", getOperatorOperand(str))
  console.log("getShorthand:", getShorthand(str))
  console.log("\n")
}
