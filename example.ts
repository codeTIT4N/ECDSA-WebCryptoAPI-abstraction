import {
  generateECDSAKeypairBase64,
  signMessage,
  verifySignedMessage,
} from "./src";

async function main() {
  console.log("Overview of the functions in this package:");

  console.log(
    "\n----------------------------------------------------------------",
  );

  console.log("Generating Keypair: Function generateECDSAKeypairBase64()\n");

  let keypair = await generateECDSAKeypairBase64();
  console.log("Generated Keypair:", keypair);

  console.log(
    "\n----------------------------------------------------------------",
  );

  console.log(
    "Signing a message using the private key: Function signMessage()\n",
  );

  const messagetoSign = "Just a simple test message!";

  console.log("Message to Sign:", messagetoSign, "\n");

  let signature = await signMessage(messagetoSign, keypair.privateKey);

  console.log(
    "Signature created by signing the message using the private key:",
    signature,
  );

  console.log(
    "\n----------------------------------------------------------------",
  );

  console.log("Verifying the signature:\n");

  const isVerified = await verifySignedMessage(
    keypair.publicKey,
    messagetoSign,
    signature,
  );

  console.log("Function verifySignedMessage() returned:", isVerified);
}

main();
