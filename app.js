/**
 * Entry File
 */
let util = require('./util')
let base64 = util.base64
let readSync = util.readSync
let writeSync = util.writeSync

let str = readSync('./node.txt')

let result = str.split('\n\n').filter(item => item.includes('ssr://')).join('\r\n')

writeSync('index.html', base64(result))