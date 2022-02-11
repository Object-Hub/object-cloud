export function LoginForm(){
    return (
		<div>
			<form>
				<label>
					Username:
					<input type="text" name="username" />
				</label>
				<br />
				<label>
					Password:
					<input type="password" name="password" />
				</label>
			</form>
		</div>
    )
}