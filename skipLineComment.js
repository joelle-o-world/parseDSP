function skipLineComment(str, i0) {
  if(str[i0] == '/' && str[i0+1] == '/') {
    let iEnd = str.indexOf('\n', i0+2)
    if(iEnd != -1)
      return iEnd+1
    else
      return str.length
  } else
    return i0
}
module.exports = skipLineComment
