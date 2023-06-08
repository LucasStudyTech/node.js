/*Por padrão, se você não definir um código de status na resposta, o servidor enviará um código 200,
que indica que a solicitação foi bem-sucedida. No entanto, em algumas situações,
você pode precisar enviar um código de status diferente para indicar que a solicitação 
não foi bem-sucedida, como um código 404 (não encontrado)  se o recurso solicitado não existir. */





const http = require('http');
const port = 3030;


const server = http.createServer((request, res) => {

     if ( "GET" === request.method ) {
     
     res.statusCode = 200; // statusCODe define o codigo 
     
     
     res.setHeader = { "content-type": "application/json"}
     res.end("aqui esta o recurso solicitado");

     }
     
     else {
     
        res.statusCode = 404;
        res.setHeader = { 'content-type': 'application/json'} 
        res.end("erro")
     
     }





}).listen(port, () => {
    
    console.log("sevre rodando http://localhost:3030");

})