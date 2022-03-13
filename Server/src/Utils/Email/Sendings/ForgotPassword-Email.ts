import { transporter } from '../Transporter';

interface EmailRequest {
  id: string;
  name: string;
  email: string;
  token: string;
}

export const sendEmailForgotPassword = async ({ id, name, email, token }: EmailRequest) => {
  const messageToEmail = await transporter.sendMail({
    from: `"Control Panel Brasil" <controlpanelBR@gmail.com>`,
    to: email,
    subject: 'Recuperação de senha',
    html: `<p>Olá, ${name}. Clique <a href="http://localhost:5555/account/forgot-password/${id}/${token}">Aqui</a> para recuperar sua senha.</p>`,
  });

  return messageToEmail;
};
