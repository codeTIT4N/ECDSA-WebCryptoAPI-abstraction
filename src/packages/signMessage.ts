import {
  convertArrayBufferToBase64,
  convertBase64ToArrayBuffer,
} from "../utils";
import * as crypto from "crypto";
import { SignMessageFn } from "../types";

export const signMessage: SignMessageFn = async (message, pvtKey) => {
  const importedPrivateKey = await crypto.subtle.importKey(
    "pkcs8",
    convertBase64ToArrayBuffer(pvtKey),
    {
      name: "ECDSA",
      namedCurve: "P-256",
    },
    true,
    ["sign"],
  );

  // signing a message
  const signature = await crypto.subtle.sign(
    {
      name: "ECDSA",
      hash: { name: "SHA-256" },
    },
    importedPrivateKey,
    new TextEncoder().encode(message),
  );

  let base64version = convertArrayBufferToBase64(signature);
  return base64version;
};
