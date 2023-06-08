const http = require('http');
const server = http.createServer()
const port = 3000;


server.on('request', (req, res) => {
    req.on('error', (err) => {
        console.log(err.stack);
        res.statusCode = 404; //status do servidor 
        res.end('erro na solicitação');
    });

 }).listen(port, ( ) => {

    console.log('serve rodando na porta http://localhost:${port}');
})