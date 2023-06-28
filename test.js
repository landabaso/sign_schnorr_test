import { schnorr } from '@noble/curves/secp256k1';
import * as eccTiny from 'tiny-secp256k1';
const bipSchnorr = await import('bip-schnorr');

const hHex = '1bc291f3bef841a0fdb513ef5e4cb4d1a5e85b20f605643a254ee0f7bc108e35';
const dHex = '49d8ac1e3da79419258e030e45a93836759aa6c387ef3ec043def5bd9b175d68';
const h = Buffer.from(hHex, 'hex');
const d = Buffer.from(dHex, 'hex');

console.log(
  `NOBLE with Buffer.alloc(32, 0x00): ${Buffer.from(
    schnorr.sign(h, d, Buffer.alloc(32, 0x00))
  ).toString('hex')}`
);

console.log("-----");
console.log(`TINY with NO AUX: ${Buffer.from(eccTiny.signSchnorr(h, d)).toString('hex')}`);
console.log(`BIPSCHNORR with NO AUX: ${bipSchnorr.default.sign(dHex, h).toString('hex')}`);

console.log("-----");
console.log(
  `TINY with Buffer.alloc(32, 0x00): ${Buffer.from(
    eccTiny.signSchnorr(h, d, Buffer.alloc(32, 0x00))
  ).toString('hex')}`
);
console.log(
  `BIPSCHNORR with Buffer.alloc(32, 0x00): ${bipSchnorr.default
    .sign(dHex, h, Buffer.alloc(32, 0x00))
    .toString('hex')}`
);
