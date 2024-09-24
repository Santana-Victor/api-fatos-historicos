import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import GetHistoricalFactController from '../controllers/GetHistoricalFactController';

export default async function routes(fastify: FastifyInstance) {
  fastify.get(
    '/facts/:year',
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new GetHistoricalFactController().handle(request, reply);
    }
  );
}
