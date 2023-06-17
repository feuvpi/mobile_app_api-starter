import { FastifyRequest, FastifyReply } from 'fastify';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET as string;

export function authenticateUser(request: FastifyRequest, reply: FastifyReply, done: () => void) {
 
  // -- Verificar se o caminho é de login ou registro
  if (request.url === '/login' || request.url === '/register') {
    // -- Se for uma rota de login ou registro, permitir o fluxo sem verificar o token
    done();
    return;
  }

  const token = request.headers['authorization'];
  if (!token) {
    reply.code(401).send({ error: 'Token de autenticação não fornecido.' });
    return;
  }

  try {
    const tokenWithoutPrefix = token.split(' ')[1];
    const decoded = jwt.verify(tokenWithoutPrefix, JWT_SECRET);

    // -- Adicionar os dados decodificados do token à solicitação para uso posterior
    request.user = decoded;

    // -- Continar para a próxima rota
    done();
  } catch (error) {
    reply.code(401).send({ error: 'Token de autenticação inválido.' });
  }
}

