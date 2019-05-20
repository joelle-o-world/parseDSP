function getExpression(str, i0) {
  i0 = i0 || 0

  var i1 = skipCommentsAndWhitespace(str, i0)
  /*if(str[i0] == "(") {
    var bracketed = true
    i1++
  } else
    var bracketed = false*/

  var expr0 = getSimpleExpression(str, i1)
  if(expr0 == null)
    return null

  var iN = i1 + expr0.length
  var oList = [expr0]
  while(true) {
    //iN = skipCommentsAndWhitespace(str, iN)
    var op = getOperatorOperand(str, skipCommentsAndWhitespace(str, iN))
    if(op) {
      oList.push(op)
      iN = skipCommentsAndWhitespace(str, iN) + op.length
    } else break
  }

  /*if(bracketed) {
    if(str[iN] == ")")
      iN++
    else
      return null
  }*/

  var length = iN-i0
  for(var i in oList)
    delete oList[i].length

  console.log(oList)

  // Note: the smaller the bindingOrder, the stickier the bind!

  while(oList.length > 1) {
    for(var i=1; i<oList.length; i++){
      if(
        i == oList.length-1 // at last element
        || oList[i].bindingOrder < oList[i+1].bindingOrder //
      ) {

        while(i>1 && oList[i-1].bindingOrder == oList[i].bindingOrder)
          i--

        if(i > 1) {
          // bind [i] to [i-1]
          oList[i].a = oList[i-1].b // put left operand of [i-1] in right of [i]
          oList[i-1].b = oList[i] // copy [i] back one to [i-1]
          oList.splice(i, 1) // remove [i]
          i--
          break
        } else {
          // here, i equals 1
          oList[1].a = oList[0]
          oList[0] = oList[i]
          oList.splice(1, 1)
          i--
          break
        }
      }
    }
  }

  oList[0].length = length
  return oList[0]
}

function getSimpleExpression(str, startIndex) {
  startIndex = startIndex || 0


  if(str[startIndex] == "{")
    return getJSON(str, startIndex)

  if(str[startIndex] == "(") {
    var i = skipCommentsAndWhitespace(str, startIndex+1)
    var expr = getExpression(str, i)
    if(!expr)
      return null
    i = skipCommentsAndWhitespace(str, i + expr.length)
    if(str[i] != ")")
      return null
    expr.length = i+1-startIndex
    expr.bracketed = true
    return expr
  }

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

  var variable = getVariable(str, startIndex)
  if(variable)
    return variable

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
const skipCommentsAndWhitespace = require("./skipCommentsAndWhitespace")
const getOperatorOperand = require("./getOperatorOperand")
const getShorthand = require("./getShorthand")
const getString = require("./getString")
const getJSON = require("./getJSON")
const getVariable = require('./getVariable')
