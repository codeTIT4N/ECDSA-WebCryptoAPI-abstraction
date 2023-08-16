# ECDSA-WebCryptoAPI-abstraction

This project provides a small abstraction over the original [WebCryptoAPI](https://nodejs.org/api/webcrypto.html)
for ECDSA signatures.

### About

- This uses the [WebCryptoAPI](https://nodejs.org/api/webcrypto.html), which is natively available in
  Node.Js as well as Browsers.
  > Note: If you want to use this in browser you can replace `crypto.subtle` with `window.crypto.subtle`
  > and it should work the same.
- The signatures, keys, etc are encoded in base64 so they can be easily used in APIs.

### Setup the project

1. Clone the repo:

```bash
git clone https://github.com/codeTIT4N/ECDSA-WebCryptoAPI-abstraction
```

2. Install node modules:

```bash
npm i
```

3. Use the `packages` provided inside `src` - Refer to [example.ts](./example.ts)

#### Try out an example

```bash
npm run example
```

### Few more things

#### Build the project

```bash
npm run build
```

#### Run test cases

```bash
npm run test
```
