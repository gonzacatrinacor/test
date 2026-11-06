import { DataSource, DataSourceOptions } from "typeorm";


export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5436,
    username: 'postgres',
    password: 'sudopg',
    database: 'PBdb',
    /* add to test */
    ssl: false,
    logging: true,
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/db/migrations/*.js'],
   // entities: ['./src/domain/*/.entity{.ts,.js}'],
   // migrations: ['./src/db/migrations/*{.ts,.js}'],
    migrationsRun: true,
    

    // synchronize: true,
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;