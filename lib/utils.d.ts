/// <reference types="node" />
import { Big } from 'big.js';
import * as elliptic from 'elliptic';
export declare function reverseB(buffer: Buffer): Buffer;
export declare type Point = elliptic.curve.edwards.Point;
export declare const sha256: () => any;
export declare const sha512: () => any;
export declare function B(data: any): Buffer;
export declare function N(n: Big | number | string): Big;
export declare function expandSecret(sk: Buffer): any;
export declare function generatePair(): [Buffer, Buffer, Buffer];
