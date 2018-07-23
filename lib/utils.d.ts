/// <reference types="node" />
import { Big } from 'big.js';
import * as crypto from 'crypto';
import * as elliptic from 'elliptic';
export declare function reverseB(buffer: Buffer): Buffer;
export declare type Point = elliptic.curve.edwards.Point;
export declare const sha256: () => crypto.Hash;
export declare const sha512: () => crypto.Hash;
export declare function B(data: any): Buffer;
export declare function N(n: Big | number | string): Big;
export declare function expandSecret(sk: Buffer): Buffer;
export declare function generatePair(): [Buffer, Buffer, Buffer];
