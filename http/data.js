/*  

Buffer: é um objeto global no Node.js que permite a manipulação de dados binários (como bytes).

Concat: é um método disponível em buffers que concatena vários buffers em um único buffer.

 chunk : é um pedaço de dados da solicitação do cliente que é enviado em partes 
 (por exemplo, quando o corpo da solicitação é  muito grande para ser enviado de uma só vez).

O evento DATA: é frequentemente usado para ler chunks de dados de uma solicitação do cliente, 
e o método concat é usado para combinar esses chunks em um único buffer que pode ser processado.
Em seguida, o evento 'end' é usado para indicar que a solicitação do cliente foi completamente recebida.

 */

const http = require('http');

const server = http.createServer((request, response) => {
  let body = [];

  // ouvindo o evento 'data'
  request.on('data', (chunk) => {
    body.push(chunk);
  });

  // ouvindo o evento 'end' para processar os dados
  request.on('end', () => {
    body = Buffer.concat(body).toString();
    console.log(`Dados recebidos: ${body}`);


    response.writeHead(200, {'Content-Type': 'text/plain'});

    response.end('Dados recebidos com sucesso!');
    
  });
});

server.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
