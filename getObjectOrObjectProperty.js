const getObject = require("./getObject")
const getDotProperty = require("./getDotProperty")

function getObjectOrObjectProperty(str, i0) {
  i0 = i0 || 0
  var object = getObject(str, i0)
  if(!object)
    return null

  var i1 = i0 + object.length
  var property = getDotProperty(str, i1)
  if(property)
    return {
      type: "objectProperty",
      property: property.property,
      object: object,
      "length": object.length + property.length,
    }
  else
    return object
}
module.exports = getObjectOrObjectProperty
