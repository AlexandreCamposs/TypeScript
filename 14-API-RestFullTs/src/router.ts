import { Router, Request, Response } from 'express';
import {
  createmovie,
  findMovieById,
  getAllMovies,
  removeMovie,
  updateMovie,
} from './controllers/movieControllers';

//Validation
import { validate } from './middleware/handleValidation';
import { movieCreateValidation } from './middleware/movieValidation';

const router = Router();

export default router
  .get('/test', (req: Request, res: Response) => {
    return res.status(200).send('Api ok');
  })
  .post('/movie', movieCreateValidation(), validate, createmovie)
  .get('/movie/:id', findMovieById)
  .get('/movie', getAllMovies)
  .delete('/movie/:id', removeMovie)
  .patch('/movie/:id', movieCreateValidation(), validate, updateMovie);
