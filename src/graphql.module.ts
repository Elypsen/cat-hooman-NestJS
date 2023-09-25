import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { HoomanResolver } from './hooman/hooman.resolver';
import { CatsService } from './cats/cats.service';
import { HoomansService } from './hooman/hooman.service';
import { HoomanModule } from './hooman/hooman.module';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      typePaths: ['./**/*.gql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        outputAs: 'class',
        emitTypenameField: true,
      },
      include: [HoomanModule],
    }),
  ],
  controllers: [],
  providers: [HoomanResolver, CatsService, HoomansService],
})
export class GraphQlModule {}
