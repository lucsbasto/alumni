import { Module } from '@nestjs/common';
import { CollegeResolver } from './college.resolver';
import { CollegeService } from './college.service';

@Module({
  providers: [CollegeResolver, CollegeService]
})
export class CollegeModule {}
