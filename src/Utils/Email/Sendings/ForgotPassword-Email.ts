import { transporter } from '../Transporter';
import { IEmailRequest } from '../../../Interfaces/Email';

export const sendEmailForgotPassword = async ({ id, name, email, token }: IEmailRequest) => {
  const messageToEmail = await transporter.sendMail({
    from: `"Control Panel Brasil" <controlpanelBR@gmail.com>`,
    to: email,
    subject: 'Recuperação de senha',
    html: `<p>Olá, ${name}. Clique <a href="http://localhost:5555/account/forgot-password/${id}/${token}">Aqui</a> para recuperar sua senha.</p>`,
  });

  return messageToEmail;
};
