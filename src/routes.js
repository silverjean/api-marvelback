import { Router } from 'express';

import CharactersController from './app/controllers/CharactersController';

import logRequestsMiddleware from './app/middlewares/logRequests';

const routes = new Router();

routes.use(logRequestsMiddleware);

routes.get('/characters', CharactersController.index);
routes.get('/characters/:name', CharactersController.show);

export default routes;
