const skipWhitespace = require('./skipWhitespace')
const skipLineComment = require('./skipLineComment')

function skipCommentsAndWhitespace(str, i0) {
  let i1 = i0
  let i2 = i1
  do {
    i1 = i2
    i2 = skipWhitespace(str, i1)
    i2 = skipLineComment(str, i2)
  } while(i1 != i2)


  console.log(i0, i2, str.slice(i0, i2))
  return i2
}
module.exports = skipCommentsAndWhitespace
