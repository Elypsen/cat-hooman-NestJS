import { Injectable } from '@nestjs/common';
import { Hooman } from 'src/graphql';

@Injectable()
export class HoomansService {
  private readonly hoomans: Hooman[] = [];

  findAll(): Promise<Hooman[]> {
    return Promise.resolve(this.hoomans);
  }

  findOneById(id): Promise<Hooman> {
    const hooman = this.hoomans.find((hooman) => hooman.id === id);
    return Promise.resolve(hooman);
  }

  create(input: any): Promise<Hooman> {
    const newHooman: Hooman = {
      id: this.hoomans.length + 1,
      ...input,
    };
    this.hoomans.push(newHooman);
    return Promise.resolve(newHooman);
  }

  findByIdAndUpdate(id: number, input: any): Promise<Hooman> {
    const index = this.hoomans.findIndex((hooman) => hooman.id === id);
    if (index === -1) {
      throw new Error('Hooman not found');
    }
    const updatedHooman = { ...this.hoomans[index], ...input };
    this.hoomans[index] = updatedHooman;
    return Promise.resolve(updatedHooman);
  }

  findByIdAndDelete(id: number): Promise<void> {
    const index = this.hoomans.findIndex((hooman) => hooman.id === id);
    if (index === -1) {
      throw new Error('Hooman not found');
    }
    this.hoomans.splice(index, 1);
    return Promise.resolve();
  }
}
