import { useState } from 'react'
import { Link } from 'react-router-dom'

import { api } from '../../services/api'
import styles from './styles.module.scss'

interface IMessage {
  data?: string;
  type?: string;
  warn: boolean;
}

export function RegisterForm(){

	const [name, setName] = useState('')
  const [username, setUsername] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [message, setMessage] = useState({ warn: false } as IMessage);

	const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*\.]).{8,}$/g;

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
		e.preventDefault()

		if(!name || !email || !password || !username) {
			setMessage({
				data: 'Você não informou todos os dados.',
				type: 'error',
				warn: true
			});

			return setTimeout(() => setMessage({ warn: false }), 2000);
		}

		if(password !== confirmPassword) {
			setMessage({
				data: 'As senhas não conferem.',
				type: 'error',
				warn: true
			});

			return setTimeout(() => setMessage({ warn: false }), 2000);
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
				<>{message.warn ?
					<label> 
						<div className={
							message.type === 'sucess' ? styles.Sucess :
							message.type === 'error' ? styles.Warn :
							styles.Load
						}> {message.data}
						</div>
					<br />
					</label>
				: null }</>
				<label>
					Nome:
					<input 
						placeholder='Digite seu nome completo'
						type="text" 
						name="name"
						value={name} 
            onChange={e => {
							setName(e.target.value);
						}	
					} />
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
            onChange={e => {
							setPassword(e.target.value);

							if (e.target.value) {
								!regex.test(e.target.value) ? setMessage({
									data: 'Senha fraca.',
									type: 'error',
									warn: true
								}) : setMessage({
									data: 'Senha forte.',
									type: 'sucess',
									warn: true
								});
							} else setMessage({ warn: false });
						}
					}/>
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