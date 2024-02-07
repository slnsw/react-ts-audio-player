// OpenSSL 3 no longer supports the insecure md4 hash, but webpack < 5.54.0
// hardcodes it. Work around by substituting a supported algorithm.
// https://github.com/webpack/webpack/issues/13572
// https://github.com/webpack/webpack/issues/14532
// TODO(petemill): Remove this patching when webpack > 5.54.0 is being used.

/* eslint-disable camelcase */

const crypto = require('crypto');
const crypto_orig_createHash = crypto.createHash;
crypto.createHash = (algorithm) =>
  crypto_orig_createHash(algorithm === 'md4' ? 'sha256' : algorithm);
