# ECDSA-WebCryptoAPI-example

ECDSA key generation and verification example using WebCryptoAPI in NodeJs

### About

- This is an example Node.Js app which generates an ECDSA keypair and verifies the digital signatures.
- This uses the [WebCryptoAPI](https://nodejs.org/api/webcrypto.html), which is natively available in
  Node.Js as well as Browsers.
  > Note: If you want to use this in browser you can replace `crypto.subtle` with `window.crypto.subtle`
  > and it should work the same.
- It exports private-public keypairs in Base64 encoded form, so these can be stored in a db or used as
  environment variables.
