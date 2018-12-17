function getOperator(str, i0=0) {
  var winner = ""
  for(var i in operators) {
    var operator = getSpecific(operators[i], str, i0)
    if(operator && operator.length > winner.length)
      winner = operator
  }
  if(winner.length)
    return winner
  else
    return null
}

module.exports = getOperator
const {operators} = require("./config")
const getSpecific = require("./getSpecific")
