import { IPasswordRequest, IForgotPassword } from '../../Interfaces/Auth';
import { DataBase } from '@src/Database/Connections/Connect';
import { createTransport } from 'nodemailer';
import bcrypt from 'bcrypt';

const { users } = DataBase;

class PasswordService {
  async changePassword({ oldPassword, newPassword }: IPasswordRequest) {
    // Pegar senha atual do usuário

    const CheckPassword = await users.findOne({ password: CheckPasswordHash });
  }

  /*  async forgotPassword({ email }: IForgotPassword) {
    const found = users.findByEmail(email);

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
  } */
}

export const passwordService = new PasswordService();