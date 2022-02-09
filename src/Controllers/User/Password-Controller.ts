import { Request, Response } from 'express';
import IUserRequest from '../../interfaces/User';

class PasswordController {
  async changePassword(req: Request, res: Response) {}

  async forgotPassword(req: Request, res: Response) {}

  private async resetPassword() {}
}

export const passwordController = new PasswordController();
