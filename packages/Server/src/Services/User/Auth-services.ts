import { users } from '../../Database/Cache/User-Cache';
import { IUserRegister, IUserLogin } from '../../interfaces/User';
import { v4 as Uuidv4 } from 'uuid';

const { cache } = users;

class AuthService {
  register({ name, username, email, password, panels }: IUserRegister) {
    if (cache.find((user) => user.username === username)) throw new Error('Já Existe um usuário com este Nick.');
    if (cache.find((user) => user.email === email)) throw new Error('Já existe um usuário com este email.');

    const user = {
      _id: Uuidv4(),
      name,
      username,
      email,
      password,
      panels,
      createdAt: new Date().toLocaleDateString('pt-BR'),
    };

    cache.push(user);

    return {
      message: 'Usuário cadastrado com sucesso.',
      _id: user._id,
      name: user.name,
      username: user.username,
      password: user.password,
      email: user.email,
      panels: user.panels,
      createdAt: user.createdAt,
    };
  }

  login({ username, email, password }: IUserLogin) {
    const CheckUsernameOrEmail = cache.find((user) => user.email === email || user.username === username);

    if (!CheckUsernameOrEmail) throw new Error('Usuário ou Email inválidos.');

    const CheckPassword = CheckUsernameOrEmail.password === password;

    if (!CheckPassword) throw new Error('Senha inválida.');

    return {
      message: 'Login efetuado.',
    };
  }
}

export const authService = new AuthService();
