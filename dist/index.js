'use strict';exports.__esModule=!0,exports.md5=md5,exports.base64Decode=base64Decode,exports.base64Encode=base64Encode,exports.aesSetCredentials=aesSetCredentials,exports.aesEncode=aesEncode,exports.aesDecode=aesDecode;var _crypto=require('crypto'),_crypto2=_interopRequireDefault(_crypto);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}var Aes=function(){function a(){_classCallCheck(this,a)}return a.setCredentials=function d(b,c){b&&(a.secret=b),c&&(a.token=c)},a.encode=function i(b,c,d){if(!b)return'';var e='';d=d||a.token,d||(e=d=md5(c+Math.random())),c=c||a.secret;var f=d.substr(0,16),g=md5(c+d),h=_crypto2.default.createCipheriv('aes-256-cbc',g,f);try{b=e+h.update(b,'utf8','base64')+h.final('base64')}catch(a){console.log('Failed to encrypt data: ['+b+']'),console.error(a)}return b},a.decode=function h(b,c,d){if(!b)return'';void 0===d&&void 0===a.token?(d=b.substr(0,32),b=b.substr(32)):d=d||a.token,c=c||a.secret;var e=d.substr(0,16),f=md5(c+d),g=_crypto2.default.createDecipheriv('aes-256-cbc',f,e);try{b=g.update(b,'base64','utf8')+g.final('utf8')}catch(a){console.log('Error decrypting the data: ['+b+']'),console.error(a)}return b},a}();
/**
 * Generate the hash of a string with md5 algorithm
 * @param {string} data string
 * @returns {string} hash string
 */function md5(data){var a=_crypto2.default.createHash('md5');return a.update(data+''),a.digest('hex')}
/**
 * Decode in base 64
 * @param {string} data source data
 * @returns return returns plaintext
 */function base64Decode(data){return Buffer.from(data,'base64').toString('utf-8')}
/**
 * Encode in base 64
 * @param {string} data source data
 * @returns base-64 encoded data
 */function base64Encode(data){return Buffer.from(data).toString('base64')}
/**
* Set encryption credentials
* @param {string} secret chain with our secret
* @param {string} token 32 character token string
*/function aesSetCredentials(secret,token){return Aes.setCredentials(secret,token)}
/**
* Encrypt a string
* @param {string} data string to encrypt
* @param {string} secret secret, if not established, the previously established credentials are taken
* @param {string} token 32 character token string, if not established, the previously established credentials are taken
* @returns
*/function aesEncode(data,secret,token){return Aes.encode(data,secret,token)}
/**
* Decrypt a string
* @param {string} data encrypted string
* @param {string} secret secret, if not established, the previously established credentials are taken
* @param {string} token 32 character token string, if not established, the previously established credentials are taken
* @returns
*/function aesDecode(data,secret,token){return Aes.decode(data,secret,token)}