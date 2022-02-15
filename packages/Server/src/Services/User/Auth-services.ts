import { users } from '../../Database/Cache/User-Cache';
import { IUserRegister, IUserLogin } from '../../Interfaces/User';
import { v4 as Uuidv4 } from 'uuid';
import * as bcrypt from 'bcrypt';

const { db, cache } = users;

class AuthService {
  register({ name, username, email, password }: IUserRegister) {
    if (cache.find((user) => user.username === username)) throw new Error('Já Existe um usuário com este Nick.');
    if (cache.find((user) => user.email === email)) throw new Error('Já existe um usuário com este email.');

    const user = {
      _id: Uuidv4(),
      name,
      username,
      email,
      password: bcrypt.hashSync(password, 10),
      createdAt: new Date().toLocaleDateString('pt-BR'),
    };

    cache.push(user);

    new db({
      _id: user._id,
      name: user.name,
      username: user.username,
      email: user.email,
      password: user.password,
      createdAt: user.createdAt,
    }).save();

    return {
      message: 'Usuário cadastrado com sucesso.',
      user,
    };
  }

  login({ username, email, password }: IUserLogin) {
    const CheckUsernameOrEmail = cache.find((user) => user.email === email || user.username === username);
    const CheckPassword = CheckUsernameOrEmail && bcrypt.compareSync(password, CheckUsernameOrEmail.password);

    if (!CheckUsernameOrEmail) throw new Error('Usuário ou Email inválidos.');
    if (!CheckPassword) throw new Error('Senha inválida.');

    return {
      message: 'Login efetuado.',
      user: CheckUsernameOrEmail,
    };
  }
}

export const authService = new AuthService();
