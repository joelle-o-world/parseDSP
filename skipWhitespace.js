const whitespaceRegex = /\s/
function skipWhitespace(str, i0) {
  i0 = i0 || 0

  for(var i=i0; i<str.length; i++)
    if(whitespaceRegex.test(str[i]))
      continue
    else
      return i
}
module.exports = skipWhitespace
