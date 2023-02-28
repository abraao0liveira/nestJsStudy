import { PrismaService } from "src/dataBase/prisma.service";
import { MembersRepository } from "../members-repository";
import { randomUUID } from "node:crypto";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PrismaMembersRepository implements MembersRepository {

    constructor(private prisma: PrismaService){}
    
    async create(name: string, memberFunction: string): Promise<void> {
        await this.prisma.Member.create({
            data: {
                id: randomUUID(),
                name,
                function : memberFunction
            }
        })
    }
}
