import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { HoomansService } from './hooman.service';
import { CatsService } from 'src/cats/cats.service';
import { CCat } from 'src/cats/cats.entity';
import { CHooman } from './hooman.entity';

@Resolver('CHooman')
export class HoomanResolver {
  constructor(
    private hoomansService: HoomansService,
    private catsService: CatsService,
  ) {}

  @Query(() => CHooman)
  async getHooman(@Args('id') id: number) {
    return this.hoomansService.findOneById(id);
  }

  @ResolveField(() => [CCat])
  async getCatsByHooman(@Parent() hooman: CHooman) {
    const { id } = hooman;
    return this.catsService.findAll({ hoomanId: id });
  }
}
