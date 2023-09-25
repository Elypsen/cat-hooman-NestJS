import { Injectable } from '@nestjs/common';
import { HoomansService } from 'src/hooman/hooman.service';
import { v4 as uuidv4 } from 'uuid';
import { CCat } from './cats.entity';
// interface HoomanWithCats extends Hooman {
//   cats: Cat[];
// }
@Injectable()
export class CatsService {
  private readonly cats: CCat[] = [];
  private hoomanService: HoomansService;

  async findAll(filter?: any): Promise<CCat[]> {
    if (filter) {
      if (filter === 'hoomanId') {
        const hoomanId = filter;
        const hooman = this.hoomanService.findOneById(hoomanId);
        return Promise.resolve((await hooman).cats);
      }
    }
    return Promise.resolve(this.cats);
  }

  create(input: any): Promise<CCat> {
    const newHooman: CCat = {
      id: uuidv4(),
      ...input,
    };
    this.cats.push(newHooman);
    return Promise.resolve(newHooman);
  }
}
