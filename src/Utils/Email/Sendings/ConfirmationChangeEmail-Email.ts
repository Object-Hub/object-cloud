import { transporter } from '../Transporter';
import { IEmailRequest } from '../../../Interfaces/Email';

export const ConfirmationChangeEmail = async ({ id, name, email, token }: IEmailRequest) => {
  const messageToEmail = await transporter.sendMail({
    from: `"Control Panel Brasil" <controlpanelBR@gmail.com>`,
    to: email,
    subject: 'Verificar alteração de Email',
    html: `<p>Olá, ${name}. Clique <a href="http://localhost:5555/confirm-email/${id}/${token}">Aqui</a> para verificar alteração do seu email.</p>`,
  });

  return messageToEmail;
};
