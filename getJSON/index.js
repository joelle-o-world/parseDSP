function getJSON(str, i0=0) {
  var string = getString(str, i0)
  if(string)
    return {
      type: "json",
      o: string.string,
      length: string.length
    }

  var number = getNumber(str, i0)
  if(number)
    return {
      type: "json",
      o: number.n,
      length: number.length
    }

  var array = getArray(str, i0)
  if(array)
    return array

  var obj = getObject(str, i0)
  if(obj)
    return obj


  return null
}

module.exports = getJSON
const getString = require("./getString")
const getNumber = require("./getNumber")
const getArray = require("./getArray")
const getObject = require("./getObject")
