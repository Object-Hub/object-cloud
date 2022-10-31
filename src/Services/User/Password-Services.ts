import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import { sendEmailForgotPassword } from '../../Utils/Email/Sendings/ForgotPassword-Email';
import { IPasswordRequest, IUserToken } from '../../Interfaces/Auth';
import { DataBase } from '../../Database';

const { users, tokens } = DataBase;

class PasswordService {
  async changePassword({ username, oldPassword, newPassword }: IPasswordRequest) {
    if (!oldPassword || !newPassword) throw new Error('É necessário preencher todos os campos para atualizar sua senha.');

    const data = await users.findOne({ username });

    if (!data) throw new Error('Usuário não existe.');

    const checkPasswordHash = bcrypt.compareSync(oldPassword, data.password);

    if (!checkPasswordHash) throw new Error('A senha atual está incorreta.');
    if (oldPassword === newPassword) throw new Error('A nova senha não pode ser igual a senha atual.');

    const newPasswordHash = bcrypt.hashSync(newPassword, 10);

    await users.updateOne({ _id: data._id }, { password: newPasswordHash });

    return {
      message: 'Senha alterada com sucesso',
    };
  }

  async forgotPassword(email: string) {
    const data = await users.findOne({ email, verifyEmail: true });
    if (!data) throw new Error('Usuário inválido ou email não verificado.');

    const token = jwt.sign(
      {
        id: data._id,
        email: data.email,
      },
      'ForgotPasswordToken',
      { expiresIn: '15m' },
    );

    const dataEmail = await sendEmailForgotPassword({
      id: data._id,
      name: data.name,
      email: data.email,
      token,
    });

    return {
      message: 'Email enviado com sucesso.',
      dataEmail,
    };
  }

  async forgotPasswordToken({ id, token, newPassword }: IUserToken) {
    const user = await users.findOne({ _id: id });
    const verifyToken = jwt.verify(token, 'ForgotPasswordToken');

    if (!user) throw new Error('Usuário inválido.');
    if (!verifyToken) throw new Error('Token inválido.');

    const newPasswordHash = bcrypt.hashSync(newPassword, 10);
    await users.updateOne({ _id: user._id }, { password: newPasswordHash });

    return {
      message: `Senha alterada com sucesso.\nRedirecionando você para pagina de Login.`,
    };
  }
}

export const passwordService = new PasswordService();
