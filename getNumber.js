const numberRegex = /[0-9.\-]/

function getNumber(str, startIndex) {
  startIndex = startIndex || 0

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
}
module.exports = getNumber
