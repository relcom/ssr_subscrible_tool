/**
 * Util module
 *
 * @author Andy Chung
 * @date  2018-11-05
 */
// Deps
let fs = require('fs')

// Convert normal string to base64 encoding string
let base64 = (str) => {
	return new Buffer(str).toString('base64')
}

// ReadFile Sync Function
let readSync = (filePath) => fs.readFileSync(filePath).toString('utf-8')

// WriteFile Sync Function
let writeSync = (filePath, str) => fs.writeFileSync(filePath, str)

module.exports = {
	base64,
	readSync,
	writeSync
}