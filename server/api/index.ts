import { Router, Request, Response } from 'express';
const apiRoute = Router();

apiRoute.get('/', (req: Request, res: Response) => {
  res.json({
    name: 'sam',
    age: 34,
  });
});

export default apiRoute;
