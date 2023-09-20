import { PostgresUserRepository } from "../../../repositories/implementations/PostgresUserRepository";
import { CreateNewMateController } from "./CreateNewMateController";
import { CreateNewMateUseCase } from "./CreateNewMateUseCase";

const postgresUserRepository = new PostgresUserRepository();

const createNewMateUseCase = new CreateNewMateUseCase(postgresUserRepository);

const createNewMateController = new CreateNewMateController(
  createNewMateUseCase
);

export { createNewMateUseCase, createNewMateController };
