function getObject(str, i0=0) {
  if(str[i0] != "{")
    return null

  var i = skipWhitespace(str, i0+1)

  var o = {}
  while(i < str.length) {
    if(str[i] == "}") {
      i++
      break
    }
    var property = getProperty(str, i)
    if(!property)
      return null
    o[property.name] = property.value

    i = skipWhitespace(str, i + property.length)

    if(str[i] == ",") {
      i = skipWhitespace(str, i+1)
      continue
    } else if(str[i] == "}") {
      i++
      break
    } else
      return null
  }

  return {
    type: "json",
    o: o,
    length: i-i0,
  }
}

module.exports = getObject
const getProperty = require("./getProperty")
const skipWhitespace = require("./skipWhitespace.js")
