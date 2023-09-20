import { User } from "../../../entities/User";
import { IUserRepository } from "../../../repositories/IUserRepository";
import { ICreateNewMateDto } from "./CreateNewMateDto";

export class CreateNewMateUseCase {
  constructor(private usersRepository: IUserRepository) {}

  async execute(data: ICreateNewMateDto) {
    const userAlreadyExist = await this.usersRepository.findByEmail(data.email);

    if (userAlreadyExist) {
      throw new Error("User already exists.");
    }

    const user = await this.usersRepository.save(data);

    return user;
  }
}
