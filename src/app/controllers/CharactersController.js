import marvelApi from '../services/marvelApi';
import buildMarvelApiRoute from '../utils';

class CharactersController {
  async index(request, response) {
    try {
      const { offset } = request.query;
      const queries = {
        limit: 100,
        offset,
      };
      const url = buildMarvelApiRoute('/characters', queries);

      const { data } = await marvelApi.get(url);
      return response.json(data);
    } catch (error) {
      return response.status(error.status || 400).json(error.message);
    }
  }

  async show(request, response) {
    try {
      const { name } = request.query;

      const url = buildMarvelApiRoute(`/characters?${name}`);

      const { data } = await marvelApi.get(url);

      return response.json(data);
    } catch (error) {
      return response.status(error.status || 400).json(error.message);
    }
  }
}

export default new CharactersController();
