import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { CHooman } from './hooman.entity';

@Injectable()
export class HoomansService {
  private readonly hoomans: CHooman[] = [];

  findAll(): Promise<CHooman[]> {
    return Promise.resolve(this.hoomans);
  }

  findOneById(id): Promise<CHooman> {
    const hooman = this.hoomans.find((hooman) => hooman.id === id);
    return Promise.resolve(hooman);
  }

  create(input: any): Promise<CHooman> {
    const newHooman: CHooman = {
      id: uuidv4(),
      ...input,
    };
    this.hoomans.push(newHooman);
    return Promise.resolve(newHooman);
  }

  findByIdAndUpdate(id: string, input: any): Promise<CHooman> {
    const index = this.hoomans.findIndex((hooman) => hooman.id === id);
    if (index === -1) {
      throw new Error('Hooman not found');
    }
    const updatedHooman = { ...this.hoomans[index], ...input };
    this.hoomans[index] = updatedHooman;
    return Promise.resolve(updatedHooman);
  }

  findByIdAndDelete(id: string): Promise<void> {
    const index = this.hoomans.findIndex((hooman) => hooman.id === id);
    if (index === -1) {
      throw new Error('Hooman not found');
    }
    this.hoomans.splice(index, 1);
    return Promise.resolve();
  }
}
