import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CCat {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  age: number;
}
