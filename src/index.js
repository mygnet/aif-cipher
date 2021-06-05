import crypto from 'crypto'

class Aes {
  static setCredentials(_secret, _token) {
    if (_secret) Aes.secret = _secret
    if (_token) Aes.token = _token
  }
  static encode(_data, _secret, _token) {
    if (!_data) return ''
    let ini = ''
    _token = _token || Aes.token
    if (!_token) {
      ini = _token = md5(_secret + Math.random())
    }
    _secret = _secret || Aes.secret
    var iv = _token.substr(0, 16)
    var key = md5(_secret + _token)
    var cp = crypto.createCipheriv('aes-256-cbc', key, iv)
    try {
      _data = ini + cp.update(_data, 'utf8', 'base64') + cp.final('base64')
    } catch (err) {
      console.log('Failed to encrypt data: [' + _data + ']')
      console.error(err)
    }
    return _data
  }
  static decode(_data, _secret, _token) {
    if (!_data) return ''
    if (_token === undefined && Aes.token === undefined) {
      _token = _data.substr(0, 32)
      _data = _data.substr(32)
    } else _token = _token || Aes.token
    _secret = _secret || Aes.secret
    var iv = _token.substr(0, 16)
    var key = md5(_secret + _token)
    var dc = crypto.createDecipheriv('aes-256-cbc', key, iv)
    try {
      _data = dc.update(_data, 'base64', 'utf8') + dc.final('utf8')
    } catch (err) {
      console.log('Error decrypting the data: [' + _data + ']')
      console.error(err)
    }
    return _data
  }
}
/**
 * Generate the hash of a string with md5 algorithm
 * @param {string} data string
 * @returns {string} hash string
 */
export function md5(data) {
  var md5 = crypto.createHash('md5')
  md5.update(data + '')
  return md5.digest('hex')
}
/**
 * Decode in base 64
 * @param {string} data source data
 * @returns return returns plaintext
 */
export function base64Decode(data) {
  return Buffer.from(data, 'base64').toString('utf-8')
}

/**
 * Encode in base 64
 * @param {string} data source data
 * @returns base-64 encoded data
 */
export function base64Encode(data) {
  return Buffer.from(data).toString('base64')
}
/**
* Set encryption credentials
* @param {string} secret chain with our secret
* @param {string} token 32 character token string
*/
export function aesSetCredentials(secret, token) {
  return Aes.setCredentials(secret, token)
}
/**
* Encrypt a string
* @param {string} data string to encrypt
* @param {string} secret secret, if not established, the previously established credentials are taken
* @param {string} token 32 character token string, if not established, the previously established credentials are taken
* @returns
*/
export function aesEncode(data, secret, token) {
  return Aes.encode(data, secret, token)
}
/**
* Decrypt a string
* @param {string} data encrypted string
* @param {string} secret secret, if not established, the previously established credentials are taken
* @param {string} token 32 character token string, if not established, the previously established credentials are taken
* @returns
*/
export function aesDecode(data, secret, token) {
  return Aes.decode(data, secret, token)
}
