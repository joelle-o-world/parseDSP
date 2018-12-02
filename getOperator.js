function getOperator(str, i0) {

  for(var j in operators) {
    var op = operators[j]
    if(i0 + op.length < str.legnth)
      for(var i=0; i<op.length; i++) {
        console.log(str[i0 + i], op[i])
        if(str[i0 + i] != op[i])
          break
        }
      else
        break

      if(i == op.length) {
        console.log("winner", op)
        return op
      } else
        console.log("not", op, str.slice(i0))
  }
  return null
}

module.exports = getOperator
const {operators} = require("./config")
