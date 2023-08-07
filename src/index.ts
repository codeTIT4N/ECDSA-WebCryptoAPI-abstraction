import * as crypto from "crypto";
import * as fs from "fs";
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

  // exporting the public key
  const exportedPublicKey = await crypto.subtle.exportKey(
    "spki",
    keypair.publicKey,
  );
  // convert exportedPublicKey to something that can be stored in a database
  const exportedPublicKeyAsBase64 = btoa(
    String.fromCharCode(...new Uint8Array(exportedPublicKey)),
  );
  console.log("pub key db", exportedPublicKeyAsBase64);

  // convert it back to a CryptoKey
  const importedPublicKey = await crypto.subtle.importKey(
    "spki",
    new Uint8Array(
      atob(exportedPublicKeyAsBase64)
        .split("")
        .map((c) => c.charCodeAt(0)),
    ),
    {
      name: "ECDSA",
      namedCurve: "P-256",
    },
    true,
    ["verify"],
  );
  console.log(importedPublicKey);

  // do the same for the private key
  const exportedPrivateKey = await crypto.subtle.exportKey(
    "pkcs8",
    keypair.privateKey,
  );
  const exportedPrivateKeyAsBase64 = btoa(
    String.fromCharCode(...new Uint8Array(exportedPrivateKey)),
  );

  console.log("pvt key db", exportedPrivateKeyAsBase64);

  const importedPrivateKey = await crypto.subtle.importKey(
    "pkcs8",
    new Uint8Array(
      atob(exportedPrivateKeyAsBase64)
        .split("")
        .map((c) => c.charCodeAt(0)),
    ),
    {
      name: "ECDSA",
      namedCurve: "P-256",
    },
    true,
    ["sign"],
  );

  // sign a message using importedPrivateKey
  const message = "Hello World!";
  const signature = await crypto.subtle.sign(
    {
      name: "ECDSA",
      hash: { name: "SHA-256" },
    },
    importedPrivateKey,
    new TextEncoder().encode(message),
  );

  // verify the signature using importedPublicKey
  const isVerified = await crypto.subtle.verify(
    {
      name: "ECDSA",
      hash: { name: "SHA-256" },
    },
    importedPublicKey,
    signature,
    new TextEncoder().encode(message),
  );
  console.log(isVerified);

  // export the exportedPrivateKeyAsBase64 and exportedPublicKeyAsBase64 to a json file
  const json = JSON.stringify({
    publicKey: exportedPublicKeyAsBase64,
    privateKey: exportedPrivateKeyAsBase64,
  });
  console.log(json);

  // put this json file in the this folder and name it keypair.json
  fs.writeFileSync("keypair.json", json);
})();
