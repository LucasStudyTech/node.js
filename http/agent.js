/*

O http.Agent é um objeto em Node.js responsável por gerenciar a persistência e reutilização de conexões para clientes HTTP.
Ele mantém uma fila de solicitações pendentes para um determinado host e porta


Uma conexão de soquete é estabelecida quando um cliente envia uma solicitação para um servidor
através de um endereço IP e número de porta específicos.

keepAlive: true: essa opção permite que as conexões TCP sejam mantidas abertas para reutilização,mesmo quando não há solicitações
pendentes. Isso significa que, após uma solicitação ser concluída, a conexão não será imediatamente fechada, mas ficará aberta por 
um período determinado, permitindo que novas solicitações sejam enviadas por essa conexão, sem a necessidade de estabelecer uma nova
conexão TCP. Essa opção é útil em aplicativos que fazem muitas solicitações HTTP em um curto período de tempo, pois reduz a sobrecarga 
de estabelecer novas conexões TCP repetidamente.

maxSockets: 5: essa opção define o número máximo de conexões simultâneas permitidas por host. Se o mesmo host abrir várias conexões 
simultâneas, cada solicitação usará um novo soquete até que o número máximo seja atingido. Após atingir o limite, solicitações adicionais
ficarão na fila de solicitações pendentes, e entrarão no estado de conexão ativa quando uma conexão existente for encerrada

maxFreeSockets: 2: essa opção define o número máximo de soquetes por host a serem deixados abertos em um estado livre.
Essa opção é relevante apenas se keepAlive estiver definido como true. Se um novo soquete for necessário e houver um soquete
livre disponível, ele será usado imediatamente em vez de criar um novo soquete. No entanto, se o número de soquetes livres exceder
o valor definido em maxFreeSockets, os soquetes excedentes serão fechados. Essa opção é útil para limitar o número de conexões ociosas,
reduzindo o uso de recursos e melhorando o desempenho geral.
*/

/* quando um cliente faz um requisiçao ao servdio, o servido precessa aquilo consultando banco de dado e etc
e volta pro cliente oq ele pediu, so que nessa de pedir e responder existe uma conexao, e quando o servidor responder
a conexao e fechada. 

o soquete serve para isso para deixa a conexao aberta quando e respondido, e com isso tem vantagem de o servidor 
mandar algo sem o cliente pedir 
*/
const http = require('http');

// Objeto de configuração das requisições
const options = {
  hostname: 'localhost',
  port: 3030,
  path: '/users',
  method: 'GET',
};

// Realiza a requisição HTTP
const req = http.request(options, (res) => {
  console.log(`Status code: ${res.statusCode}`);
  console.log('Headers: ');
  console.log(res.headers);

  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    console.log(`Body: ${chunk}`);
  });
});

req.on('error', (error) => {
  console.error(error);
});

req.end();