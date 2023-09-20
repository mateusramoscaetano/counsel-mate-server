import { FastifyReply, FastifyRequest } from "fastify";
import { CreateNewMateUseCase } from "./CreateNewMateUseCase";

interface CreateNewMateRequest {
  name: string;
  email: string;
}

export class CreateNewMateController {
  constructor(private createNewMateUseCase: CreateNewMateUseCase) {}

  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { name, email } = request.body as CreateNewMateRequest;

    try {
      const createdMate = await this.createNewMateUseCase.execute({
        name,
        email,
      });

      reply.status(201).send({ createdMate });
    } catch (error) {
      reply.status(400).send(error);
    }
  }
}
