import { Mate } from "@prisma/client";
import { ICreateNewMateDto } from "../useCases/Mate/CreateNewMate/CreateNewMateDto";

export interface IUserRepository {
  list(): Promise<Mate[]>;
  findByEmail(email: string): Promise<Boolean>;
  update(user: Mate): Promise<void>;
  save(user: ICreateNewMateDto): Promise<Mate>;
  delete(id: number): Promise<void>;
  findById(id: number): Promise<Mate>;
}
