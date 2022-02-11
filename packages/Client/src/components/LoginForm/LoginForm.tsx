export function LoginForm(){
	return (
		<div>
			<form>
				<label>
					Usuário:
					<input type="text" name="username" />
				</label>
				<br />
				<label>
					Senha:
					<input type="password" name="password" />
				</label>
			</form>
		</div>
	)
}