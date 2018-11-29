function getExpressions(str, i0) {
  i0 = i0 || 0

  var expressions = []

  for(var i=i0; i<str.length; i=skipWhitespace(str, i+expr.length)) {
    var expr = getExpression(str, i)
    if(expr)
      expressions.push(expr)
    else if(i==i0)
      return null
    else
      return {
        expressions: expressions,
        "length": i-i0,
      }
  }
  if(i!=i0)
    return {
      expressions: expressions,
      "length": i-i0,
    }

}

module.exports = getExpressions
const getExpression = require("./getExpression")
const skipWhitespace = require("./skipWhitespace")
