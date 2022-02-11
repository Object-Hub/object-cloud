import { Request, Response } from 'express';
import IPasswordRequest from '../../interfaces/Auth';
import { users } from './Auth-controller';

class PasswordController {
	async changePassword(req: Request, res: Response) {
		const { oldPassword, newPassword, confirmPassword }: IPasswordRequest = req.body;

		if (users.find((user) => user.password !== oldPassword))
			return res.status(400).json({
				error: 'Senha incorreta.',
			});

		return res.status(200).json({
			message: 'Senha alterada com sucesso.',
		});
	}

	async forgotPassword(req: Request, res: Response) {
		const { newPassword, confirmPassword }: IPasswordRequest = req.body;

		if (users.find((user) => user.password === newPassword))
			return res.status(400).json({
				error: 'A Senha atual não pode ser igual a antiga.',
			});

		return res.status(200).json({
			message: 'Senha alterada com sucesso.',
		});
	}

	private async resetPassword() {}
}

export const passwordController = new PasswordController();
