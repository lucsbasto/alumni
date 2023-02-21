import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateGraduateInput } from './dto/create-graduate.input';
import { UpdateGraduateInput } from './dto/update-graduate.input';
import { GraduateEntity } from './entities/graduate.entity';
import { GraduateRepository } from './graduate.repository';

@Injectable()
export class GraduateService {
  constructor (
    @InjectRepository(GraduateEntity)
    private readonly repository: GraduateRepository
  ) {}

  async create (_input: CreateGraduateInput): Promise<GraduateEntity> {
    return this.repository.save(_input);
  }

  async findAll (): Promise<GraduateEntity[]> {
    return this.repository.find();
  }

  async update (_input: UpdateGraduateInput): Promise<GraduateEntity | null> {
    await this.repository.update({ id: _input.id }, { ..._input });
    return this.repository.findOneBy({ id: _input.id });
  }

  async delete (id: number): Promise<void> {
    await this.repository.update({ id }, { deletedDate: new Date() });
  }
}
