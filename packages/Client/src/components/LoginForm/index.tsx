import styles from './styles.module.scss'

export function LoginForm(){
	return (
		<div className={styles.Container}>
			<form className={styles.Form}>
				<label>
					Usuário:
					<input 
						placeholder='Digite seu nome de usuário ou e-mail'
						type="text" 
						name="username" />
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