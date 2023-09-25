import { Field, ID, ObjectType } from '@nestjs/graphql';
import { CCat } from '../cats/cats.entity';

@ObjectType()
export class CHooman {
  @Field(() => ID)
  id: string;

  @Field()
  firstname: string;

  @Field()
  lastname: string;

  @Field(() => [CCat])
  cats: CCat[];
}
