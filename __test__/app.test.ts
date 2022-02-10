import request from 'supertest';
import { app } from '../src/Server/index';
import { v4 as Uuidv4, validate } from 'uuid';

// Post /account/register or /account/login

test('Create user', async () => {
  const response = await request(app).post('/account/register').send({
    name: 'Teste',
    email: 'henTiago@gmail.com',
    password: '123456',
  });

  expect(response.status).toBe(201);
  expect(validate(response.body.id)).toBe(true);

  expect(response.body).toMatchObject({
    message: 'Usuário cadastrado com sucesso.',
    name: 'Teste',
    email: 'henTiago@gmail.com',
    id: response.body.id,
    password: '123456',
    createdAt: new Date().toLocaleDateString('pt-BR'),
  });
});
