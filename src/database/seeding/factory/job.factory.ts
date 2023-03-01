import { Faker } from '@faker-js/faker'
import { setSeederFactory } from 'typeorm-extension'
import { ExperienceLevelEnum } from '../../../job/enum/expecience-level.enum'
import { WorkModel } from '../../../job/enum/work-model.enum'
import { Company, Job, Skill } from '../seed/entities'

export const jobFactory = setSeederFactory(Job, (faker: Faker) => {
  const job = new Job()
  job.company = new Company()
  job.experienceLevel = faker.helpers.arrayElement([ExperienceLevelEnum.ENTRY, ExperienceLevelEnum.JUNIOR, ExperienceLevelEnum.SENIOR, ExperienceLevelEnum.MID])
  job.description = faker.random.words(12)
  job.name = faker.random.words(3)
  job.openings = Number(faker.random.numeric())
  job.work_model = faker.helpers.arrayElement([WorkModel.HIBRID, WorkModel.ON_SITE, WorkModel.REMOTE])
  job.skills = [new Skill()]
  job.isOpen = true
  return job
})
