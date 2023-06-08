const http = require('http');
const port =  process.env.PORT || 3000
let CRM = [ {nome: "Carlos Ferreira",  profissao: "Arquiteto",              idade: 45,    cidade: "Porto Alegre",     tipoComida: "Pizza",              estadoCivil: "Casado",     salario: 12000  },
            {nome: "Ana Maria",        profissao: "Farmacêutica",           idade: 33,    cidade: "Recife",           tipoComida: "Frutos do mar",      estadoCivil: "Solteira",   salario: 9000   },
            {nome: "Rafael Santos",    profissao: "Publicitário",           idade: 29,    cidade: "Salvador",         tipoComida: "Mexicana",           estadoCivil: "Solteiro",   salario: 6500   },
            {nome: "Luana Oliveira",   profissao: "Engenheira de Software", idade: 28,    cidade: "São Paulo",        tipoComida: "Japonesa",           estadoCivil: "Casada",     salario: 8500   },
            {nome: "Fernando Costa",   profissao: "Advogado",               idade: 40,    cidade: "Belo Horizonte",   tipoComida: "Italiana",           estadoCivil: "Solteiro",   salario: 11000  },
            {nome: "Juliana Lima",     profissao: "Médica Veterinária",     idade: 36,    cidade: "Florianópolis",    tipoComida: "Comida vegetariana", estadoCivil: "Casada",     salario: 9500   }, 
            {nome: "Roberto Alves",    profissao: "Psicólogo",              idade: 43,    cidade: "Rio de Janeiro",   tipoComida: "Churrasco",          estadoCivil: "Divorciado", salario: 8000   },
            {nome: "Mariana Torres",   profissao: "Nutricionista",          idade: 31,    cidade: "Brasília",         tipoComida: "Comida japonesa",    estadoCivil: "Solteira",   salario: 7000   },
            {nome: "Lucas Oliveira",   profissao: "Desenvolvedor",          idade: 27,    cidade: "Porto Alegre",     tipoComida: "Hamburguer",         estadoCivil: "Solteiro",   salario: 6000   },
            {nome: "Sandra Gomes",     profissao: "Dentista",               idade: 38,    cidade: "São Paulo",        tipoComida: "Comida italiana",    estadoCivil: "Casada",     salario: 11000  },
            {nome: "Diego Mendes",     profissao: "Professor",              idade: 34,    cidade: "Recife",           tipoComida: "Comida brasileira",  estadoCivil: "Solteiro",   salario: 7500   },
            {nome: "Marcela Castro",   profissao: "Jornalista",             idade: 29,    cidade: "Salvador",         tipoComida: "Pizza",              estadoCivil: "Solteira",   salario: 6000   }        
        ]  
      
        http.createServer((req, res) => { 

      
            if (req.method === 'OPTIONS') { 

               res.setHeader('access-control-allow-methods', 'GET');
                res.setHeader('Access-Control-Allow-Origin', '*');
                 res.writeHead(200)
                   res.end()
                     return;
                            }
            if (req.method === 'GET' && req.url === '/CRM') {
             
                res.setHeader('content-type', 'application/json')
                 res.setHeader('cache-control', 'no-cache'); 
                
                  res.end(JSON.stringify(CRM))
                 
                  return;
                }


}).listen(port, () => { 
  console.log('Servidor rodando na http://localhost:3000')
  console.log((CRM))
})