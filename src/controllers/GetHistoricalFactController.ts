import { FastifyRequest, FastifyReply } from 'fastify';
import YearEnteredValidator from '../validators/YearEnteredValidator';
import GetHistoricalFactService from '../services/GetHistoricalFactService';

export default class GetHistoricalFactController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { year } = request.params as { year: string };

    const isValid = new YearEnteredValidator().validate(year);

    if (isValid) {
      const getHistoricalFact = new GetHistoricalFactService();
      const historicalFact = await getHistoricalFact.execute(year);

      reply.send(historicalFact);
    } else {
      reply.status(400).send({ erro: 'O ano informado é inválido' });
    }
  }
}
