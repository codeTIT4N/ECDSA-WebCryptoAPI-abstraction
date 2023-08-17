import * as crypto from "crypto";
import * as assert from "assert";
import {
  convertArrayBufferToBase64,
  convertBase64ToArrayBuffer,
} from "../utils";
import { GenerateECDSAKeypairFn } from "../types";

export const generateECDSAKeypairBase64: GenerateECDSAKeypairFn = async () => {
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

  // export private key
  const exportedPrivateKey = await crypto.subtle.exportKey(
    "pkcs8",
    keypair.privateKey,
  );

  const finalPrivateKey = convertArrayBufferToBase64(exportedPrivateKey);

  // export final keys to a json file
  const finalKeys = {
    publicKey: finalPublicKey,
    privateKey: finalPrivateKey,
  };

  return finalKeys;
};
