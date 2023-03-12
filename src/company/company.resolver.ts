import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CompanyService } from './company.service'
import { CreateCompanyInput } from './dto/create-company.input'
import { UpdateCompanyInput } from './dto/update-company.input'
import { Company } from './entities/company.entity'

@Resolver()
export class CompanyResolver {
  constructor (private readonly companyService: CompanyService) {}

  @Query(() => [Company], { name: 'findAllCompany' })
  async list (): Promise<Company[]> {
    return this.companyService.findAll()
  }

  @Query(() => Company, { name: 'findCompanyById' })
  async findOne (@Args('id') id: string): Promise<Company | null> {
    return this.companyService.findOne(id)
  }

  @Mutation(() => Company, { name: 'createCompany' })
  async create (@Args('createCompanyInput') createCompanyInput: CreateCompanyInput): Promise<Company> {
    return this.companyService.create(createCompanyInput)
  }

  @Mutation(() => Company, { name: 'updateCompany' })
  async update (@Args('updateCompanyInput') updateCompanyInput: UpdateCompanyInput): Promise<Company | null> {
    return this.companyService.update(updateCompanyInput)
  }

  @Mutation(() => Company, { name: 'deleteCompany' })
  async delete (@Args('id') id: string): Promise<void> {
    return this.companyService.delete(id)
  }
}
