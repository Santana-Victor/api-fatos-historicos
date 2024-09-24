import 'dotenv/config';
import fastify from 'fastify';
import cors from '@fastify/cors';
import routes from './routes/routes';

const app = fastify({ logger: true });

async function startServer() {
  await app.register(cors);
  await app.register(routes);

  try {
    await app.listen({ port: 8080 });
  } catch (error) {
    process.exit(1);
  }
}

startServer();
