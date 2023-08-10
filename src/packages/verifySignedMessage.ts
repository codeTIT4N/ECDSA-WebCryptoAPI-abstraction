import { convertBase64ToArrayBuffer } from "../utils";
import * as crypto from "crypto";

export const verifySignedMessage = async (
  pubKey: string,
  message: string,
  signature: string,
) => {
  const importedPublicKey = await crypto.subtle.importKey(
    "spki",
    convertBase64ToArrayBuffer(pubKey),
    {
      name: "ECDSA",
      namedCurve: "P-256",
    },
    true,
    ["verify"],
  );
  // verifying the signature
  const isVerified = await crypto.subtle.verify(
    {
      name: "ECDSA",
      hash: { name: "SHA-256" },
    },
    importedPublicKey,
    convertBase64ToArrayBuffer(signature),
    new TextEncoder().encode(message),
  );
  console.log("signature verified: ", isVerified);
};
