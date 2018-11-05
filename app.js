/**
 * Entry File
 */
let path = require('path')
let util = require('./util')
let base64 = util.base64
let readSync = util.readSync
let writeSync = util.writeSync

let BUILD_DIR = 'dist'
let ENTRY_FILE = './node.txt'
let str = readSync(ENTRY_FILE)

// Map all the item include `ssr://` and serialize those items
let result = str.split('\n\n').filter(item => item.includes('ssr://')).join('\r\n')

writeSync(path.resolve(__dirname, BUILD_DIR, 'index.html'), base64(result))