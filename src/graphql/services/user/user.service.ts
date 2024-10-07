import { Injectable } from '@nestjs/common';
import { UserDto } from '../../dto/user.dto/user.dto';

@Injectable()
export class UsersService {
  private readonly users: UserDto[] = [];

  async create(user: UserDto): Promise<UserDto> {
    this.users.push(user);
    return user;
  }

  async findAll(): Promise<UserDto[]> {
    return this.users;
  }

  async findOne(id: number): Promise<UserDto> {
    return this.users[id];
  }

  async update(id: number, user: UserDto): Promise<UserDto> {
    this.users[id] = user;
    return user;
  }

  async delete(id: number): Promise<UserDto> {
    const deletedUser = this.users[id];
    this.users.splice(id, 1);
    return deletedUser;
  }
}
