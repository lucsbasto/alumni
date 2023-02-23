"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const graduate_module_1 = require("./graduate/graduate.module");
const config_1 = require("@nestjs/config");
const graphql_1 = require("@nestjs/graphql");
const apollo_1 = require("@nestjs/apollo");
const path_1 = require("path");
const typeorm_1 = require("@nestjs/typeorm");
const college_module_1 = require("./college/college.module");
const address_module_1 = require("./address/address.module");
const country_module_1 = require("./country/country.module");
const state_module_1 = require("./state/state.module");
const user_module_1 = require("./user/user.module");
const city_module_1 = require("./city/city.module");
const major_module_1 = require("./major/major.module");
const address_entity_1 = require("./address/entities/address.entity");
const city_entity_1 = require("./city/entities/city.entity");
const college_entity_1 = require("./college/entities/college.entity");
const country_entity_1 = require("./country/entities/country.entity");
const graduate_entity_1 = require("./graduate/entities/graduate.entity");
const major_entity_1 = require("./major/entities/major.entity");
const state_entity_1 = require("./state/entities/state.entity");
const user_entity_1 = require("./user/entities/user.entity");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: '.env',
                isGlobal: true
            }),
            typeorm_1.TypeOrmModule.forRoot({
                host: process.env.DB_HOST,
                port: Number(process.env.DB_PORT),
                username: process.env.DB_USER,
                password: process.env.DB_PASS,
                database: process.env.DB_NAME,
                type: 'postgres',
                entities: [address_entity_1.Address, city_entity_1.City, college_entity_1.College, country_entity_1.Country, graduate_entity_1.Graduate, major_entity_1.Major, state_entity_1.State, user_entity_1.User],
                synchronize: true,
                logging: false
            }),
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                autoSchemaFile: (0, path_1.join)(process.cwd(), 'src/schema.gql')
            }),
            address_module_1.AddressModule,
            city_module_1.CityModule,
            college_module_1.CollegeModule,
            country_module_1.CountryModule,
            graduate_module_1.GraduateModule,
            major_module_1.MajorModule,
            state_module_1.StateModule,
            user_module_1.UserModule
        ],
        controllers: [],
        providers: []
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map