import { useState } from "react";

import Container from './styles';
import api from "../../../services/api";

const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)*$/i;

interface IMessage {
  data?: string;
  type?: string;
  warn: boolean;
}

export function ForgotPasswordForm() {

  const [ email, setEmail ] = useState('');
  const [ message, setMessage ] = useState({ warn: false } as IMessage);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!email) return setMessage({
      data: 'Você não inseriu um email.',
      type: 'Warn',
      warn: true
    });

    setMessage({
      data: 'Enviando de recuperação...',
      type: 'Load',
      warn: true
    });

    api.post('/account/forgot-password', {
      email
    }).then((response) => {
      setMessage({
        data: response.data.message,
        type: 'Sucess',
        warn: true
      });
    }).catch((err) => {
      const { error } = err.response.data;
      console.log(error);

      setMessage({
        data: error,
        type: 'Warn',
        warn: true
      });
    });
  }

  return (
    <Container>
      <div>
        <form onSubmit={handleSubmit} className='Form'>
          <>{message.warn ?
            <label>
              <div className={message.type}>
                {message.data}
              </div>
              <br/>
            </label>
          : null }</>
          <label>
            Recuperação de senha:
            <input
              placeholder="Digite seu email cadastrado"
              type="text"
              name="email"
              onChange={e => {
                setEmail(e.target.value);

                if (e.target.value && !regex.test(e.target.value)) return setMessage({
                  data: 'Email inválido.',
                  type: 'Warn',
                  warn: true
                });

                setMessage({ warn: false });               
              }} />
          </label>
          <br />
          <button type="submit">Enviar</button>
          <div className={'Forgot'}>
            <a href="/register">Criar uma nova conta</a>{`  |  `}<a href="/login">Lembrou a senha?</a>
          </div>
        </form>
      </div>
    </Container>
  )
}
