// 1-Iniciando o projeto
// 2-Init express
// 3-Rota com post
// 4-Rota para todos os verbos
// 5-Interface express
// 6-Enviando json
// 7-Routa com parametro dinamico
// 8-Rota mais complexa
// 9-Router handle
// 10-Middlewares
// 11 - Middlewares all rotes
// 12-Req e Res com generics
// 13-Tratamento de erros

// 1-Iniciando o projeto
console.log('Iniciando Express ');

// 2-Init express
import express, { NextFunction, Request, Response } from 'express';

// iniciando express
const app = express();

// 3-Rota com post
// Habilita trabalhar com json no projeto
app.use(express.json());

// 11 - Middlewares all rotes
function showPath(req: Request, res: Response, next: NextFunction) {
  console.log(req.path);
  next();
}

app.use(showPath);

// 3-Rota com post
app.post('/api/product', (req, res) => {
  console.log(req.body);

  return res.send('Produto adicionado');
});

// Rota
app.get('/', (req, res) => {
  return res.send('Seja bem vindo.');
});

// 4-Rota para todos os verbos
app.all('/api/product/check', (req, res) => {
  //req.method = verbo http

  if (req.method === 'POST') {
    return res.send('Inserindo registro');
  } else if (req.method === 'GET') {
    return res.send('Consultando registro');
  } else {
    return res.send('Não podemos realizar a operação');
  }
});

// 5-Interface express
app.get('/api/interfaces', (req: Request, res: Response) => {
  return res.send('Usando as interfaces');
});

// 6-Enviando json
app.get('/api/json', (req: Request, res: Response) => {
  return res.json({
    name: 'Camisa',
    price: 19.9,
    sizes: ['P', 'M', 'G'],
  });
});

// 7-Routa com parametro dinamico
app.get('/api/product/:id', (req: Request, res: Response) => {
  console.log(req.params);

  const id = req.params.id;
  if (id === '1') {
    const product = {
      id: 1,
      name: 'Camisa',
      price: 19.9,
    };

    return res.json(product);
  } else {
    return res.send('Produto não encontrado.');
  }
});

// 8-Rota mais complexa
app.get('/api/product/:id/review/:reviewId', (req: Request, res: Response) => {
  const productId = req.params.id;
  const reviewId = req.params.reviewId;

  return res.send(`A review ${reviewId} do produto ${productId}`);
});

// 9-Router handle
function getUser(req: Request, res: Response) {
  const user = req.params.id;

  return res.send(`Usuário ${user}`);
}

// 10-Middlewares
function checkUser(req: Request, res: Response, next: NextFunction) {
  if (req.params.id === '1') {
    console.log('Pode prosseguir');
    next();
  } else {
    console.log('Acesso negado.');
  }
}

app.get('/api/user/:id/acess', checkUser, (req: Request, res: Response) => {
  return res.json({ msg: 'Bem vindo a área administrativa.' });
});

app.get('/api/user/:id', getUser);

// 12-Req e Res com generics
app.get(
  '/api/user/:id/details/:name',
  (
    req: Request<{ id: string; name: string }>,
    res: Response<{ status: boolean }>,
  ) => {
    console.log(`ID:${req.params.id}`);
    console.log(`Name: ${req.params.name}`);

    return res.json({ status: true });
  },
);

// 13-Tratamento de erros
app.get('/api/error', (req: Request, res: Response) => {
  try {
    // lógica do código
    throw new Error('Algo deu errado.');
  } catch (e: any) {
    res.status(500).json({ msg: e.message });
  }
});

// Porta que vai rodar
app.listen(3000, () => {
  console.log('Aplicação de TS com express');
});
