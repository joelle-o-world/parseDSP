const numberRegex = /[0-9.\-]/

function getNumber(str, startIndex=0) {

  for(var i=startIndex; i<=str.length; i++) {
    var c = str[i]
    if(!numberRegex.test(c))
      if(i==startIndex)
        return null
      else
        return {
          type: "number",
          n: parseFloat(str.slice(startIndex, i)),
          "length": i-startIndex,
        }
  }

  console.warn(
    "WARNING: open ended word",
    "\'"+str.slice(startIndex, i)+"\'",
    "at", findCoordinate(str, i)
  )
  return {
    type: "number",
    n: parseFloat(str.slice(startIndex, i)),
    "length": i-startIndex,
  } 
}

module.exports = getNumber
const findCoordinate = require("./findCoordinate")
