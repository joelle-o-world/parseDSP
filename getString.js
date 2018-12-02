function getString(str, i0) {
  i0 = i0 || 0

  if(str[i0] == "\"")
    var endChar = "\""
  else if(str[i0] == "'")
    var endChar = "'"
  else
    return null

  var i1
  do {
    i1 = str.indexOf(endChar, i0+1)
    if(i1 == -1)
      return null
  } while(str[i1-1] == "\\")

  return {
    type: "string",
    string: str.slice(i0+1, i1),
    length: i1-i0+1
  }
}

module.exports = getString
