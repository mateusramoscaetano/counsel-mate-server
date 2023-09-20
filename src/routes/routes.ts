import fastify, { FastifyInstance } from "fastify";
import { createNewMateController } from "../useCases/Mate/CreateNewMate";

export async function createNewMateRoute(app: FastifyInstance) {
  app.post("/create-mate", async (request, reply) => {
    return createNewMateController.handle(request, reply);
  });
}
