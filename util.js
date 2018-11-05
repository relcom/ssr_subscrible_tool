let fs = require('fs')

let base64 = (str) => {
	return new Buffer(str).toString('base64')
}

let readSync = (filePath) => fs.readFileSync(filePath).toString('utf-8')

let writeSync = (filePath, str) => fs.writeFileSync(filePath, str)

module.exports = {
	base64,
	readSync,
	writeSync
}