import { Injectable } from '@nestjs/common';
import { Cat } from 'src/graphql';
import { HoomansService } from 'src/hooman/hooman.service';

// interface HoomanWithCats extends Hooman {
//   cats: Cat[];
// }
@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];
  private hoomanService: HoomansService;

  async findAll(filter?: any): Promise<Cat[]> {
    if (filter) {
      if (filter === 'hoomanId') {
        const hoomanId = filter;
        const hooman = this.hoomanService.findOneById(hoomanId);
        return Promise.resolve((await hooman).cats);
      }
    }
    return Promise.resolve(this.cats);
  }
}
