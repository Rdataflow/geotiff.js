import { ZSTDDecoder } from 'zstddec';
import BaseDecoder from './basedecoder.js';

export const zstd = new ZSTDDecoder();

export default class ZstdDecoder extends BaseDecoder {
  decodeBlock(buffer, uncompressedByteCount) {
    return zstd.decode(new Uint8Array(buffer), uncompressedByteCount).buffer;
  }
}
