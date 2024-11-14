import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const existingUser = await this.usersRepository.findOne({ where: { email: createUserDto.email } });
    if (existingUser) {
      throw new BadRequestException('Cet email est déjà utilisé');
    }
    return await this.usersRepository.save(createUserDto);
  }

  async findAll(): Promise<User[]> {
    const user = await this.usersRepository.find();
    if (!user) {
      throw new BadRequestException('Aucun utilisateur trouvé');
    }else{
        return user;
    }
  }

  async findOne(id: string): Promise<User> {
    const user = await this.usersRepository.findOne({ where: { id: parseInt(id) } });
    console.log(user);
    if (!user) {
      throw new BadRequestException('Aucun utilisateur trouvé');
    }
    return user;
  }

    async delete(id: string): Promise<void> {
        const user = await this.usersRepository.findOne({ where: { id: parseInt(id) } });
        console.log(user);
        if (!user) {
        throw new BadRequestException('Aucun utilisateur trouvé');
        }
        await this.usersRepository.delete(user.id);
    }

    async update(id: string, createUserDto: CreateUserDto): Promise<User> {
        const user = await this.usersRepository.findOne({ where: { id: parseInt(id) } });
        if (!user) {
        throw new BadRequestException('Aucun utilisateur trouvé');
        }
        await this.usersRepository.update(user.id, createUserDto);
        return await this.usersRepository.findOne({ where: { id: parseInt(id) } });
    }
}