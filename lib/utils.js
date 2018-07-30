"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const big_js_1 = require("big.js");
const buffer_1 = require("buffer");
const elliptic = require("elliptic");
const constant_1 = require("./constant");
const shajs = require('sha.js');
function reverseB(buffer) {
    return B(buffer).reverse();
}
exports.reverseB = reverseB;
exports.sha256 = () => shajs('sha256');
exports.sha512 = () => shajs('sha512');
function B(data) {
    if (typeof data === 'string') {
        return buffer_1.Buffer.from(data, 'hex');
    }
    return buffer_1.Buffer.from(data);
}
exports.B = B;
function N(n) {
    switch (typeof n) {
        case 'number':
        case 'string':
            return new big_js_1.Big(n);
        default:
            return n;
    }
}
exports.N = N;
function expandSecret(sk) {
    const secret = exports.sha512().update(sk.slice(0, 32)).digest();
    secret[0] &= 248;
    secret[31] &= 127;
    secret[31] |= 64;
    return secret.slice(0, 32);
}
exports.expandSecret = expandSecret;
function generatePair() {
    const sec = elliptic.rand(32);
    const pair = constant_1.EDDSA.keyFromSecret(sec);
    const publicKey = B(pair.getPublic());
    const secretKey = B(pair.getSecret());
    const privateKey = buffer_1.Buffer.concat([secretKey, publicKey]);
    return [publicKey, privateKey, secretKey];
}
exports.generatePair = generatePair;
