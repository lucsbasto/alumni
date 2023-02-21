import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { GraduateEntity } from './entities/graduate.entity';

@Injectable()
export class GraduateRepository extends Repository<GraduateEntity> {}
