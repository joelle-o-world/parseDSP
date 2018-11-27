function getObject(str, i0) {
  i0 = i0 || 0
  if(str[i0] != "[")
    return null

  var i1 = skipWhitespace(str, i0+1)

  var constructor = getWord(str, i1)
  if(!constructor)
    return null

  var obj = {
    type: "object",
    constructor: constructor,
    arguments: [],
  }

  var iN = i1 + constructor.length
  do {
    if(str[iN] == "]") {
      obj.length = iN-i0 + 1
      return obj
    }

    if(countWhitespace(str, iN)) {
      iN = skipWhitespace(str, iN)

      if(str[iN] == "]") {
        obj.length = iN-i0 + 1
        return obj
      }

      var arg = getArgument(str, iN)
      if(!arg)
        return null

      if(arg.type == "id")
        obj.id = arg.id
      else
        obj.arguments.push(arg)
      iN += arg.length
    } else
      return null

  } while(iN < str.length)

  return null
}

module.exports = getObject
const skipWhitespace = require("./skipWhitespace.js")
const getWord = require("./getWord")
const getArgument = require("./getArgument")
const countWhitespace = require("./countWhitespace")
