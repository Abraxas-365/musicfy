import { Sequelize } from "sequelize-typescript";
import { AlbumORM } from "src/modules/albums/domain/models/album";

export const IDatabase = Symbol("IFechasRepo");
export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'root',
                password: 'password',
                database: 'musicfy',
            });
            sequelize.addModels([AlbumORM]);
            await sequelize.sync();
            return sequelize;
        },
    },
];
