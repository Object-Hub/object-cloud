import { useState } from 'react'
import { api } from '../../services/api'
import styles from './styles.module.scss'

export function RegisterForm(){

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
		e.preventDefault()

		if(!name || !email || !password) {
			return alert('Preencha todos os campos obrigatórios.')
		}

		await api.post('/account/register', {
			name,
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
					Usuário:
					<input 
						placeholder='Digite seu nome de usuário'
						type="text" 
						name="username"
						value={name} 
            onChange={e => setName(e.target.value)} />
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

				<button type="submit">Cadastrar</button>
				<div className={styles.Register}>
				Já tem a conta?<a href="/login"> Entrar</a>
				</div>
			</form>
		</div>
	)
}