/* Existem muitos cabeçalhos HTTP que podem ser definidos em uma resposta.
Alguns dos cabeçalhos mais comuns incluem:

Content-Type: indica o tipo de mídia do corpo da resposta (por exemplo, texto, JSON, XML, etc.)
Content-Length: indica o tamanho do corpo da resposta em bytes
Cache-Control: controla como os caches intermediários devem armazenar a resposta
Set-Cookie: define um cookie a ser armazenado no navegador do cliente
Location: indica o URL para o qual o cliente deve ser redirecionado
Access-Control-Allow-Origin: indica quais origens são permitidas para acessar o recurso
*/

/* Os cabeçalhos HTTP são informações adicionais enviadas junto com uma solicitação
ou resposta HTTP. Eles fornecem metadados importantes sobre o conteúdo da mensagem 
e sobre como ela deve ser tratada.

Os cabeçalhos são definidos no lado do servidor usando o objeto de resposta response no Node.js. 
Você pode usar o método setHeader para definir cabeçalhos específicos, como o tipo de conteúdo,
a codificação de caracteres, a data de modificação, a origem do arquivo e muito mais. */ 

/* O trecho de código response.write('<html>'); 
é usado para escrever um bloco de dados no corpo da resposta HTTP que será enviada para o cliente.*/


const http = require('http')
const port = 3000;


const server = http.createServer(( req, res ) => { 

    const responseData = { message: 'Hello, World!' };
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 'no-cache');
    res.write(JSON.stringify(responseData));
    res.end();
        


}).listen(port, () => {
    console.log('Server')
})