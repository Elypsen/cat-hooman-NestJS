import { Module } from '@nestjs/common';
import { HoomanResolver } from './hooman.resolver';
import { HoomansService } from './hooman.service';
import { CatsService } from 'src/cats/cats.service';
import { CHooman } from './hooman.entity';

@Module({
  providers: [HoomanResolver, HoomansService, CatsService, CHooman],
})
export class HoomanModule {}
