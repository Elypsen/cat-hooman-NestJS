import { Module } from '@nestjs/common';
import { CatsResolver } from './cats.resolver';
import { CCat } from './cats.entity';
import { CatsService } from './cats.service';

@Module({
  providers: [CatsResolver, CatsService, CCat],
})
export class CatsModule {}
