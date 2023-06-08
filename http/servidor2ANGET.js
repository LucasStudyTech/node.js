const http = require('http');

function createServer() {
  const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'content-type');
    if (req.method === 'OPTIONS') {
      res.writeHead(200);
      res.end();
      return;
    }
    if (req.url === '/hello') {
      if (req.method === 'POST') {
        let body = [];
        req.on('data', chunk => {
          body = body + chunk.toString();
        });
        req.on('end', () => {
          const name = JSON.parse(body).name;
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify(name));
        });
      } 
    } 
     
            
    if(req.url === '/peg') {
      if(req.method === 'GET'){
        let body = [1,2,3,4,5]
        res.end(JSON.stringify(body));
      }
    }
  });

  server.listen('3030', () => {
    console.log('Servidor rodando na porta 3030');
  });
}

createServer();
const options = {
  method: 'POST',
  hostname: 'localhost',
  path: '/hello',
  port: 3030,
 
  agent: new http.Agent({
    keepAlive: true,
    keepAliveMsecs: 1000,
    maxSockets: 2,
    maxFreeSockets: 256,
    timeout: 60000,
    freeSocketTimeout: 30000,
    keepAliveTimeout: 30000
  })
};


const req = http.request(options, (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    console.log(data);
    console.log('primeir')
  });
});

req.on('error', (err) => {
  console.error(err);
});

req.end();
