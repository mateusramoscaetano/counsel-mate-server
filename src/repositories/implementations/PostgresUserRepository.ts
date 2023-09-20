import { IUserRepository } from "../IUserRepository";
import { prisma } from "../../lib/prisma";

export class PostgresUserRepository implements IUserRepository {
  async list(): Promise<{ id: number; email: string; name: string }[]> {
    const users = await prisma.mate.findMany();
    return users;
  }
  async findByEmail(email: string): Promise<Boolean> {
    const user = await prisma.mate.findUnique({ where: { email } });

    if (!user) {
      return false;
    }

    return true;
  }
  async update(user: {
    id: number;
    email: string;
    name: string;
  }): Promise<void> {
    await prisma.mate.update({
      where: { id: user.id },
      data: user,
    });
  }
  async save(user: {
    id: number;
    email: string;
    name: string;
  }): Promise<{ id: number; email: string; name: string }> {
    const newMate = await prisma.mate.create({
      data: { id: user.id, email: user.email, name: user.name },
    });

    return newMate;
  }
  async delete(id: number): Promise<void> {
    await prisma.mate.delete({ where: { id } });
  }
  async findById(
    id: number
  ): Promise<{ id: number; email: string; name: string }> {
    const user = await prisma.mate.findUnique({ where: { id } });

    if (!user) {
      throw new Error(`User with id ${id} not found.`);
    }

    return user;
  }
}
