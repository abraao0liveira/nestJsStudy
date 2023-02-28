export abstract class MembersRepository {
   abstract create(name: string, memberFunction: string): Promise<void>
}
