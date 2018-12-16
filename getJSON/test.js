const getJSON = require("./index.js")
const argv = process.argv.slice(2)

for(var i in argv)
  console.log( getJSON(argv[i]) )
