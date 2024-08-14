import 'dotenv/config';
import { schema } from '@/graphql/schema';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import cors from 'cors';
import express from 'express';
import http from 'http';

interface MyContext {
  [key: string]: unknown;
}

async function main() {
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer<MyContext>({
    schema,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();

  app.use(cors<cors.CorsRequest>());
  app.use(express.json());
  app.use(expressMiddleware(server));

  const port = process.env.PORT || 4000;

  await new Promise<void>((resolve) =>
    httpServer.listen({ port: port }, resolve),
  );

  console.log(`[server] Server ready at http://localhost:${port}/`);
}

main();
