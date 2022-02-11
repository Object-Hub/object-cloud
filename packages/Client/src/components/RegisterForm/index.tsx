import styles from './styles.module.scss'

export function RegisterForm(){
	return (
		<div className={styles.Container}>
			<form className={styles.Form}>
				<label>
					Usuário:
					<input 
						placeholder='Digite seu nome de usuário'
						type="text" 
						name="username" />
				</label>
				<br />
        <label>
					E-mail:
					<input 
						placeholder='Digite seu e-mail'
						type="text" 
						name="e-mail" />
				</label>
				<br />
				<label>
					Senha:
					<input 
						placeholder='Digite sua nova senha'
						type="password" 
						name="password" />
				</label>

        <button type="submit">Cadastrar</button>
        <div className={styles.Register}>
        Já tem a conta?<a href="/login"> Entrar</a>
        </div>
			</form>
		</div>
	)
}