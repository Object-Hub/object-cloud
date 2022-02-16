import { DataBase } from '../../Database/Connections/Connect';
import { IUserRegister, IUserLogin } from '../../Interfaces/User';
import { v4 as Uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const { users } = DataBase;

class AuthService {
  async register({ name, username, email, password }: IUserRegister) {
    const data = {
      checkEmail: await users.findOne({ email }),
      checkUsername: await users.findOne({ username }),
    };

    if (data.checkEmail) throw new Error('Já existe um usuário com este email.');
    if (data.checkUsername) throw new Error('Já existe um usuário com este apelido.');

    const user = {
      _id: Uuidv4(),
      name,
      username,
      email,
      password: bcrypt.hashSync(password, 10),
      createdAt: new Date().toLocaleDateString('pt-BR'),
    };

    new users({
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

  async login({ username, email, password }: IUserLogin) {
    const CheckUsernameOrEmail = await users.findOne({ $or: [{ username }, { email }] });
    const CheckPassword = CheckUsernameOrEmail && bcrypt.compareSync(password, CheckUsernameOrEmail.password);

    if (!CheckUsernameOrEmail) throw new Error('Usuário ou Email inválido.');
    if (!CheckPassword) throw new Error('Senha inválida.');

    const token = jwt.sign(
      {
        name: CheckUsernameOrEmail.name,
        username: CheckUsernameOrEmail.username,
        email: CheckUsernameOrEmail.email,
      },
      'secret',
      { expiresIn: '1d' },
    );

    return {
      message: 'Login efetuado.',
      user: CheckUsernameOrEmail,
      token,
    };
  }
}

export const authService = new AuthService();
