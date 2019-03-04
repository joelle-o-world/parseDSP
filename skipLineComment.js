function skipLineComment(str, i0) {
  if(str[i0] == '/' && str[i0+1] == '/') {
    console.log('skipping line comment', str.slice(i0,
    str.indexOf('\n', i0+2)+1 || str.length))
    return str.indexOf('\n', i0+2)+1 || str.length
  } else
    return i0
}
module.exports = skipLineComment
