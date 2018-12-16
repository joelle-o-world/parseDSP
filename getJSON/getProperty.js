function getProperty(str, i0=0) {
  var name = getWord(str, i0) || getString(str, i0) || getNumber(str, i0)
  if(!name)
    return null

  var i = skipWhitespace(str, i0 + name.length)

  if(str[i] == ",")
    return {
      type: "json-property",
      name: name.string || name.n || name,
      value: true,
      length: name.length,
    }

  if(str[i] != ":")
    return null
  else
    i = skipWhitespace(str, i+1)

  var value = getJSON(str, i)
  if(!value)
    return null

  return {
    type: "json-property",
    name: name.string || name,
    value: value.o,
    length: i+value.length - i0
  }
}

module.exports = getProperty
const getWord = require("./getWord.js")
const getString = require("./getString")
const getJSON = require("./index.js")
const skipWhitespace = require("./skipWhitespace")
const getNumber = require("./getNumber")
