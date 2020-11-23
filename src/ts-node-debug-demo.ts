import http from 'http';
import fs from 'fs'
//let http = require('http');


console.log(fs);

let server = http.createServer((req, res)=>{
	let s : string = 'aaaaaa'
	console.log('req coming')
	res.end(s);
});

server.listen(8880)