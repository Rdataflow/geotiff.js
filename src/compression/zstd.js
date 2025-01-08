import { ZSTDDecoder } from 'zstddec';
import BaseDecoder from './basedecoder.js';

export const zstd2 = new ZSTDDecoder();

export default class ZstdDecoder extends BaseDecoder {
  decodeBlock(buffer) {
    buffer = zstd2.decode(new Uint8Array(buffer)).buffer; // eslint-disable-line no-param-reassign, prefer-destructuring
    return buffer;
  }
}
