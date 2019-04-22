import { Router } from 'express';
import validate from 'express-validation';

import * as userController from './user.controller';
import userValidation from './user.validation';

const routes = new Router();

routes.post('/signup', validate(userValidation), userController.signUp);

export default routes;
