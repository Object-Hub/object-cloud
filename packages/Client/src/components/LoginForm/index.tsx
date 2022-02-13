import { useState } from 'react'
import styles from './styles.module.scss'

export function LoginForm(){

  const [ user, setUser ] = useState('')
  const [ password, setPassword ] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()

    if(!user || !password) {
      return alert('Você não digitou usuário ou a senha para logar'); 
    }
  }

	return (
		<div className={styles.Container}>
			<form onSubmit={handleSubmit} className={styles.Form}>
				<label>
					Usuário:
					<input 
						placeholder='Digite seu nome de usuário ou e-mail'
						type="text" 
						name="username"
            onChange={e => setUser(e.target.value)} />
				</label>
				<br />
				<label>
					Senha:
					<input 
						placeholder='Digite sua senha'
						type="password" 
						name="password" />
				</label>

        <button type="submit">Entrar</button>
        <div className={styles.Register}>
          <a href="/register">Criar uma nova conta</a>{` | `}<a href="/forgot-password">Esqueci a senha</a>
        </div>
			</form>
		</div>
	)
}