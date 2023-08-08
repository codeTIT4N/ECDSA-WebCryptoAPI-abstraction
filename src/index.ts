import * as crypto from "crypto";
import * as assert from "assert";
import {
  convertArrayBufferToBase64,
  convertBase64ToArrayBuffer,
} from "./utils";

(async () => {
  // Key generation
  const keypair = await crypto.subtle.generateKey(
    {
      name: "ECDSA",
      namedCurve: "P-256",
    },
    true,
    ["sign", "verify"],
  );

  // exporting the public key in an array buffer
  const exportedPublicKey = await crypto.subtle.exportKey(
    "spki",
    keypair.publicKey,
  );

  const finalPublicKey = convertArrayBufferToBase64(exportedPublicKey);
  console.log("Final public key", finalPublicKey);

  // do the same for the private key
  const exportedPrivateKey = await crypto.subtle.exportKey(
    "pkcs8",
    keypair.privateKey,
  );

  const finalPrivateKey = convertArrayBufferToBase64(exportedPrivateKey);
  console.log("Final private key", finalPrivateKey);

  // ---------------- TEST ---------------- //

  // convert finalPrivateKey to CryptoKey
  const importedPrivateKey = await crypto.subtle.importKey(
    "pkcs8",
    convertBase64ToArrayBuffer(finalPrivateKey),
    {
      name: "ECDSA",
      namedCurve: "P-256",
    },
    true,
    ["sign"],
  );

  // convert finalPublicKey to CryptoKey
  const importedPublicKey = await crypto.subtle.importKey(
    "spki",
    convertBase64ToArrayBuffer(finalPublicKey),
    {
      name: "ECDSA",
      namedCurve: "P-256",
    },
    true,
    ["verify"],
  );

  // signing a message
  const message = "Hello World!";
  const signature = await crypto.subtle.sign(
    {
      name: "ECDSA",
      hash: { name: "SHA-256" },
    },
    importedPrivateKey,
    new TextEncoder().encode(message),
  );

  // verifying the signature
  const isVerified = await crypto.subtle.verify(
    {
      name: "ECDSA",
      hash: { name: "SHA-256" },
    },
    importedPublicKey,
    signature,
    new TextEncoder().encode(message),
  );

  assert.strictEqual(isVerified, true, "verify failed");

  // ---------------- TEST ---------------- //
})();
