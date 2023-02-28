import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './dataBase/prisma.service';
import { randomUUID } from 'node:crypto';
import { CreateMember } from './dtos/create-team-member-body';
import { MembersRepository } from './repositories/members-repository';

@Controller('app')
export class AppController {

  constructor(private membersRepository: MembersRepository
) {}

  @Post('hello')
  async getHello(@Body() body: CreateMember) {
    const { name, 'function': memberFunction } = body;

    await this.membersRepository.create(name, memberFunction);

    // const member = await this.prisma.Member.create({
    //   data: {
    //     id: randomUUID(),
    //     name,
    //     function: memberFunction
    //   }
    // });

    // return {
    //   member,
    // };
  }
}
