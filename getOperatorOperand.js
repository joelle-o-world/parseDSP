function getOperatorOperand(str, i0) {
  i0 = i0 || 0

  var i1 = i0
  var operator = getOperator(str, i0)//str[i1]
  var bindingOrder = config.operators.indexOf(operator)
  if(bindingOrder == -1)
    return null

  var i2 = skipCommentsAndWhitespace(str, i1+operator.length)

  var b = getExpression.simple(str, i2)
  if(!b)
    return null

  return {
    type: "operation",
    operator: operator,
    b: b,
    bindingOrder: bindingOrder,
    "length": i2-i0 + b.length,
  }
}

module.exports = getOperatorOperand
const getExpression = require("./getExpression.js")
const skipCommentsAndWhitespace = require("./skipCommentsAndWhitespace.js")
const config = require("./config")
const getOperator = require("./getOperator")
