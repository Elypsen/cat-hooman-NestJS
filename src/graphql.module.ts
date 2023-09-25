import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { HoomanResolver } from './hooman/hooman.resolver';
import { CatsService } from './cats/cats.service';
import { HoomansService } from './hooman/hooman.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      context: ({ req }) => {
        {
          req;
        }
      },
      autoSchemaFile: true,
    }),
  ],
  controllers: [],
  providers: [HoomanResolver, CatsService, HoomansService],
})
export class GraphQlModule {}
