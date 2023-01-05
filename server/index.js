//dependencies
const express = require('express');
const app = express();
const WebSocket = require('ws');
const SocketServer = require('ws').Server;
const server = app.listen(process.env.PORT || 80);
const fs = require('fs');
var id = 0;
var lookup = {};

const wss = new SocketServer({server});

app.set('view engine', 'ejs');

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.render('LetterGame.ejs');
})

wss.on('connection', (ws) =>{
    console.log('[Server] A client was connected');
    ws.id = id++;
    lookup[ws.id] = ws;
    ws.on('close', () =>{
        console.log('[Server] A client has disconnected');
    });

    ws.on('message', (message)=>{
        console.log('[Server] received message: %s', message);
        let msg = message.toString();
        let packet = "";
        let re = new RegExp('(\r\n|\n|\r)' + msg + '(\r\n|\n|\r)');
        let letter = msg.slice(0,1);
        if(letter == "a"){
            if(re.test(a)){
                packet = "True";
            } else{packet = "False";}
        } else if(letter == 'b'){
            if(re.test(b)){
                packet = "True";
            } else{packet = "False";}
        } else if(letter == 'c'){
            if(re.test(c)){
                packet = "True";
            } else{packet = "False";}
        } else if(letter == 'd'){
            if(re.test(d)){
                packet = "True";
            } else{packet = "False";}
        } else if(letter == 'e'){
            if(re.test(e)){
                packet = "True";
            } else{packet = "False";}
        } else if(letter == 'f'){
            if(re.test(f)){
                packet = "True";
            } else{packet = "False";}
        } else if(letter == 'g'){
            if(re.test(g)){
                packet = "True";
            } else{packet = "False";}
        } else if(letter == 'h'){
            if(re.test(h)){
                packet = "True";
            } else{packet = "False";}
        } else if(letter == 'i'){
            if(re.test(i)){
                packet = "True";
            } else{packet = "False";}
        } else if(letter == 'j'){
            if(re.test(j)){
                packet = "True";
            } else{packet = "False";}
        } else if(letter == 'k'){
            if(re.test(k)){
                packet = "True";
            } else{packet = "False";}
        } else if(letter == 'l'){
            if(re.test(l)){
                packet = "True";
            } else{packet = "False";}
        } else if(letter == 'm'){
            if(re.test(m)){
                packet = "True";
            } else{packet = "False";}
        } else if(letter == 'n'){
            if(re.test(n)){
                packet = "True";
            } else{packet = "False";}
        } else if(letter == 'o'){
            if(re.test(o)){
                packet = "True";
            } else{packet = "False";}
        } else if(letter == 'p'){
            if(re.test(p)){
                packet = "True";
            } else{packet = "False";}
        } else if(letter == 'q'){
            if(re.test(q)){
                packet = "True";
            } else{packet = "False";}
        } else if(letter == 'r'){
            if(re.test(r)){
                packet = "True";
            } else{packet = "False";}
        } else if(letter == 's'){
            if(re.test(s)){
                packet = "True";
            } else{packet = "False";}
        } else if(letter == 't'){
            if(re.test(t)){
                packet = "True";
            } else{packet = "False";}
        } else if(letter == 'u'){
            if(re.test(u)){
                packet = "True";
            } else{packet = "False";}
        } else if(letter == 'v'){
            if(re.test(v)){
                packet = "True";
            } else{packet = "False";}
        } else if(letter == 'w'){
            if(re.test(w)){
                packet = "True";
            } else{packet = "False";}
        } else if(letter == 'x'){
            if(re.test(x)){
                packet = "True";
            } else{packet = "False";}
        } else if(letter == 'y'){
            if(re.test(y)){
                packet = "True";
            } else{packet = "False";}
        } else if(letter == 'z'){
            if(re.test(z)){
                packet = "True";
            } else{packet = "False";}
        }
        
        lookup[ws.id].send(msg + "," + packet);
        
    })
})

let a = "";
let b = "";
let c = "";
let d = "";
let e = "";
let f = "";
let g = "";
let h = "";
let i = "";
let j = "";
let k = "";
let l = "";
let m = "";
let n = "";
let o = "";
let p = "";
let q = "";
let r = "";
let s = "";
let t = "";
let u = "";
let v = "";
let w = "";
let x = "";
let y = "";
let z = "";

fs.readFile('dictionaries/a/dict.txt', 'utf8', (err,data) => {
    if(err){console.error(err); return;}
    a = data;
})
fs.readFile('dictionaries/b/dict.txt', 'utf8', (err,data) => {
    if(err){console.error(err); return;}
    b = data;
})
fs.readFile('dictionaries/c/dict.txt', 'utf8', (err,data) => {
    if(err){console.error(err); return;}
    c = data;
})
fs.readFile('dictionaries/d/dict.txt', 'utf8', (err,data) => {
    if(err){console.error(err); return;}
    d = data;
})
fs.readFile('dictionaries/e/dict.txt', 'utf8', (err,data) => {
    if(err){console.error(err); return;}
    e = data;
})
fs.readFile('dictionaries/f/dict.txt', 'utf8', (err,data) => {
    if(err){console.error(err); return;}
    f = data;
})
fs.readFile('dictionaries/g/dict.txt', 'utf8', (err,data) => {
    if(err){console.error(err); return;}
    g = data;
})
fs.readFile('dictionaries/h/dict.txt', 'utf8', (err,data) => {
    if(err){console.error(err); return;}
    h = data;
})
fs.readFile('dictionaries/i/dict.txt', 'utf8', (err,data) => {
    if(err){console.error(err); return;}
    i = data;
})
fs.readFile('dictionaries/j/dict.txt', 'utf8', (err,data) => {
    if(err){console.error(err); return;}
    j = data;
})
fs.readFile('dictionaries/k/dict.txt', 'utf8', (err,data) => {
    if(err){console.error(err); return;}
    k = data;
})
fs.readFile('dictionaries/l/dict.txt', 'utf8', (err,data) => {
    if(err){console.error(err); return;}
    l = data;
})
fs.readFile('dictionaries/m/dict.txt', 'utf8', (err,data) => {
    if(err){console.error(err); return;}
    m = data;
})
fs.readFile('dictionaries/n/dict.txt', 'utf8', (err,data) => {
    if(err){console.error(err); return;}
    n = data;
})
fs.readFile('dictionaries/o/dict.txt', 'utf8', (err,data) => {
    if(err){console.error(err); return;}
    o = data;
})
fs.readFile('dictionaries/p/dict.txt', 'utf8', (err,data) => {
    if(err){console.error(err); return;}
    p = data;
})
fs.readFile('dictionaries/q/dict.txt', 'utf8', (err,data) => {
    if(err){console.error(err); return;}
    q = data;
})
fs.readFile('dictionaries/r/dict.txt', 'utf8', (err,data) => {
    if(err){console.error(err); return;}
    r = data;
})
fs.readFile('dictionaries/s/dict.txt', 'utf8', (err,data) => {
    if(err){console.error(err); return;}
    s = data;
})
fs.readFile('dictionaries/t/dict.txt', 'utf8', (err,data) => {
    if(err){console.error(err); return;}
    t = data;
})
fs.readFile('dictionaries/u/dict.txt', 'utf8', (err,data) => {
    if(err){console.error(err); return;}
    u = data;
})
fs.readFile('dictionaries/v/dict.txt', 'utf8', (err,data) => {
    if(err){console.error(err); return;}
    v = data;
})
fs.readFile('dictionaries/w/dict.txt', 'utf8', (err,data) => {
    if(err){console.error(err); return;}
    w = data;
})
fs.readFile('dictionaries/x/dict.txt', 'utf8', (err,data) => {
    if(err){console.error(err); return;}
    x = data;
})
fs.readFile('dictionaries/y/dict.txt', 'utf8', (err,data) => {
    if(err){console.error(err); return;}
    y = data;
})
fs.readFile('dictionaries/z/dict.txt', 'utf8', (err,data) => {
    if(err){console.error(err); return;}
    z = data;
})