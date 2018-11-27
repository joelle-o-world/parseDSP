const getObjectReference = require("./getObjectReference.js")
const getAttribute = require("./getAttribute")

function getArgument(str, i0) {
  var id = getObjectReference(str, i0)
  if(id) return id

  var attr = getAttribute(str, i0)
  return attr

  return null
}
module.exports = getArgument
