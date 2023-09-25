import { Module } from '@nestjs/common';
import { HoomanResolver } from './hooman.resolver';
import { HoomansService } from './hooman.service';
import { CatsService } from 'src/cats/cats.service';

@Module({
  providers: [HoomanResolver, HoomansService, CatsService],
})
export class HoomanModule {}
