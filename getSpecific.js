function getSpecific(searchStr, str, i0) {
  i0 = i0 || 0
  for(var i=0; i<searchStr.length; i++)
    if(str[i + i0] != searchStr[i])
      return null

  return searchStr
}
module.exports = getSpecific
