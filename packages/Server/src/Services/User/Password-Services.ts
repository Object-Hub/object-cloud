import { IPasswordRequest, IForgotPassword, IForgotPasswordToken } from '../../Interfaces/Auth';
import { DataBase } from '../../Database/Connections/Connect';
import { sendEmail } from '@src/Utils/sendEmail';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const { users } = DataBase;
class PasswordService {
  async changePassword({ username, email, oldPassword, newPassword }: IPasswordRequest) {
    if (!oldPassword || !newPassword)
      throw new Error('É necessário preencher todos os campos para atualizar sua senha.');

    const oldPasswordHash = bcrypt.hashSync(oldPassword, 10);
    const data = await users.findOne({ username, password: oldPasswordHash });
    if (!data) throw new Error('Usuário inválido.');

    const checkPasswordHash = bcrypt.compareSync(oldPassword, data.password);
    if (!checkPasswordHash) throw new Error('As senha não coincidem');

    const newPasswordHash = bcrypt.hashSync(newPassword, 10);

    await users.updateOne({ _id: data._id }, { password: newPasswordHash });

    return {
      message: 'Senha alterada com sucesso',
    };
  }

  async forgotPassword({ email }: IForgotPassword) {
    const data = await users.findOne({ email });
    if (!data) throw new Error('Usuário Inválido');

    const token = jwt.sign(
      {
        id: data._id,
        email: data.email,
      },
      'secret',
      { expiresIn: '1m' },
    );

    const dataEmail = await sendEmail({ email, token });

    return {
      message: 'Email enviado com sucesso.',
      dataEmail,
    };
  }

  // async forgotPasswordToken({ token }: IForgotPasswordToken) {}
}

export const passwordService = new PasswordService();
