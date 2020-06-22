import { Router } from 'express';
import { uuid } from 'uuidv4';

const appointmentsRouter = Router();

appointmentsRouter.get('/', (request, response) =>
	response.json({ message: 'Hello World' }),
);

appointmentsRouter.post('/', (request, response) => {});

export default appointmentsRouter;
