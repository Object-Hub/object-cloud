import { DataBase } from '../../Database/Connections/Connect';

const { tokens, users } = DataBase;

class EmailService {
  async confirmEmail(id: string) {
    const user = await users.findOne({ _id: id });
    if (!user) throw new Error('Usuário inválido.');

    await users.updateOne({ _id: id }, { $set: { verifyEmail: true } });
    await tokens.updateOne({ _id: user._id }, { token: null, expireAt: null });

    return {
      message: 'Email verificado com sucesso.',
    };
  }

  async changeEmail() {}
}

export const emailService = new EmailService();
