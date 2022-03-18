import { useContext, useState } from "react";

import { ForgotContext } from "../../contexts/Password/ForgotContext";
import styles from './styles.module.scss';
import api from "../../services/api";

interface IMessage {
  data: string;
  type: string;
  warn: boolean;
}

export function ForgotPasswordForm() {

  const [ email, setEmail ] = useState('');
  const [ message, setMessage ] = useState({ warn: false } as IMessage);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!email) return setMessage({
      data: 'Você não inseriu um email.',
      type: 'error',
      warn: true
    });

    if (!email.includes("@")) return setMessage({
      data: 'Email inválido.',
      type: 'error',
      warn: true
    });

    setMessage({
      data: 'Enviando de recuperação...',
      type: 'load',
      warn: true
    });

    api.post('/account/forgot-password', {
      email
    }).then((response) => {
      setMessage({
        data: response.data.message,
        type: 'sucess',
        warn: true
      });
    }).catch((err) => {
      const { error } = err.response.data;
      console.log(error);

      setMessage({
        data: error,
        type: 'error',
        warn: true
      })
    });
  }

  return (
    <div className={styles.Container}>
      <form onSubmit={handleSubmit} className={styles.Form}>
        <>{message.warn ?
          <label>
            <div className=
              {
                message.type == 'sucess' ? styles.Sucess : 
                message.type == 'error' ? styles.Warn :
                styles.Load
              }> {message.data}
            </div>
            <br />
          </label>
        : null }</>
        <label>
          Recuperação de senha:
          <input
            placeholder="Digite seu email cadastrado"
            type="text"
            name="email"
            onChange={e => setEmail(e.target.value)} />
        </label>
        <br />
        <button type="submit">Enviar</button>
        <div className={styles.Forgot}>
          <a href="/register">Criar uma nova conta</a>{` | `}<a href="/login">Lembrou a senha?</a>
        </div>
      </form>
    </div>
  )
}
