export interface KeypairBase64 {
  publicKey: string;
  privateKey: string;
}

export interface KeypairArrayBuffer {
  publicKey: ArrayBuffer;
  privateKey: ArrayBuffer;
}
