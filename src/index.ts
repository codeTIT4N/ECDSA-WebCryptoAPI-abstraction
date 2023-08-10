import {
  generateECDSAKeypairBase64,
  signMessage,
  verifySignedMessage,
} from "./packages";

async function main() {
  let keypair = await generateECDSAKeypairBase64();
  console.log(keypair);
  const message = "Hello!";
  let signature = await signMessage(message, keypair.privateKey);
  console.log(signature);
  verifySignedMessage(keypair.publicKey, message, signature);
}

main();
