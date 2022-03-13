import ms from 'ms';
import jwt from 'jsonwebtoken';

import { DataBase } from '../../Database';
import { IChangeEmail } from '../../Interfaces/Email';
import { ConfirmationChangeEmail } from '../../Utils/Email/Sendings/ConfirmationChangeEmail-Email';

const { tokens, users } = DataBase;

class EmailService {
  async confirmEmail(id: string) {
    const user = await users.findOne({ _id: id });
    if (!user) throw new Error('Usuário inválido.');

    await user.updateOne({ $set: { verifyEmail: true } });
    await tokens.updateOne({ _id: user._id }, { token: null, expireAt: null });

    return {
      message: 'Email verificado com sucesso.',
    };
  }

  async changeEmail({ newEmail, username }: IChangeEmail) {
    if (!newEmail || !username) throw new Error('É necessário preencher todos os campos para atualizar seu email.');

    const data = await users.findOne({ username });
    if (!data) throw new Error('Usuário não existe.');

    const expireToken = ms('15m') + Date.now();
    const token = jwt.sign(
      {
        id: data._id,
        email: data.email,
      },
      'EmailChangeToken',
      { expiresIn: '15m' },
    );

    await data.updateOne({ $set: { verifyEmail: false } });
    await tokens.updateOne({ _id: data._id }, { $set: { token, expireAt: expireToken } }, { upsert: true });

    await ConfirmationChangeEmail({ id: data._id, email: data.email, name: data.name, token });

    return {
      message: 'Para confirmar alteração verifique seu endereço de email.',
    };
  }
}

export const emailService = new EmailService();
