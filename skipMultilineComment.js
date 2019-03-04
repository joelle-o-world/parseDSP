function skipMultilineComment(str, i0) {
  if(str.slice(i0, i0+2) == '/*') {
    let iEnd = str.indexOf('*/', i0+2)
    if(iEnd != -1)
      return iEnd+2
    else
      throw "open ended comment"
  } else {
    return i0
  }
}
module.exports = skipMultilineComment
