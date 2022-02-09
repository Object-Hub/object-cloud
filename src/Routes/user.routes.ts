import { Router } from 'express';

const UserRoutes = Router();

UserRoutes.get('/account'); // Account User
UserRoutes.get('/account/api'); // API User

export default UserRoutes;