import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UserResolver } from './resolvers/user/user.resolver';
import { UsersService } from './services/user/user.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: {
        path: './schema.graphql'
      },
    }),
  ],
  providers: [UserResolver, UsersService],
})
export class GraphqlModule {}
