import crypto from 'crypto'

export function md5(data) {
  var md5 = crypto.createHash('md5')
  md5.update(data + '')
  return md5.digest('hex')
}

export class Aes {
  static setCredentials(secret, token) {
    if (secret) Aes.secret = secret
    if (token) Aes.token = token
  }

  static encode(data, secret, token) {
    if (!data) return ''
    let ini = ''
    token = token || Aes.token
    if (!token) {
      ini = token = md5(secret + Math.random())
    }
    secret = secret || Aes.secret
    var iv = token.substr(0, 16)
    var key = md5(secret + token)
    var cp = crypto.createCipheriv('aes-256-cbc', key, iv)
    try {
      data = ini + cp.update(data, 'utf8', 'base64') + cp.final('base64')
    } catch (err) {
      console.log('Failed to encrypt data: [' + data + ']')
      console.error(err)
    }
    return data
  }

  static decode(data, secret, token) {
    if (!data) return ''
    if (!token && !Aes.token) {
      token = data.substr(0, 32)
      data = data.substr(32)
    } else token = token || Aes.token
    secret = secret || Aes.secret
    var iv = token.substr(0, 16)
    var key = md5(secret + token)
    var dc = crypto.createDecipheriv('aes-256-cbc', key, iv)
    try {
      data = dc.update(data, 'base64', 'utf8') + dc.final('utf8')
    } catch (err) {
      console.log('Error decrypting the data: [' + data + ']')
      console.error(err)
    }
    return data
  }
}

