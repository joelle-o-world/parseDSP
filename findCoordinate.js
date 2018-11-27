function findCoordinate(str, point) {
  var col = 0
  var row = 0
  for(var i=0; i<point; i++) {
    col++
    if(str[i] == "\n")  {
      row++
      col=0
    }
  }

  return [row, col]
}
module.exports = findCoordinate
