import { Sequelize } from "sequelize-typescript";
import { Album } from "src/modules/albums/domain/models/album";

export const IDatabase = Symbol("IFechasRepo");
export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'postgres',
                host: 'db',
                port: 5432,
                username: 'postgres',
                password: 'postgres',
                database: 'musicfy',
            });
            sequelize.addModels([Album]);
            await sequelize.sync();
            return sequelize;
        },
    },
];
