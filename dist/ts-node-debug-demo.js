"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const fs_1 = __importDefault(require("fs"));
//let http = require('http');
console.log(fs_1.default);
let server = http_1.default.createServer((req, res) => {
    let s = 'aaaaaa';
    console.log('req coming');
    res.end(s);
});
server.listen(8880);
//# sourceMappingURL=ts-node-debug-demo.js.map