import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/Auth/AuthContext'
import styles from './styles.module.scss'

export function LoginForm(){

  const [ Login, setLogin ] = useState('')
  const [ password, setPassword ] = useState('')
  const { signIn } = useContext(AuthContext)
  const navigate = useNavigate()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()

    if(!Login || !password) {
      return alert('Você não digitou usuário ou a senha para logar'); 
    }

    try {
      const response = await signIn(Login, password)
      console.log(response)
      navigate('/')
    } catch (error) {
      const { message } = error as { message: string }
      console.log(message)
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
					onChange={e => setLogin(e.target.value)} />
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