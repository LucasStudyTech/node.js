const http = require('http');
 
 
 /*O CORS (Cross-Origin Resource Sharing) é uma política de segurança implementada
 nos navegadores que restringe o acesso de recursos (como requisições HTTP) em uma página web 
 a partir de um domínio diferente. Ou seja, por padrão, um navegador web impede que um código 
 JavaScript em um site acesse recursos de outro site, por motivos de segurança.*/
 
/* Quando você faz uma requisição HTTP de um domínio (site) para outro,
o navegador envia uma solicitação de verificação (preflight request) usando
o método HTTP OPTIONS, antes de enviar a requisição real com o método GET, POST ou outro.
Essa solicitação prévia é para verificar se o servidor de destino permite a requisição real.*/
 
const server = http.createServer((req, res) => {
  
  /* essa solicitação OPTIONS, e configura os cabeçalhos Access-Control-Allow-Methods e
  Access-Control-Allow-Headers, que indicam quais métodos e quais tipos de cabeçalhos são
  permitidos. Depois, é definido  o cabeçalho Access-Control-Allow-Origin para permitir
  qualquer origem (qualquer domínio  pode fazer essa solicitação). Por fim, 
  é enviada uma resposta com o código de status 200 usando writeHead e finalizando a resposta com end.
        E UM PRE VOOO PARA VERIFICA A SEGURANÇA*/
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200);
    res.end();
    return;
  }

/*No segundo bloco do código, é processada a requisição real que é enviada após a solicitação prévia.
Então, também é definido o cabeçalho Access-Control-Allow-Origin para permitir qualquer origem, e depois
é enviado o conteúdo da resposta com o cabeçalho Content-Type definido como application/json. 
  AQUI E O VOOU REAL 
*/
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  
  if (req.url === '/api/user') {
    const responseData = { name: 'John Doe', age: 30 };
    res.write(JSON.stringify(responseData));
  } else {
    res.write('Page not found');
  }
  
  res.end();
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
