import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { HoomansService } from './hooman.service';
import { CatsService } from 'src/cats/cats.service';
import { Cat, Hooman } from 'src/graphql';

@Resolver(() => Hooman)
export class HoomanResolver {
  constructor(
    private hoomansService: HoomansService,
    private catsService: CatsService,
  ) {}

  @Query(() => Hooman)
  async getHooman(@Args('id') id: number) {
    return this.hoomansService.findOneById(id);
  }

  @ResolveField(() => [Cat])
  async getCats(@Parent() hooman) {
    const { id } = hooman;
    return this.catsService.findAll({ hoomanId: id });
  }
}
