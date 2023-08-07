import * as fs from "fs";
import * as crypto from "crypto";

(async () => {
  const keypair = fs.readFileSync("./keypair.json", "utf8");
  console.log("keypair -----> ", keypair);
  /*
  const pubKey = keypair.publicKey;
  const pvtKey = keypair.privateKey;
  console.log("pub key ------> ", pubKey);
  console.log("pvt key ------>", pvtKey);

  // import the private key and sign a message
  const importedPrivateKey = await crypto.subtle.importKey(
    "pkcs8",
    new Uint8Array(
      atob(pvtKey)
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
  const importedPublicKey = await crypto.subtle.importKey(
    "spki",
    new Uint8Array(
      atob(pubKey)
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

  const isVerified = await crypto.subtle.verify(
    {
      name: "ECDSA",
      hash: { name: "SHA-256" },
    },
    importedPublicKey,
    signature,
    new TextEncoder().encode(message),
  );

  console.log("isVerified: ", isVerified);
  */
})();
