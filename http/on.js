const http = require('http');
const port = 8080
const server = http.createServer()

/* .on = e feito para criar um evento quando for disparado,
e com esse evento disparado posso fazer outras coisas.
  Como definir o headers, method, url...
  const { headers, method, url } = request; */

server.on('request', (req, res) => {


    console.log('requisiçao recebida para ${req.url}')
    
    
    /*A função res.writeHead(statusCode, headers)é usada para definir os cabeçalhos da resposta HTTP
    que serão enviados pelo servidor. Ela tem dois requisitos obrigatórios:
      
      statusCode: um número que representa o código de status da resposta HTTP. Por exemplo, 200
      
      headers: um objeto que representa os cabeçalhos da resposta HTTP. Os cabeçalhos são pares de chave/valor 
      que fornecem informações adicionais sobre a resposta. Por exemplo, o cabeçalho  "application/json" para um 
      documento JSON.
    */ 
     res.writeHead(200, {'Content-Type': 'application/json'});
    /*Em resumo, res.end()é usado para enviar a resposta HTTP final
     para o cliente, quecontém tanto o cabeçalho quanto o corpo da resposta. 
    Se nenhum argumento for fornecido, ele envia uma resposta vazia. */
    res.end();

})

server.listen(port, () => {

    console.log('rodando na porta http://localhost:${port}')

})


