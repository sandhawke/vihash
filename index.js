const crypto = require('crypto')
const debug = require('debug')('vihash')

function vihash (text, algo = 'sha256') {
  const hash = crypto.createHash(algo)
  hash.update(text)
  const result = 'sha256-' + url64(hash.digest('base64'))
  debug('%s from %s', result, text.slice(0,30)+'...')
  return result
}

// convert from base64 to base64url as needed
function url64 (text) {
  return text.replace(/\+/g, '-').replace(/\//g, '_')
}

vihash.url64 = url64
module.exports = vihash
