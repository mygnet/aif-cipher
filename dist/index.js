'use strict';

exports.__esModule = true;
exports.Aes = undefined;
exports.md5 = md5;

var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function md5(data) {
  var md5 = _crypto2.default.createHash('md5');
  md5.update(data + '');
  return md5.digest('hex');
}

var Aes = exports.Aes = function () {
  function Aes() {
    _classCallCheck(this, Aes);
  }

  Aes.setCredentials = function setCredentials(secret, token) {
    if (secret) Aes.secret = secret;
    if (token) Aes.token = token;
  };

  Aes.encode = function encode(data, secret, token) {
    if (!data) return '';
    var ini = '';
    token = token || Aes.token;
    if (!token) {
      ini = token = md5(secret + Math.random());
    }
    secret = secret || Aes.secret;
    var iv = token.substr(0, 16);
    var key = md5(secret + token);
    var cp = _crypto2.default.createCipheriv('aes-256-cbc', key, iv);
    try {
      data = ini + cp.update(data, 'utf8', 'base64') + cp.final('base64');
    } catch (err) {
      console.log('Failed to encrypt data: [' + data + ']');
      console.error(err);
    }
    return data;
  };

  Aes.decode = function decode(data, secret, token) {
    if (!data) return '';
    if (!token && !Aes.token) {
      token = data.substr(0, 32);
      data = data.substr(32);
    } else token = token || Aes.token;
    secret = secret || Aes.secret;
    var iv = token.substr(0, 16);
    var key = md5(secret + token);
    var dc = _crypto2.default.createDecipheriv('aes-256-cbc', key, iv);
    try {
      data = dc.update(data, 'base64', 'utf8') + dc.final('utf8');
    } catch (err) {
      console.log('Error decrypting the data: [' + data + ']');
      console.error(err);
    }
    return data;
  };

  return Aes;
}();