import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IoMdLogIn } from 'react-icons/io'

import { AuthContext } from '../../../contexts/Auth/AuthContext';
import Container from './styles';

export function LoginForm() {

	const [ MessageError, setMessageError ] = useState('');
	const [ MessageSucess, setMessageSucess ] = useState('');

  const [ Login, setLogin ] = useState('');
  const [ LoginError, setLoginError] = useState('');

  const [ password, setPassword ] = useState('');
  const [ PasswordError, setPasswordError] = useState('');

  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    
		signIn(Login, password).then((response) => {
			navigate('/');

			const { message } = response.data
			setMessageSucess(message);
			setMessageSucess('Login realizado com sucesso!');
		}).catch((err) => {
			const { error } = err.response.data;
			setMessageError(error);
		});

  }

	return (
		<Container>
			<div>
				{MessageError ? '' : null }
				<form onSubmit={handleSubmit} className='Form'>
				<label>
					Usuário:
					<input 
						placeholder='Digite seu nome de usuário ou e-mail'
						type="text" 
						name="username"
						onChange={e => {setLogin(e.target.value);}} />
				</label>
				<span>{LoginError && <div className='Warn' >{LoginError}</div>}</span>
				<br/>
				<label>
				Senha:
					<input 
						placeholder='Digite sua senha'
						type="password" 
						name="password" 
						onChange={(e) => setPassword(e.target.value) } />
				</label>
				{PasswordError && <div className='Warn' >{PasswordError}</div> }
					<button type="submit"><IoMdLogIn size ="18"/> Entrar</button>
					<div className='Register'>
						<a href="/register">Criar uma nova conta</a>{` | `}<a href="/forgot-password">Esqueci a senha</a>
					</div>
				</form>
			</div>
		</Container>
	)
}