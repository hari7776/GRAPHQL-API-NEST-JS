import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { UserDto } from '../../dto/user.dto/user.dto';
import { UsersService } from '../../services/user/user.service';

@Resolver('User')
export class UserResolver {
  constructor(private readonly usersService: UsersService) {}

//   @Query('users')
//   async getUsers() {
//     return await this.usersService.findAll();
//   }

  @Query(returns => UserDto)
  async getUser(@Args('id') id: number): Promise<UserDto>{
    return await this.usersService.findOne(id);
  }

  @Mutation(returns => UserDto)
  async createUser(@Args('input') input: UserDto) : Promise<UserDto> {
    return await this.usersService.create(input);
  }

//   @Mutation('updateUser')
//   async updateUser(@Args('id') id: number, @Args('input') input: UserDto) {
//     return await this.usersService.update(id, input);
//   }

//   @Mutation('deleteUser')
//   async deleteUser(@Args('id') id: number) {
//     return await this.usersService.delete(id);
//   }
}
