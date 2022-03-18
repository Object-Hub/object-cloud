import ms from 'ms';
import jwt from 'jsonwebtoken';

import { DataBase } from '../../Database';
import { IChangeEmail } from '../../Interfaces/Email';
import { ConfirmationChangeEmail } from '../../Utils/Email/Sendings/ConfirmationChangeEmail-Email';

const { users } = DataBase;

class EmailService {
  async confirmEmail(id: string, token: string) {
    const user = await users.findOne({ _id: id });
    if (!user) throw new Error('Usuário inválido.');

    const verifyToken = jwt.verify(token, 'EmailSecretToken');
    if (!verifyToken) throw new Error('Token Inválido.');

    await user.updateOne({ $set: { verifyEmail: true } });
    return {
      message: 'Email verificado com sucesso.',
    };
  }

  async changeEmail({ newEmail, username }: IChangeEmail) {
    if (!newEmail || !username) throw new Error('É necessário preencher todos os campos para atualizar seu email.');

    const data = await users.findOne({ username });
    if (!data) throw new Error('Usuário não existe.');

    if (data.email === newEmail) throw new Error('O novo email não pode ser igual ao antigo.');

    const expireToken = ms('15m') + Date.now();
    const token = jwt.sign(
      {
        id: data._id,
        email: data.email,
      },
      'EmailChangeToken',
      { expiresIn: '15m' },
    );

    await data.updateOne({ $set: { email: newEmail, verifyEmail: false } });
    await ConfirmationChangeEmail({ id: data._id, email: newEmail, name: data.name, token });

    return {
      message: 'Para confirmar alteração verifique seu endereço de email.',
    };
  }
}

export const emailService = new EmailService();
