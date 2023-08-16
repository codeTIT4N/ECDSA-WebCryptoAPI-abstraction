export interface KeypairBase64 {
  publicKey: string;
  privateKey: string;
}

export type GenerateECDSAKeypairFn = () => Promise<KeypairBase64>;

export type SignMessageFn = (
  message: string,
  pvtKey: string,
) => Promise<string>;

export type VerifySignedMessageFn = (
  pubKey: string,
  message: string,
  signature: string,
) => Promise<boolean>;
