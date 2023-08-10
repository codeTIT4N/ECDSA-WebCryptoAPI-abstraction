export const convertArrayBufferToBase64 = (
  arrayBuffer: ArrayBuffer,
): string => {
  return btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)));
};

export const convertBase64ToArrayBuffer = (base64: string): ArrayBuffer => {
  return Uint8Array.from(atob(base64), (c) => c.charCodeAt(0)).buffer;
};
