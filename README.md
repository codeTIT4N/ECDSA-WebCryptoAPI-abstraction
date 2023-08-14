# ECDSA-WebCryptoAPI-abstraction

This project has a small abstraction over the original [WebCryptoAPI](https://nodejs.org/api/webcrypto.html)
for ECDSA signatures.

### Try out an example

```bash
npm run example
```

### About

- This uses the [WebCryptoAPI](https://nodejs.org/api/webcrypto.html), which is natively available in
  Node.Js as well as Browsers.
  > Note: If you want to use this in browser you can replace `crypto.subtle` with `window.crypto.subtle`
  > and it should work the same.
