function getExpression(str, i0) {
  i0 = i0 || 0

  var i1 = i0
  if(str[i0] == "(") {
    var bracketed = true
    i1++
  } else
    var bracketed = false

  var expr0 = getSimpleExpression(str, i1)
  if(expr0 == null)
    return null

  var iN = i1 + expr0.length
  var oList = [expr0]
  while(true) {
    //iN = skipWhitespace(str, iN)
    var op = getOperatorOperand(str, skipWhitespace(str, iN))
    if(op) {
      oList.push(op)
      iN = skipWhitespace(str, iN) + op.length
    } else break
  }

  if(bracketed) {
    if(str[iN] == ")")
      iN++
    else
      return null
  }

  var length = iN-i0
  for(var i in oList)
    delete oList[i].length

  while(oList.length > 1)
    for(var i=1; i<oList.length; i++){
      if(i == oList.length-1 || oList[i].bindingOrder < oList[i+1].bindingOrder) {
        if(i > 1) {
          oList[i].a = oList[i-1].b
          oList[i-1].b = oList[i]
          oList.splice(i, 1)
          break
        } else {
          oList[i].a = oList[i-1]
          oList[i-1] = oList[i]
          oList.splice(i, 1)
          break
        }
      }
    }

  oList[0].length = length
  return oList[0]
}

function getSimpleExpression(str, startIndex) {
  startIndex = startIndex || 0

  if(str[startIndex] == "(")
    return getExpression(str, startIndex)

  var ref = getObjectReference(str, startIndex)
  if(ref)
    return ref

  var n = getNumber(str, startIndex)
  if(n)
    return n

  var obj = getObjectOrObjectProperty(str, startIndex)
  if(obj)
    return obj

  var shorthand = getShorthand(str, startIndex)
  if(shorthand)
    return shorthand

  var string = getString(str, startIndex)
  if(string)
    return string

  return null
}

module.exports = getExpression
module.exports.simple = getSimpleExpression
const getObjectOrObjectProperty = require("./getObjectOrObjectProperty")
const getObjectReference = require("./getObjectReference.js")
const getNumber = require("./getNumber.js")
const skipWhitespace = require("./skipWhitespace")
const getOperatorOperand = require("./getOperatorOperand")
const getShorthand = require("./getShorthand")
const getString = require("./getString")
