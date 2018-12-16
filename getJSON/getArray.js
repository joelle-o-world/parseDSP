function getArray(str, i0=0) {
  if(str[i0] != "[")
    return null

  var i = skipWhitespace(str, i0+1)

  var array = []
  while(i<str.length) {
    if(str[i] == "]") {
      i++
      break
    }

    var obj = getJSON(str, i)
    if(!obj)
      return null
    array.push(obj.o)

    i = skipWhitespace(str, i + obj.length)

    if(str[i] == ",") {
      i = skipWhitespace(str, i+1)
      continue
    } else if(str[i] == "]"){
      i++
      break
    } else
      return null
  }

  return {
    type: "json",
    o: array,
    length: i-i0
  }
}

module.exports = getArray
const skipWhitespace = require("./skipWhitespace")
const getJSON = require("./index.js")
