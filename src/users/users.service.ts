import { Injectable, Inject, HttpCode } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private usersRepository: Repository<User>) { }

    async createUser(user: User): Promise<User[]> {
        return await this.usersRepository.find();
    }

    async getUser(id: number): Promise<User[]> {
        return await this.usersRepository.find({
            select: ['fullName', 'birthday', 'isActive'],
            where: [{ id }],
        });
    }

    @HttpCode(200)
    async updateUser(user: User) {
        this.usersRepository.save(user);
        return 'success';
    }

    async deleteUser(user: User) {
        this.usersRepository.delete(user);
    }
}
