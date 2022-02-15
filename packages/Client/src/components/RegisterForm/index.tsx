import { useState } from 'react'
import { Link } from 'react-router-dom'
import { api } from '../../services/api'
import styles from './styles.module.scss'

export function RegisterForm(){

	const [name, setName] = useState('')
  const [username, setUsername] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')


	async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
		e.preventDefault()

		if(!name || !email || !password || !username) {
			return alert('Preencha todos os campos obrigatórios.')
		}

		if(password !== confirmPassword) {
			return alert('As senhas não conferem.')
		}

		await api.post('/account/register', {
			name,
      username,
			email,
			password
		}).then(response => {
			console.log(response)        
		}).catch(err => {
			const { error } = err.response.data
			alert(error)
		})
	}

	return (
		<div className={styles.Container}>
			<form onSubmit={handleSubmit} className={styles.Form}>
				<label>
					Nome:
					<input 
						placeholder='Digite seu nome completo'
						type="text" 
						name="name"
						value={name} 
            onChange={e => setName(e.target.value)} />
				</label>
        <br />
        <label>
					Apelido:
					<input 
						placeholder='Digite seu nome de usuário'
						type="text" 
						name="username"
						value={username} 
            onChange={e => setUsername(e.target.value)} />
				</label>
				<br />
        <label>
					E-mail:
					<input 
						placeholder='Digite seu e-mail'
						type="email" 
						name="e-mail"
						value={email} 
            onChange={e => setEmail(e.target.value)}/>
				</label>
				<br />
				<label>
          Senha:
          <input 
            placeholder='Digite sua nova senha'
            type="password" 
            name="password" 
            value={password} 
            onChange={e => setPassword(e.target.value)}/>
				</label>
				<br />
				<label>
          Confirme sua senha:
          <input 
            placeholder='Digite sua senha novamente'
            type="password" 
            name="confirmPassword" 
            value={confirmPassword} 
            onChange={e => setConfirmPassword(e.target.value)}/>
				</label>

				<button type="submit">Cadastrar</button>
				<div className={styles.Register}>
				Já tem a conta?<a href="/login"> Entrar</a>
				</div>
			</form>
		</div>
	)
}