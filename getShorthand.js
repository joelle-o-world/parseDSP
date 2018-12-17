function getShorthand(str, i0) {
  i0 = i0 || 0
  var constr = getWord(str, i0)
  if(!constr || config.shorthandConstructors.indexOf(constr) == -1)
    return null

  var i = i0 + constr.length
  var args = []

  var n = getNumber(str, i)
  if(n) {
    args.push(n)
    i += n.length
    while(str[i] == "|") {
      i++
      var n = getNumber(str, i)
      if(!n)
        return null
      else {
        args.push(n)
        i += n.length
        continue
      }
    }
  }

  return {
    type: "shorthand",
    constructorAlias: constr,
    arguments: args,
    length: i-i0
  }
}

module.exports = getShorthand
const getWord = require("./getWord")
const getNumber = require("./getNumber")
const config = require("./config")
