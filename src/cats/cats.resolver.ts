import { Resolver, Query } from '@nestjs/graphql';
import { CCat } from './cats.entity';
import { CatsService } from './cats.service';

@Resolver('CCat')
export class CatsResolver {
  constructor(private readonly catsService: CatsService) {}

  @Query(() => [CCat])
  async getCats(): Promise<CCat[]> {
    return this.catsService.findAll();
  }
}
