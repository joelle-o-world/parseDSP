function getShorthand(str, i0) {
  i0 = i0 || 0
  var constr = getWord(str, i0)
  if(!constr)
    return null

  var iN = i0 + constr.length-1
  var args = []
  do {
    var arg = getNumber(str, iN+1)
    if(arg) {
      args.push(arg)
      iN += arg.length+1
    } else
      break;
  } while(str[iN] == "|")

  return {
    type: "shorthand",
    constructorAlias: constr,
    arguments: args,
    length: iN-i0
  }
}

module.exports = getShorthand
const getWord = require("./getWord")
const getNumber = require("./getNumber")
