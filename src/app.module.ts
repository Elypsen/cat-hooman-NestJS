import { Module } from '@nestjs/common';
import { GraphQlModule } from './graphql.module'; // Importez le module GraphQL
import { HoomanModule } from './hooman/hooman.module';

@Module({
  imports: [HoomanModule, GraphQlModule], // Ajoutez GraphqlModule ici
})
export class AppModule {}
