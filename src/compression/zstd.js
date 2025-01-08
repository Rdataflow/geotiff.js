import { ZSTDDecoder } from 'zstddec';
import BaseDecoder from './basedecoder.js';

export const zstd = new ZSTDDecoder();

export default class ZstdDecoder extends BaseDecoder {
  decodeBlock(buffer) {
    buffer = zstd.decode(new Uint8Array(buffer)).buffer;
    return buffer;
  }
}
