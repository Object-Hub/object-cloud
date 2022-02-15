import { IPasswordRequest, IForgotPassword } from '../../Interfaces/Auth';
import { users } from '../../Database/Cache/User-Cache';
import bcrypt from 'bcrypt';
import { createTransport } from 'nodemailer';

const { db, cache, findByEmail } = users;

class PasswordService {
  changePassword({ oldPassword, newPassword }: IPasswordRequest) {
    const found = cache.find((user) => user.password === oldPassword);

    if (!found) throw new Error('Usuário não encontrado, tente novamente.');
    if (found.password !== oldPassword) throw new Error('Senha incorreta.');
    if (found.password === newPassword) throw new Error('A senha atual não pode ser igual a antiga.');

    found.password = newPassword;

    return {
      message: 'Senha alterada com sucesso.',
    };
  }

  async forgotPassword({ email }: IForgotPassword) {
    const found = findByEmail(email);

    const transporter = createTransport({
      service: 'gmail',
      auth: {
        user: 'controlpanelbr@gmail.com',
        pass: 'TesteNode1234',
      },
    });

    const RandomPassword = Math.random().toString(36).slice(-8);
    const NewPasswordHash = await bcrypt.hash(RandomPassword, 10);

    await db.updateOne({ _id: found._id }, { password: NewPasswordHash });

    const messageToEmail = await transporter.sendMail({
      from: `"Control Panel Brasil" <controlpanelBR@gmail.com>`,
      to: found.email,
      subject: 'Recuperação de senha',
      text: `Sua senha é: ${RandomPassword}`,
    });

    return {
      message: 'Email enviado com sucesso.',
      messageToEmail,
      password: bcrypt.hashSync(RandomPassword, 10),
    };
  }
}

export const passwordService = new PasswordService();
