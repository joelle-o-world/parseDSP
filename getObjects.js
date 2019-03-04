function getObjects(str, i0) {
  i0 = i0 || 0

  var objs = []

  for(var i=i0; i<str.length; i=skipCommentsAndWhitespace(str, i+obj.length)) {
    var obj = getObject(str, i)
    if(obj)
      objs.push(obj)
    else if(i==i0)
      return null
    else
      return {
        objects: objs,
        "length": i-i0,
      }
  }
  if(i!=i0)
    return {
      objects: objs,
      "length": i-i0,
    }

}

module.exports = getObjects
const getObject = require("./getObject")
const skipCommentsAndWhitespace = require("./skipCommentsAndWhitespace")
