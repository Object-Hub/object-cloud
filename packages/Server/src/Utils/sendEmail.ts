import { createTransport } from 'nodemailer';
import { config } from 'dotenv';
config();

interface EmailRequest {
  email: string;
  token: string;
}

export const sendEmail = async ({ email, token }: EmailRequest) => {
  const transporter = createTransport({
    service: process.env.SERVICE || 'gmail',
    auth: {
      user: process.env.EMAIL || 'controlpanelbr@gmail.com',
      pass: process.env.PASS || 'TesteNode1234',
    },
  });

  const messageToEmail = await transporter.sendMail({
    from: `"Control Panel Brasil" <controlpanelBR@gmail.com>`,
    to: email,
    subject: 'Recuperação de senha',
    html: `Clique no link <a href="https://localhost:5555/forgot-password/${token}">link</a> para mudar sua senha.`,
  });

  return messageToEmail;
};
