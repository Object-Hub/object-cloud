import { useState } from 'react'
import api from '../../services/api'
import styles from './styles.module.scss'

export function LoginForm(){

  const [ user, setUser ] = useState('')
  const [ password, setPassword ] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()

    if(!user || !password) {
      return alert('Você não digitou usuário ou a senha para logar'); 
    }

	const EmailOrUsername = user.includes('@') ? 'email' : 'username'

	await api.post('/account/login', {
		[EmailOrUsername]: user,
		password
	}).then(response => {
		console.log(response.data)
	}).catch(err => {
		const { error } = err.response.data
		alert(error)
	})
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
					name="password" 
					onChange={e => setPassword(e.target.value)}/>
			</label>

        <button type="submit">Entrar</button>
        <div className={styles.Register}>
          <a href="/register">Criar uma nova conta</a>{` | `}<a href="/forgot-password">Esqueci a senha</a>
        </div>
			</form>
		</div>
	)
}